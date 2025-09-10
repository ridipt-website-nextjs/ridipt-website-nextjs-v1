import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

class EmailService {
  private transporter;

  constructor() {
    // ✅ createTransport (not createTransporter)
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    const mailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    };

    await this.transporter.sendMail(mailOptions);
  }

  generateOTPEmailHTML(otp: string, email: string,name:string): string {
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
}

export default EmailService;
