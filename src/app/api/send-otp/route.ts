import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Otp from "@/models/otp.model";
import EmailService from "@/lib/email.service";
import crypto from "crypto";
import Admin from "@/models/admin.model";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { mobile } = await req.json();

    if (!mobile) {
      return NextResponse.json(
        { success: false, message: "Mobile number is required" },
        { status: 400 }
      );
    }

    // Find admin by mobile number
    const admin = await Admin.findOne({ mobile: mobile.trim() });

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Admin not found with this mobile number" },
        { status: 404 }
      );
    }

    const email = admin.email;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email not found for this admin" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format in admin record" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // 🧹 Manual cleanup expired OTPs
    const now = new Date();
    
    // Find expired OTPs for this admin
    const expiredOTPs = await Otp.find({
      _id: { $in: admin.otp || [] },
      expiresAt: { $lt: now }
    });

    if (expiredOTPs.length > 0) {
      const expiredIds = expiredOTPs.map(otp => otp._id);
      
      // Remove expired OTPs from database
      await Otp.deleteMany({
        _id: { $in: expiredIds }
      });
      
      // Remove expired OTP references from admin
      const validOtpIds = admin.otp?.filter((otpId:typeof otpRecord._id) => 
        !expiredIds.some(expiredId => expiredId.toString() === otpId.toString())
      ) || [];
      
      await Admin.findByIdAndUpdate(admin._id, { otp: validOtpIds });
      admin.otp = validOtpIds; // Update local admin object
    }

    // Rate limiting check - check if any valid OTP exists from last 1 minute
    const recentValidOTP = await Otp.findOne({
      _id: { $in: admin.otp || [] },
      email: normalizedEmail,
      createdAt: { $gte: new Date(Date.now() - 60 * 1000) }, // Last 1 minute
      expiresAt: { $gte: new Date() } // Still valid
    });

    if (recentValidOTP) {
      return NextResponse.json(
        { success: false, message: "Please wait 1 minute before requesting another OTP" },
        { status: 429 }
      );
    }

    // Limit maximum OTPs per admin (optional security measure)
    const activeOTPCount = await Otp.countDocuments({
      _id: { $in: admin.otp || [] },
      expiresAt: { $gte: new Date() }
    });

    if (activeOTPCount >= 3) { // Max 3 active OTPs
      return NextResponse.json(
        { success: false, message: "Too many active OTPs. Please wait for existing OTPs to expire." },
        { status: 429 }
      );
    }

    // 🔑 Generate secure random 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();

    // 🔒 Hash OTP using SHA-512
    const hashedOtp = crypto.createHash("sha512").update(otp).digest("hex");

    // ⏳ Expiry time (5 minutes from now)
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // 💾 Save OTP to DB
    const otpRecord = await Otp.create({
      email: normalizedEmail,
      otp: hashedOtp,
      expiresAt
    });

    // 🔗 Add OTP reference to admin's OTP array
    const updatedAdmin = await Admin.findByIdAndUpdate(
      admin._id,
      { $push: { otp: otpRecord._id } },
      { new: true }
    );

    // 📩 Send OTP via Email
    try {
      const emailService = new EmailService();
      const htmlContent = emailService.generateOTPEmailHTML(otp, normalizedEmail,email.name);

      await emailService.sendEmail({
        to: normalizedEmail,
        subject: `🔐 Admin Login - Your Verification Code: ${otp}`,
        html: htmlContent,
      });

      console.log(`Admin OTP sent successfully to ${normalizedEmail}`);

      return NextResponse.json({
        success: true,
        message: "OTP sent successfully to admin email",
        adminName: admin.name,
        maskedEmail: email.replace(/(.{2})(.*)(@.*)/, "$1***$3"),
        expiresIn: 300, // 5 minutes in seconds
        activeOTPs: updatedAdmin?.otp?.length || 0, // For debugging
      });

    } catch (emailError) {
      console.error("Email sending error:", emailError);

      // Rollback: Remove OTP from both DB and admin array
      await Otp.findByIdAndDelete(otpRecord._id);
      await Admin.findByIdAndUpdate(
        admin._id,
        { $pull: { otp: otpRecord._id } }
      );

      return NextResponse.json(
        { success: false, message: "Failed to send OTP email. Please try again." },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Admin OTP generation error:", error);
    return NextResponse.json(
      { success: false, message: "Server error while generating OTP" },
      { status: 500 }
    );
  }
}
