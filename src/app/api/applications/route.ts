import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Application, { IApplication } from "@/models/applications.model";
import EmailService from "@/lib/email.service";
import Admin from "@/models/admin.model";

// Create Application
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body: IApplication = await request.json();

    const newApplication = await Application.create(body);
    const emailService = new EmailService();

    // 📧 1. Admin ko notification email send kro
    const admin = await Admin.findOne()

    try {
      await emailService.sendEmail({
        to: admin?.email || 'admin@yourcompany.com', // Admin email from env
        subject: `🔥 New Job Application: ${body.position} - ${body.name}`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Application Alert</title>
          </head>
          <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; margin: 0; padding: 20px;">
            <div style="max-width: 700px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); overflow: hidden;">
              
              <!-- Admin Header -->
              <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0;">🚨 New Job Application Alert</h1>
                <p style="color: #fecaca; font-size: 14px; margin: 5px 0 0 0;">Immediate Review Required</p>
              </div>
              
              <!-- Application Details -->
              <div style="padding: 30px;">
                <h2 style="color: #374151; margin: 0 0 20px 0; font-size: 20px;">📝 Application Details</h2>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500; width: 150px;">👤 Name:</td>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600;">${body.name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">📧 Email:</td>
                      <td style="padding: 8px 0; color: #374151;"><a href="mailto:${body.email}" style="color: #dc2626; text-decoration: none;">${body.email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">📱 Phone:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.phone || 'Not provided'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">💼 Position:</td>
                      <td style="padding: 8px 0; color: #374151; font-weight: 600;">${body.position}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">⭐ Experience:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.experience}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">📍 Location:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.location}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">🔍 Source:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.source}</td>
                    </tr>
                    ${body.currentCTC ? `
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">💰 Current CTC:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.currentCTC}</td>
                    </tr>
                    ` : ''}
                    ${body.expectedCTC ? `
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">💸 Expected CTC:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.expectedCTC}</td>
                    </tr>
                    ` : ''}
                    ${body.noticePeriod ? `
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">⏰ Notice Period:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.noticePeriod}</td>
                    </tr>
                    ` : ''}
                    ${body.companyName ? `
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">🏢 Company:</td>
                      <td style="padding: 8px 0; color: #374151;">${body.companyName}</td>
                    </tr>
                    ` : ''}
                  </table>
                </div>
                
                ${body.message ? `
                <!-- Message Section -->
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                  <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">💬 Candidate's Message:</h3>
                  <p style="color: #92400e; margin: 0; font-style: italic; line-height: 1.5;">"${body.message}"</p>
                </div>
                ` : ''}
                
                <!-- Action Required -->
                <div style="background: #ddd6fe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8b5cf6;">
                  <h3 style="color: #5b21b6; margin: 0 0 10px 0; font-size: 16px;">⚡ Action Required:</h3>
                  <ul style="color: #5b21b6; margin: 0; padding-left: 20px;">
                    <li>Review the application immediately</li>
                    <li>Check candidate's CV/Resume ${body.cv ? '(CV uploaded)' : '(No CV uploaded)'}</li>
                    <li>Schedule interview if suitable</li>
                    <li>Update application status in system</li>
                  </ul>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="font-size: 12px; color: #64748b; margin: 0;">
                  Application received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                </p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      console.log(`✅ Admin notification sent successfully for ${body.name}'s application`);
    } catch (adminEmailError) {
      console.error("❌ Admin email sending error:", adminEmailError);
      // Admin email fail hone se main application fail nahi karna
    }

    // 📧 2. Applicant ko confirmation email send kro
    try {
      await emailService.sendEmail({
        to: body.email, // Applicant's email
        subject: `Application Received - ${body.position} Position 🎉`,
        templateType: 'application',
        templateData: newApplication
      });

      console.log(`✅ Confirmation email sent successfully to ${body.email}`);
    } catch (applicantEmailError) {
      console.error("❌ Applicant email sending error:", applicantEmailError);
      // Applicant email fail hone se bhi main application fail nahi karna
    }

    return NextResponse.json(
      {
        success: true,
        data: newApplication,
        message: "Application submitted successfully! Confirmation email sent."
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("❌ Application creation error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to create application" },
      { status: 500 }
    );
  }
}


// Get All Applications
export async function GET() {
  try {
    await dbConnect();
    const applications = await Application.find<IApplication>({});

    return NextResponse.json(
      { success: true, data: applications },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
