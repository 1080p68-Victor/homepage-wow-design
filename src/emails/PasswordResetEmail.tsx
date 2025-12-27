import React from 'react';

interface PasswordResetEmailProps {
  customerName?: string;
  resetLink?: string;
  expirationTime?: string;
}

export const PasswordResetEmail: React.FC<PasswordResetEmailProps> = ({
  customerName = 'Valued Customer',
  resetLink = 'https://vvlen.com/reset-password?token=xxx',
  expirationTime = '24 hours'
}) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.logo}>VVLEN</h1>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          {/* Lock Icon */}
          <div style={styles.iconContainer}>
            <div style={styles.iconCircle}>
              <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
          </div>

          <h2 style={styles.headline}>Password Reset Request</h2>
          
          <p style={styles.greeting}>Hello, {customerName}!</p>
          
          <p style={styles.text}>
            We received a request to reset your password for your VVLEN account. 
            Click the button below to create a new password.
          </p>

          {/* CTA Button */}
          <a href={resetLink} style={styles.button}>
            Reset Password
          </a>

          {/* Expiration Notice */}
          <div style={styles.noticeBox}>
            <p style={styles.noticeText}>
              ⏰ This link will expire in <strong>{expirationTime}</strong>
            </p>
          </div>

          <p style={styles.textSmall}>
            If you didn't request a password reset, please ignore this email 
            or contact our support team if you have concerns about your account security.
          </p>

          {/* Security Tips */}
          <div style={styles.tipsContainer}>
            <p style={styles.tipsTitle}>Security Tips:</p>
            <ul style={styles.tipsList}>
              <li style={styles.tipsItem}>Use a unique password you haven't used before</li>
              <li style={styles.tipsItem}>Include letters, numbers, and special characters</li>
              <li style={styles.tipsItem}>Avoid using personal information</li>
            </ul>
          </div>

          {/* Alternative Link */}
          <p style={styles.textSmall}>
            If the button doesn't work, copy and paste this link into your browser:
          </p>
          <p style={styles.linkText}>{resetLink}</p>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerBrand}>VVLEN</p>
          <p style={styles.footerTagline}>Elegance in Every Detail</p>
          
          <div style={styles.footerLinks}>
            <a href="https://vvlen.com" style={styles.footerLink}>Shop</a>
            <span style={styles.footerDivider}>•</span>
            <a href="https://vvlen.com/support" style={styles.footerLink}>Support</a>
            <span style={styles.footerDivider}>•</span>
            <a href="https://instagram.com/vvlen" style={styles.footerLink}>Instagram</a>
          </div>
          
          <p style={styles.footerNote}>
            This is an automated message. Please do not reply to this email.
          </p>
          
          <p style={styles.copyright}>
            © 2024 VVLEN. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    backgroundColor: '#f8f7f5',
    padding: '40px 20px',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
  },
  header: {
    backgroundColor: '#1a1a1a',
    padding: '32px 40px',
    textAlign: 'center' as const,
  },
  logo: {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: '300',
    letterSpacing: '8px',
    margin: '0',
  },
  content: {
    padding: '48px 40px',
    textAlign: 'center' as const,
  },
  iconContainer: {
    marginBottom: '24px',
  },
  iconCircle: {
    width: '80px',
    height: '80px',
    backgroundColor: '#f8f7f5',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #e8e6e3',
  },
  icon: {
    width: '36px',
    height: '36px',
    color: '#1a1a1a',
  },
  headline: {
    fontSize: '28px',
    fontWeight: '300',
    color: '#1a1a1a',
    margin: '0 0 24px 0',
    letterSpacing: '1px',
  },
  greeting: {
    fontSize: '16px',
    color: '#4a4a4a',
    margin: '0 0 16px 0',
    fontWeight: '500',
  },
  text: {
    fontSize: '15px',
    color: '#6b6b6b',
    lineHeight: '1.7',
    margin: '0 0 32px 0',
  },
  textSmall: {
    fontSize: '13px',
    color: '#8a8a8a',
    lineHeight: '1.6',
    margin: '24px 0 8px 0',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '16px 48px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '2px',
    textTransform: 'uppercase' as const,
    transition: 'all 0.3s ease',
  },
  noticeBox: {
    backgroundColor: '#fff9e6',
    border: '1px solid #ffe4a0',
    borderRadius: '12px',
    padding: '16px 24px',
    margin: '32px 0',
  },
  noticeText: {
    fontSize: '14px',
    color: '#8b7355',
    margin: '0',
  },
  tipsContainer: {
    backgroundColor: '#f8f7f5',
    borderRadius: '12px',
    padding: '20px 24px',
    margin: '24px 0',
    textAlign: 'left' as const,
  },
  tipsTitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#4a4a4a',
    margin: '0 0 12px 0',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
  },
  tipsList: {
    margin: '0',
    paddingLeft: '20px',
  },
  tipsItem: {
    fontSize: '13px',
    color: '#6b6b6b',
    lineHeight: '1.8',
  },
  linkText: {
    fontSize: '12px',
    color: '#1a1a1a',
    wordBreak: 'break-all' as const,
    backgroundColor: '#f8f7f5',
    padding: '12px 16px',
    borderRadius: '8px',
    margin: '0',
  },
  footer: {
    backgroundColor: '#fafafa',
    padding: '32px 40px',
    textAlign: 'center' as const,
    borderTop: '1px solid #f0efed',
  },
  footerBrand: {
    fontSize: '18px',
    fontWeight: '300',
    letterSpacing: '4px',
    color: '#1a1a1a',
    margin: '0 0 4px 0',
  },
  footerTagline: {
    fontSize: '12px',
    color: '#8a8a8a',
    margin: '0 0 20px 0',
    fontStyle: 'italic',
  },
  footerLinks: {
    margin: '0 0 20px 0',
  },
  footerLink: {
    color: '#6b6b6b',
    textDecoration: 'none',
    fontSize: '13px',
    margin: '0 8px',
  },
  footerDivider: {
    color: '#d0d0d0',
    fontSize: '10px',
  },
  footerNote: {
    fontSize: '11px',
    color: '#a0a0a0',
    margin: '0 0 8px 0',
  },
  copyright: {
    fontSize: '11px',
    color: '#b0b0b0',
    margin: '0',
  },
};

// Export HTML string for email sending
export const getPasswordResetEmailHTML = (props?: PasswordResetEmailProps): string => {
  const { 
    customerName = 'Valued Customer', 
    resetLink = 'https://vvlen.com/reset-password?token=xxx',
    expirationTime = '24 hours'
  } = props || {};

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Reset Your Password - VVLEN</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    
    .button:hover {
      background-color: #333333 !important;
      transform: translateY(-1px);
    }
    
    .footer-link:hover {
      color: #1a1a1a !important;
    }
    
    @media only screen and (max-width: 600px) {
      .container {
        width: 100% !important;
        border-radius: 0 !important;
      }
      .content {
        padding: 32px 24px !important;
      }
      .header {
        padding: 24px !important;
      }
      .footer {
        padding: 24px !important;
      }
      .headline {
        font-size: 24px !important;
      }
      .button {
        padding: 14px 32px !important;
      }
    }
  </style>
</head>
<body style="background-color: #f8f7f5; margin: 0; padding: 40px 20px;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
      <td align="center">
        <table role="presentation" class="container" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);">
          
          <!-- Header -->
          <tr>
            <td class="header" style="background-color: #1a1a1a; padding: 32px 40px; text-align: center;">
              <h1 style="color: #ffffff; font-size: 28px; font-weight: 300; letter-spacing: 8px; margin: 0;">VVLEN</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td class="content" style="padding: 48px 40px; text-align: center;">
              
              <!-- Lock Icon -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 24px;">
                    <div style="width: 80px; height: 80px; background-color: #f8f7f5; border-radius: 50%; border: 2px solid #e8e6e3; display: inline-block; line-height: 80px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Lock" width="36" height="36" style="vertical-align: middle; opacity: 0.8;">
                    </div>
                  </td>
                </tr>
              </table>
              
              <h2 class="headline" style="font-size: 28px; font-weight: 300; color: #1a1a1a; margin: 0 0 24px 0; letter-spacing: 1px;">Password Reset Request</h2>
              
              <p style="font-size: 16px; color: #4a4a4a; margin: 0 0 16px 0; font-weight: 500;">Hello, ${customerName}!</p>
              
              <p style="font-size: 15px; color: #6b6b6b; line-height: 1.7; margin: 0 0 32px 0;">
                We received a request to reset your password for your VVLEN account. Click the button below to create a new password.
              </p>
              
              <!-- CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="${resetLink}" class="button" style="display: inline-block; background-color: #1a1a1a; color: #ffffff; padding: 16px 48px; border-radius: 30px; text-decoration: none; font-size: 14px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">Reset Password</a>
                  </td>
                </tr>
              </table>
              
              <!-- Expiration Notice -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0;">
                <tr>
                  <td style="background-color: #fff9e6; border: 1px solid #ffe4a0; border-radius: 12px; padding: 16px 24px; text-align: center;">
                    <p style="font-size: 14px; color: #8b7355; margin: 0;">⏰ This link will expire in <strong>${expirationTime}</strong></p>
                  </td>
                </tr>
              </table>
              
              <p style="font-size: 13px; color: #8a8a8a; line-height: 1.6; margin: 0 0 24px 0;">
                If you didn't request a password reset, please ignore this email or contact our support team if you have concerns about your account security.
              </p>
              
              <!-- Security Tips -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 24px 0;">
                <tr>
                  <td style="background-color: #f8f7f5; border-radius: 12px; padding: 20px 24px; text-align: left;">
                    <p style="font-size: 13px; font-weight: 600; color: #4a4a4a; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1px;">Security Tips:</p>
                    <ul style="margin: 0; padding-left: 20px;">
                      <li style="font-size: 13px; color: #6b6b6b; line-height: 1.8;">Use a unique password you haven't used before</li>
                      <li style="font-size: 13px; color: #6b6b6b; line-height: 1.8;">Include letters, numbers, and special characters</li>
                      <li style="font-size: 13px; color: #6b6b6b; line-height: 1.8;">Avoid using personal information</li>
                    </ul>
                  </td>
                </tr>
              </table>
              
              <p style="font-size: 13px; color: #8a8a8a; line-height: 1.6; margin: 24px 0 8px 0;">
                If the button doesn't work, copy and paste this link into your browser:
              </p>
              <p style="font-size: 12px; color: #1a1a1a; word-break: break-all; background-color: #f8f7f5; padding: 12px 16px; border-radius: 8px; margin: 0;">${resetLink}</p>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td class="footer" style="background-color: #fafafa; padding: 32px 40px; text-align: center; border-top: 1px solid #f0efed;">
              <p style="font-size: 18px; font-weight: 300; letter-spacing: 4px; color: #1a1a1a; margin: 0 0 4px 0;">VVLEN</p>
              <p style="font-size: 12px; color: #8a8a8a; margin: 0 0 20px 0; font-style: italic;">Elegance in Every Detail</p>
              
              <p style="margin: 0 0 20px 0;">
                <a href="https://vvlen.com" class="footer-link" style="color: #6b6b6b; text-decoration: none; font-size: 13px; margin: 0 8px;">Shop</a>
                <span style="color: #d0d0d0; font-size: 10px;">•</span>
                <a href="https://vvlen.com/support" class="footer-link" style="color: #6b6b6b; text-decoration: none; font-size: 13px; margin: 0 8px;">Support</a>
                <span style="color: #d0d0d0; font-size: 10px;">•</span>
                <a href="https://instagram.com/vvlen" class="footer-link" style="color: #6b6b6b; text-decoration: none; font-size: 13px; margin: 0 8px;">Instagram</a>
              </p>
              
              <p style="font-size: 11px; color: #a0a0a0; margin: 0 0 8px 0;">This is an automated message. Please do not reply to this email.</p>
              <p style="font-size: 11px; color: #b0b0b0; margin: 0;">© 2024 VVLEN. All rights reserved.</p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
};

export default PasswordResetEmail;
