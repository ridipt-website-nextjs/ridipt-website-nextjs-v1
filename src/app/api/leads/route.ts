import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead, { ILead } from "@/models/leads.model";
import EmailService from "@/lib/email.service";
import Admin from "@/models/admin.model";


export async function POST(request: Request) {
  try {
    await dbConnect();
    const body: ILead = await request.json();

    const newLead = await Lead.create(body);
    const emailService = new EmailService();

    // 📧 1. Admin ko lead notification email send kro
    const admin = await Admin.findOne()

    try {
      await emailService.sendEmail({
        to: admin?.email || 'sales@yourcompany.com',
        subject: `🚀 New Business Lead: ${body.name} from ${body.country}`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Lead Alert</title>
          </head>
          <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; margin: 0; padding: 20px;">
            <div style="max-width: 700px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); overflow: hidden;">
              
              <!-- Admin Header -->
              <div style="background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%); padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0;">🎯 New Business Lead Alert</h1>
                <p style="color: #c4b5fd; font-size: 14px; margin: 5px 0 0 0;">Immediate Follow-up Required</p>
              </div>
              
              <!-- Lead Details -->
              <div style="padding: 30px;">
                <h2 style="color: #374151; margin: 0 0 20px 0; font-size: 20px;">💼 Lead Information</h2>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #7c3aed;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500; width: 150px;">👤 Name:</td>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600;">${body.name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">📧 Email:</td>
                      <td style="padding: 8px 0; color: #374151;"><a href="mailto:${body.email}" style="color: #7c3aed; text-decoration: none;">${body.email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">📱 Phone:</td>
                      <td style="padding: 8px 0; color: #374151;"><a href="tel:${body.phone}" style="color: #7c3aed; text-decoration: none;">${body.phone}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">🌍 Country:</td>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600;">${body.country}</td>
                    </tr>
                  </table>
                </div>
                
                <!-- Business Requirement -->
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                  <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 16px;">📋 Business Requirement:</h3>
                  <p style="color: #92400e; margin: 0; line-height: 1.6; font-size: 15px; background: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #fde68a;">"${body.businessRequirement}"</p>
                </div>
                
                <!-- Lead Priority -->
                <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
                  <h3 style="color: #166534; margin: 0 0 10px 0; font-size: 16px;">⚡ Next Actions:</h3>
                  <ul style="color: #166534; margin: 0; padding-left: 20px;">
                    <li>Contact within 2 hours for hot leads</li>
                    <li>Send personalized proposal/quote</li>
                    <li>Schedule discovery call</li>
                    <li>Add to CRM and follow-up sequence</li>
                  </ul>
                </div>
                
                <!-- Lead Score -->
                <div style="background: #ede9fe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8b5cf6;">
                  <h3 style="color: #5b21b6; margin: 0 0 10px 0; font-size: 16px;">📊 Lead Quality Indicators:</h3>
                  <ul style="color: #5b21b6; margin: 0; padding-left: 20px;">
                    <li><strong>Geographic:</strong> ${body.country} market</li>
                    <li><strong>Contact Method:</strong> Website form (High intent)</li>
                    <li><strong>Requirement:</strong> ${body.businessRequirement.length > 100 ? 'Detailed' : 'Basic'} description</li>
                  </ul>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="font-size: 12px; color: #64748b; margin: 0;">
                  Lead received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                </p>
                <p style="font-size: 11px; color: #94a3b8; margin: 5px 0 0 0;">
                  Lead ID: ${newLead._id}
                </p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      console.log(`✅ Admin lead notification sent successfully for ${body.name}`);
    } catch (adminEmailError) {
      console.error("❌ Admin email sending error:", adminEmailError);
    }

    // 📧 2. Lead ko thank you/confirmation email send kro
    try {
      await emailService.sendEmail({
        to: body.email,
        subject: `Thank you for your inquiry, ${body.name}! 🙏`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You - Business Inquiry</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; color: #333333; line-height: 1.6;">
            <div style="max-width: 650px; margin: 40px auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); overflow: hidden;">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: #ffffff; font-size: 28px; font-weight: 600; margin: 0 0 10px 0;">🚀 Thank You for Your Inquiry!</h1>
                <p style="color: #bfdbfe; font-size: 16px; margin: 0;">We're excited to help grow your business</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <div style="font-size: 18px; margin-bottom: 20px; color: #374151;">
                  Dear ${body.name}, 👋
                </div>
                
                <div style="font-size: 16px; margin-bottom: 30px; color: #6b7280;">
                  Thank you for reaching out to us! We have successfully received your business inquiry and our team is already reviewing your requirements.
                </div>
                
                <!-- Inquiry Summary -->
                <div style="background: #f8fafc; border-radius: 10px; padding: 25px; margin: 25px 0; border-left: 4px solid #3b82f6;">
                  <h3 style="color: #374151; margin: 0 0 20px 0; font-size: 18px;">📋 Your Inquiry Details</h3>
                  
                  <div style="margin-bottom: 15px;">
                    <strong style="color: #1e40af;">Contact Information:</strong>
                    <div style="margin: 5px 0; color: #6b7280;">📧 ${body.email}</div>
                    <div style="margin: 5px 0; color: #6b7280;">📱 ${body.phone}</div>
                    <div style="margin: 5px 0; color: #6b7280;">🌍 ${body.country}</div>
                  </div>
                  
                  <div style="margin-top: 20px;">
                    <strong style="color: #1e40af;">Your Requirements:</strong>
                    <div style="margin: 10px 0; padding: 15px; background: #ffffff; border-radius: 6px; border: 1px solid #e5e7eb; color: #374151; font-style: italic;">
                      "${body.businessRequirement}"
                    </div>
                  </div>
                </div>
                
                <!-- What's Next -->
                <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 20px; margin: 25px 0; border-radius: 6px;">
                  <h4 style="color: #047857; margin: 0 0 15px 0; font-size: 16px;">🔄 What Happens Next?</h4>
                  <ul style="color: #047857; margin: 0; padding-left: 20px;">
                    <li style="margin-bottom: 8px;">Our business development team will review your requirements</li>
                    <li style="margin-bottom: 8px;">You'll hear from us within <strong>24 hours</strong> (often much sooner!)</li>
                    <li style="margin-bottom: 8px;">We'll schedule a discovery call to understand your needs better</li>
                    <li style="margin-bottom: 8px;">Receive a customized proposal tailored to your business</li>
                  </ul>
                </div>
                
                <!-- Contact Info -->
                <div style="background: #fef7ff; border-left: 4px solid #a855f7; padding: 20px; margin: 25px 0; border-radius: 6px;">
                  <h4 style="color: #7c2d12; margin: 0 0 10px 0; font-size: 16px;">📞 Need Immediate Assistance?</h4>
                  <p style="color: #7c2d12; margin: 0;">
                    Feel free to reach out directly:<br>
                    <strong>Email:</strong> <a href="mailto:sales@yourcompany.com" style="color: #a855f7; text-decoration: none;">sales@yourcompany.com</a><br>
                    <strong>Phone:</strong> <a href="tel:+1234567890" style="color: #a855f7; text-decoration: none;">+1 (234) 567-890</a>
                  </p>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="font-size: 14px; color: #64748b; margin: 0 0 15px 0;">
                  We appreciate your interest in our services and look forward to partnering with you!
                </p>
                <p style="font-size: 13px; color: #64748b; margin: 0 0 10px 0;">
                  This is an automated confirmation email, but our responses are always personal.
                </p>
                
                <div style="font-size: 12px; color: #94a3b8; margin-top: 20px;">
                  Questions? Contact us at <a href="mailto:support@yourcompany.com" style="color: #3b82f6; text-decoration: none;">support@yourcompany.com</a>
                </div>
              </div>
            </div>
          </body>
          </html>
        `
      });

      console.log(`✅ Thank you email sent successfully to ${body.email}`);
    } catch (leadEmailError) {
      console.error("❌ Lead email sending error:", leadEmailError);
    }

    return NextResponse.json(
      {
        success: true,
        data: newLead,
        message: "Business inquiry submitted successfully! Our team will contact you soon."
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("❌ Lead creation error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const leads = await Lead.find<ILead>({});

    return NextResponse.json(
      { success: true, data: leads },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
