import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import DpdpLead, { IDpdpLead } from "@/models/dpdp-lead.model";
import EmailService from "@/lib/email.service";
import Admin from "@/models/admin.model";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body: IDpdpLead = await request.json();

    const newLead = await DpdpLead.create(body);
    const emailService = new EmailService();

    // 📧 1. Notify admin about the new DPDP assessment request
    const admin = await Admin.findOne();

    try {
      await emailService.sendEmail({
        to: admin?.email || "varun.satija@progneur.com",
        subject: `🔐 New DPDP Readiness Assessment Request: ${body.name} (${body.company})`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New DPDP Assessment Request</title>
          </head>
          <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; margin: 0; padding: 20px;">
            <div style="max-width: 700px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); overflow: hidden;">

              <!-- Header -->
              <div style="background: linear-gradient(135deg, #218ec3 0%, #14547a 100%); padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0;">🔐 New DPDP Readiness Assessment Request</h1>
                <p style="color: #cfeaf9; font-size: 14px; margin: 5px 0 0 0;">Immediate Follow-up Required</p>
              </div>

              <!-- Details -->
              <div style="padding: 30px;">
                <h2 style="color: #374151; margin: 0 0 20px 0; font-size: 20px;">💼 Requestor Information</h2>

                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #218ec3;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500; width: 170px;">👤 Name:</td>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600;">${body.name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">🏢 Company:</td>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600;">${body.company}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">🧑‍💼 Designation:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.designation}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">📧 Email:</td>
                      <td style="padding: 8px 0; color: #374151;"><a href="mailto:${body.email}" style="color: #218ec3; text-decoration: none;">${body.email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">📱 Mobile:</td>
                      <td style="padding: 8px 0; color: #374151;"><a href="tel:${body.mobile}" style="color: #218ec3; text-decoration: none;">${body.mobile}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">👥 Company Size:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.companySize}</td>
                    </tr>
                    ${body.erpHrms ? `
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">🖥️ ERP/HRMS:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.erpHrms}</td>
                    </tr>` : ""}
                  </table>
                </div>

                ${body.message ? `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                  <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 16px;">📋 Message:</h3>
                  <p style="color: #92400e; margin: 0; line-height: 1.6; font-size: 15px; background: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #fde68a;">"${body.message}"</p>
                </div>` : ""}

                <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
                  <h3 style="color: #166534; margin: 0 0 10px 0; font-size: 16px;">⚡ Next Actions:</h3>
                  <ul style="color: #166534; margin: 0; padding-left: 20px;">
                    <li>Contact within 24 hours to schedule the readiness assessment</li>
                    <li>Share the DPDP Readiness Assessment scoping questionnaire</li>
                    <li>Add to CRM and follow-up sequence</li>
                  </ul>
                </div>
              </div>

              <!-- Footer -->
              <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="font-size: 12px; color: #64748b; margin: 0;">
                  Request received at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
                </p>
                <p style="font-size: 11px; color: #94a3b8; margin: 5px 0 0 0;">
                  Lead ID: ${newLead._id}
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      });

      console.log(`✅ Admin DPDP notification sent successfully for ${body.name}`);
    } catch (adminEmailError) {
      console.error("❌ Admin email sending error:", adminEmailError);
    }

    // 📧 2. Confirmation email to the requester
    try {
      await emailService.sendEmail({
        to: body.email,
        subject: `Thank you for your DPDP Readiness Assessment request, ${body.name}! 🔐`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You - DPDP Readiness Assessment</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; color: #333333; line-height: 1.6;">
            <div style="max-width: 650px; margin: 40px auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); overflow: hidden;">

              <!-- Header -->
              <div style="background: linear-gradient(135deg, #218ec3 0%, #14547a 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: #ffffff; font-size: 26px; font-weight: 600; margin: 0 0 10px 0;">🔐 Thank You for Your Request!</h1>
                <p style="color: #cfeaf9; font-size: 16px; margin: 0;">We're here to help you become DPDP-ready</p>
              </div>

              <!-- Content -->
              <div style="padding: 40px 30px;">
                <div style="font-size: 18px; margin-bottom: 20px; color: #374151;">
                  Dear ${body.name}, 👋
                </div>

                <div style="font-size: 16px; margin-bottom: 30px; color: #6b7280;">
                  Thank you for requesting a DPDP Readiness Assessment for ${body.company}. Our privacy and security team has received your request and will reach out shortly to schedule your assessment.
                </div>

                <!-- Summary -->
                <div style="background: #f8fafc; border-radius: 10px; padding: 25px; margin: 25px 0; border-left: 4px solid #218ec3;">
                  <h3 style="color: #374151; margin: 0 0 20px 0; font-size: 18px;">📋 Your Request Details</h3>

                  <div style="margin-bottom: 15px;">
                    <strong style="color: #14547a;">Contact Information:</strong>
                    <div style="margin: 5px 0; color: #6b7280;">🏢 ${body.company}</div>
                    <div style="margin: 5px 0; color: #6b7280;">📧 ${body.email}</div>
                    <div style="margin: 5px 0; color: #6b7280;">📱 ${body.mobile}</div>
                    <div style="margin: 5px 0; color: #6b7280;">👥 Company Size: ${body.companySize}</div>
                  </div>
                </div>

                <!-- What's Next -->
                <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 20px; margin: 25px 0; border-radius: 6px;">
                  <h4 style="color: #047857; margin: 0 0 15px 0; font-size: 16px;">🔄 What Happens Next?</h4>
                  <ul style="color: #047857; margin: 0; padding-left: 20px;">
                    <li style="margin-bottom: 8px;">Our privacy & security team will review your request</li>
                    <li style="margin-bottom: 8px;">You'll hear from us within <strong>24 hours</strong></li>
                    <li style="margin-bottom: 8px;">We'll schedule your DPDP Readiness Assessment call</li>
                    <li style="margin-bottom: 8px;">Receive a practical roadmap towards DPDP compliance</li>
                  </ul>
                </div>

                <!-- Contact Info -->
                <div style="background: #fef7ff; border-left: 4px solid #a855f7; padding: 20px; margin: 25px 0; border-radius: 6px;">
                  <h4 style="color: #7c2d12; margin: 0 0 10px 0; font-size: 16px;">📞 Need Immediate Assistance?</h4>
                  <p style="color: #7c2d12; margin: 0;">
                    Feel free to reach out directly:<br>
                    <strong>Email:</strong> <a href="mailto:support@ridipt.com" style="color: #a855f7; text-decoration: none;">support@ridipt.com</a>
                  </p>
                </div>
              </div>

              <!-- Footer -->
              <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="font-size: 14px; color: #64748b; margin: 0 0 15px 0;">
                  We appreciate your trust in Ridipt Technologies for your data privacy and DPDP compliance needs.
                </p>
                <p style="font-size: 13px; color: #64748b; margin: 0 0 10px 0;">
                  This is an automated confirmation email, but our responses are always personal.
                </p>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 20px;">
                  Questions? Contact us at <a href="mailto:support@ridipt.com" style="color: #218ec3; text-decoration: none;">support@ridipt.com</a>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      });

      console.log(`✅ Thank you email sent successfully to ${body.email}`);
    } catch (leadEmailError) {
      console.error("❌ Confirmation email sending error:", leadEmailError);
    }

    return NextResponse.json(
      {
        success: true,
        data: newLead,
        message: "Your DPDP Readiness Assessment request has been submitted successfully! Our team will contact you soon.",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ DPDP lead creation error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const leads = await DpdpLead.find<IDpdpLead>({}).sort({ createdAt: -1 });

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
