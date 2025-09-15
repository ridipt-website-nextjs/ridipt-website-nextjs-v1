import { IApplication } from '@/models/applications.model';
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html?: string; // Optional - agar nahi diya toh default template use hoga
  templateType?: 'otp' | 'application' | 'custom';
  templateData?: any; // Dynamic data for templates
}

class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    let htmlContent = options.html;

    // Agar HTML nahi diya toh template generate kro
    if (!htmlContent && options.templateType && options.templateData) {
      htmlContent = this.generateTemplate(options.templateType, options.templateData);
    }

    const mailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: options.to,
      subject: options.subject,
      html: htmlContent || this.getDefaultHTML(), // Fallback to default
    };

    await this.transporter.sendMail(mailOptions);
  }

  private generateTemplate(type: string, data: any): string {
    switch (type) {
      case 'otp':
        return this.generateOTPEmailHTML(data.otp, data.email, data.name);
      case 'application':
        return this.generateApplicationConfirmationHTML(data);
      default:
        return this.getDefaultHTML();
    }
  }

  private getDefaultHTML(): string {
    return `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px;">
          <h2 style="color: #333;">Thank you for contacting us!</h2>
          <p style="color: #666; line-height: 1.6;">We have received your message and will get back to you soon.</p>
        </div>
      </body>
      </html>
    `;
  }

  // Original OTP template (unchanged)
  generateOTPEmailHTML(otp: string, email: string, name: string): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
      </head>
      <body style="margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; color: #333333; line-height: 1.6;">
        <div style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 28px; font-weight: 600; margin: 0 0 10px 0;">🔐 Email Verification</h1>
            <p style="color: #e0e7ff; font-size: 16px; margin: 0;">Secure your account with OTP verification</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <div style="font-size: 18px; margin-bottom: 20px; color: #374151;">
              Hello ${name}! 👋
            </div>
            
            <div style="font-size: 16px; margin-bottom: 30px; color: #6b7280;">
              We received a request to verify your email address <strong style="color: #1f2937;">${email}</strong>. 
              Please use the verification code below to complete the process.
            </div>
            
            <!-- OTP Container -->
            <div style="background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0;">
              <div style="font-size: 14px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">
                Your Verification Code
              </div>
              <div style="font-size: 36px; font-weight: 700; color: #1e293b; letter-spacing: 8px; font-family: 'Courier New', monospace; background: #ffffff; padding: 15px 25px; border-radius: 8px; border: 2px solid #e2e8f0; display: inline-block; margin: 10px 0;">
                ${otp}
              </div>
            </div>
            
            <!-- Validity Warning -->
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px 20px; margin: 25px 0; border-radius: 6px;">
              <div style="font-size: 14px; color: #92400e; font-weight: 500; margin: 0;">
                ⏰ This code is valid for 5 minutes only
              </div>
            </div>
            
            <!-- Security Warning -->
            <div style="background: #fee2e2; border-left: 4px solid #dc2626; padding: 15px 20px; margin: 25px 0; border-radius: 6px;">
              <div style="font-size: 14px; color: #991b1b; font-weight: 500; margin: 0;">
                🛡️ Never share this code with anyone. We will never ask for your OTP.
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="font-size: 13px; color: #64748b; margin: 0 0 10px 0;">
              If you didn't request this verification, please ignore this email.
            </p>
            <p style="font-size: 13px; color: #64748b; margin: 0 0 10px 0;">
              This is an automated message, please do not reply.
            </p>
            
            <div style="font-size: 12px; color: #94a3b8; margin-top: 20px;">
              Need help? Contact us at <a href="mailto:support@yourapp.com" style="color: #3b82f6; text-decoration: none;">support@yourapp.com</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // New job application confirmation template
  generateApplicationConfirmationHTML(data: IApplication): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Received</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; color: #333333; line-height: 1.6;">
        <div style="max-width: 650px; margin: 40px auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 28px; font-weight: 600; margin: 0 0 10px 0;">✅ Application Received!</h1>
            <p style="color: #d1fae5; font-size: 16px; margin: 0;">Thank you for your interest in joining our team</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <div style="font-size: 18px; margin-bottom: 20px; color: #374151;">
              Dear ${data.name}, 👋
            </div>
            
            <div style="font-size: 16px; margin-bottom: 30px; color: #6b7280;">
              We have successfully received your application for the <strong style="color: #059669;">${data.position}</strong> position. 
              Here are the details we received:
            </div>
            
            <!-- Application Details -->
            <div style="background: #f8fafc; border-radius: 10px; padding: 25px; margin: 25px 0; border-left: 4px solid #10b981;">
              <h3 style="color: #374151; margin: 0 0 20px 0; font-size: 18px;">📋 Application Summary</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 500; width: 150px;">Position:</td>
                  <td style="padding: 8px 0; color: #374151; font-weight: 600;">${data.position}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Experience:</td>
                  <td style="padding: 8px 0; color: #374151;">${data.experience}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Location:</td>
                  <td style="padding: 8px 0; color: #374151;">${data.location}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Source:</td>
                  <td style="padding: 8px 0; color: #374151;">${data.source}</td>
                </tr>
                ${data.noticePeriod ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Notice Period:</td>
                  <td style="padding: 8px 0; color: #374151;">${data.noticePeriod}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <!-- Next Steps -->
            <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0; border-radius: 6px;">
              <h4 style="color: #1e40af; margin: 0 0 15px 0; font-size: 16px;">🔄 What happens next?</h4>
              <ul style="color: #1e40af; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Our HR team will review your application within 2-3 business days</li>
                <li style="margin-bottom: 8px;">If shortlisted, we'll contact you for the next round</li>
                <li style="margin-bottom: 8px;">You can check your application status anytime</li>
              </ul>
            </div>
            
            ${data.message ? `
            <!-- Applicant Message -->
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0; border-radius: 6px;">
              <h4 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">💬 Your Message:</h4>
              <p style="color: #92400e; margin: 0; font-style: italic;">"${data.message}"</p>
            </div>
            ` : ''}
          </div>
          
          <!-- Footer -->
          <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="font-size: 14px; color: #64748b; margin: 0 0 15px 0;">
              We appreciate your interest in our company and look forward to potentially working with you.
            </p>
            <p style="font-size: 13px; color: #64748b; margin: 0 0 10px 0;">
              This is an automated confirmation email, please do not reply.
            </p>
            
            <div style="font-size: 12px; color: #94a3b8; margin-top: 20px;">
              Questions? Contact our HR team at <a href="mailto:hr@yourcompany.com" style="color: #3b82f6; text-decoration: none;">hr@yourcompany.com</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

export default EmailService;
