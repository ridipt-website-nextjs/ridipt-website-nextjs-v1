import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Otp from "@/models/otp.model";
import Admin from "@/models/admin.model";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { mobile, otp } = await req.json();

    if (!mobile || !otp) {
      return NextResponse.json(
        { success: false, message: "Mobile number and OTP are required" },
        { status: 400 }
      );
    }

    // Find admin by mobile
    const admin = await Admin.findOne({ mobile: mobile.trim() });

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Admin not found" },
        { status: 404 }
      );
    }

    if (!admin.otp || admin.otp.length === 0) {
      return NextResponse.json(
        { success: false, message: "No OTP found for this admin" },
        { status: 400 }
      );
    }

    // Cleanup expired OTPs first
    await admin.cleanupExpiredOTPs();

    // Hash the provided OTP
    const hashedInputOtp = crypto.createHash("sha512").update(otp).digest("hex");

    // Find valid OTP from admin's OTP array
    const otpRecord = await Otp.findOne({
      _id: { $in: admin.otp },
      email: admin.email.toLowerCase(),
      otp: hashedInputOtp,
      expiresAt: { $gte: new Date() }
    });

    if (!otpRecord) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // Clean up: Remove verified OTP from both DB and admin array
    await Otp.findByIdAndDelete(otpRecord._id);
    admin.otp = admin.otp.filter((otpId: typeof otpRecord._id) => !otpId.equals(otpRecord._id));
    await admin.save();

    // Generate JWT token with 30 days expiry
    const token = jwt.sign(
      { 
        email: admin.email,
        adminId: admin._id,
        type: 'admin'
      },
      process.env.JWT_SECRET!,
      { expiresIn: '30d' }
    );

    return NextResponse.json({
      success: true,
      message: "Admin OTP verified successfully",
      token
    });

  } catch (error) {
    console.error("Admin OTP verification error:", error);
    return NextResponse.json(
      { success: false, message: "Server error while verifying OTP" },
      { status: 500 }
    );
  }
}
