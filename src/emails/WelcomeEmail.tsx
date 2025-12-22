import * as React from 'react';

interface WelcomeEmailProps {
  customerName?: string;
  shopUrl?: string;
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({
  customerName = 'there',
  shopUrl = 'https://vvlen.com',
}) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to VVLEN</title>
      </head>
      <body style={styles.body}>
        <table style={styles.wrapper} role="presentation" cellPadding="0" cellSpacing="0">
          <tr>
            <td align="center" style={styles.container}>
              {/* Header */}
              <table style={styles.header} role="presentation" cellPadding="0" cellSpacing="0">
                <tr>
                  <td align="center" style={styles.logoCell}>
                    <h1 style={styles.logo}>VVLEN</h1>
                  </td>
                </tr>
              </table>

              {/* Main Content */}
              <table style={styles.content} role="presentation" cellPadding="0" cellSpacing="0">
                <tr>
                  <td style={styles.contentCell}>
                    {/* Decorative Line */}
                    <div style={styles.decorLine}></div>

                    {/* Main Headline */}
                    <h2 style={styles.headline}>Thank you for registering!</h2>

                    {/* Welcome Text */}
                    <p style={styles.greeting}>Dear {customerName},</p>
                    
                    <p style={styles.text}>
                      Welcome to the VVLEN family! We're thrilled to have you with us. 
                      Your journey into the world of elegant, contemporary fashion begins now.
                    </p>

                    {/* Benefits Section */}
                    <table style={styles.benefitsTable} role="presentation" cellPadding="0" cellSpacing="0">
                      <tr>
                        <td style={styles.benefitItem}>
                          <div style={styles.benefitIcon}>✨</div>
                          <p style={styles.benefitText}>
                            <strong>Exclusive Access</strong><br />
                            Be the first to discover new collections
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.benefitItem}>
                          <div style={styles.benefitIcon}>🎁</div>
                          <p style={styles.benefitText}>
                            <strong>Special Offers</strong><br />
                            Members-only discounts and promotions
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.benefitItem}>
                          <div style={styles.benefitIcon}>📦</div>
                          <p style={styles.benefitText}>
                            <strong>Easy Order Tracking</strong><br />
                            Monitor your orders anytime, anywhere
                          </p>
                        </td>
                      </tr>
                    </table>

                    {/* CTA Button */}
                    <table style={styles.ctaTable} role="presentation" cellPadding="0" cellSpacing="0">
                      <tr>
                        <td align="center">
                          <a href={shopUrl} style={styles.ctaButton}>
                            Start Shopping
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style={styles.signoff}>
                      With love,<br />
                      <strong>The VVLEN Team</strong>
                    </p>
                  </td>
                </tr>
              </table>

              {/* Footer */}
              <table style={styles.footer} role="presentation" cellPadding="0" cellSpacing="0">
                <tr>
                  <td align="center" style={styles.footerCell}>
                    <p style={styles.footerLogo}>VVLEN</p>
                    <p style={styles.tagline}>Elegance for the Modern Woman</p>
                    
                    <table style={styles.socialLinks} role="presentation" cellPadding="0" cellSpacing="0">
                      <tr>
                        <td style={styles.socialLink}>
                          <a href={shopUrl} style={styles.footerLink}>Shop</a>
                        </td>
                        <td style={styles.socialDivider}>•</td>
                        <td style={styles.socialLink}>
                          <a href={`${shopUrl}/info/contacts`} style={styles.footerLink}>Support</a>
                        </td>
                        <td style={styles.socialDivider}>•</td>
                        <td style={styles.socialLink}>
                          <a href="https://instagram.com/vvlen" style={styles.footerLink}>Instagram</a>
                        </td>
                      </tr>
                    </table>

                    <p style={styles.copyright}>
                      © 2024 VVLEN. All rights reserved.<br />
                      Made with love in Ukraine 🇺🇦
                    </p>

                    <p style={styles.unsubscribe}>
                      <a href={`${shopUrl}/unsubscribe`} style={styles.unsubscribeLink}>
                        Unsubscribe from emails
                      </a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '#FAF9F7',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    WebkitFontSmoothing: 'antialiased',
  },
  wrapper: {
    width: '100%',
    backgroundColor: '#FAF9F7',
    padding: '40px 20px',
  },
  container: {
    maxWidth: '560px',
    width: '100%',
  },
  header: {
    width: '100%',
    marginBottom: '32px',
  },
  logoCell: {
    padding: '20px 0',
  },
  logo: {
    margin: 0,
    fontSize: '32px',
    fontWeight: 300,
    letterSpacing: '8px',
    color: '#1A1A1A',
    textTransform: 'uppercase' as const,
  },
  content: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
  },
  contentCell: {
    padding: '48px 40px',
  },
  decorLine: {
    width: '48px',
    height: '2px',
    backgroundColor: '#D4B896',
    margin: '0 auto 32px',
  },
  headline: {
    margin: '0 0 24px',
    fontSize: '28px',
    fontWeight: 300,
    letterSpacing: '1px',
    color: '#1A1A1A',
    textAlign: 'center' as const,
  },
  greeting: {
    margin: '0 0 16px',
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#4A4A4A',
  },
  text: {
    margin: '0 0 32px',
    fontSize: '15px',
    lineHeight: 1.7,
    color: '#6B6B6B',
  },
  benefitsTable: {
    width: '100%',
    marginBottom: '32px',
    backgroundColor: '#FAFAF8',
    borderRadius: '12px',
  },
  benefitItem: {
    padding: '16px 20px',
    borderBottom: '1px solid #F0EDE8',
  },
  benefitIcon: {
    display: 'inline-block',
    width: '32px',
    fontSize: '18px',
    verticalAlign: 'top',
  },
  benefitText: {
    display: 'inline-block',
    width: 'calc(100% - 40px)',
    margin: 0,
    fontSize: '14px',
    lineHeight: 1.5,
    color: '#4A4A4A',
    verticalAlign: 'top',
  },
  ctaTable: {
    width: '100%',
    marginBottom: '32px',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '16px 48px',
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '2px',
    textTransform: 'uppercase' as const,
    textDecoration: 'none',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
  },
  signoff: {
    margin: 0,
    fontSize: '15px',
    lineHeight: 1.7,
    color: '#6B6B6B',
    textAlign: 'center' as const,
  },
  footer: {
    width: '100%',
    marginTop: '32px',
  },
  footerCell: {
    padding: '24px 0',
  },
  footerLogo: {
    margin: '0 0 8px',
    fontSize: '18px',
    fontWeight: 300,
    letterSpacing: '4px',
    color: '#8B8B8B',
    textTransform: 'uppercase' as const,
  },
  tagline: {
    margin: '0 0 20px',
    fontSize: '13px',
    fontStyle: 'italic',
    color: '#A0A0A0',
  },
  socialLinks: {
    margin: '0 auto 20px',
  },
  socialLink: {
    padding: '0 12px',
  },
  socialDivider: {
    color: '#D0D0D0',
    fontSize: '12px',
  },
  footerLink: {
    fontSize: '13px',
    color: '#6B6B6B',
    textDecoration: 'none',
  },
  copyright: {
    margin: '0 0 16px',
    fontSize: '12px',
    lineHeight: 1.6,
    color: '#A0A0A0',
  },
  unsubscribe: {
    margin: 0,
  },
  unsubscribeLink: {
    fontSize: '11px',
    color: '#B0B0B0',
    textDecoration: 'underline',
  },
};

export default WelcomeEmail;

// HTML string export for direct use
export const getWelcomeEmailHTML = (props?: WelcomeEmailProps): string => {
  const { customerName = 'there', shopUrl = 'https://vvlen.com' } = props || {};
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to VVLEN</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    .fallback-font {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #FAF9F7; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #FAF9F7; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 560px; width: 100%;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 20px 0 32px;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 300; letter-spacing: 8px; color: #1A1A1A; text-transform: uppercase;">VVLEN</h1>
            </td>
          </tr>
          
          <!-- Main Content Card -->
          <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);">
                <tr>
                  <td style="padding: 48px 40px;">
                    
                    <!-- Decorative Line -->
                    <div style="width: 48px; height: 2px; background-color: #D4B896; margin: 0 auto 32px;"></div>
                    
                    <!-- Headline -->
                    <h2 style="margin: 0 0 24px; font-size: 28px; font-weight: 300; letter-spacing: 1px; color: #1A1A1A; text-align: center;">Thank you for registering!</h2>
                    
                    <!-- Greeting -->
                    <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #4A4A4A;">Dear ${customerName},</p>
                    
                    <!-- Welcome Text -->
                    <p style="margin: 0 0 32px; font-size: 15px; line-height: 1.7; color: #6B6B6B;">
                      Welcome to the VVLEN family! We're thrilled to have you with us. Your journey into the world of elegant, contemporary fashion begins now.
                    </p>
                    
                    <!-- Benefits Section -->
                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin-bottom: 32px; background-color: #FAFAF8; border-radius: 12px;">
                      <tr>
                        <td style="padding: 16px 20px; border-bottom: 1px solid #F0EDE8;">
                          <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                            <tr>
                              <td style="width: 32px; vertical-align: top; font-size: 18px;">✨</td>
                              <td style="font-size: 14px; line-height: 1.5; color: #4A4A4A;">
                                <strong>Exclusive Access</strong><br>
                                Be the first to discover new collections
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 20px; border-bottom: 1px solid #F0EDE8;">
                          <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                            <tr>
                              <td style="width: 32px; vertical-align: top; font-size: 18px;">🎁</td>
                              <td style="font-size: 14px; line-height: 1.5; color: #4A4A4A;">
                                <strong>Special Offers</strong><br>
                                Members-only discounts and promotions
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 20px;">
                          <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                            <tr>
                              <td style="width: 32px; vertical-align: top; font-size: 18px;">📦</td>
                              <td style="font-size: 14px; line-height: 1.5; color: #4A4A4A;">
                                <strong>Easy Order Tracking</strong><br>
                                Monitor your orders anytime, anywhere
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- CTA Button -->
                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin-bottom: 32px;">
                      <tr>
                        <td align="center">
                          <a href="${shopUrl}" style="display: inline-block; padding: 16px 48px; background-color: #1A1A1A; color: #FFFFFF; font-size: 14px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 30px;">
                            Start Shopping
                          </a>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Sign-off -->
                    <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #6B6B6B; text-align: center;">
                      With love,<br>
                      <strong>The VVLEN Team</strong>
                    </p>
                    
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 32px 0 24px;">
              <p style="margin: 0 0 8px; font-size: 18px; font-weight: 300; letter-spacing: 4px; color: #8B8B8B; text-transform: uppercase;">VVLEN</p>
              <p style="margin: 0 0 20px; font-size: 13px; font-style: italic; color: #A0A0A0;">Elegance for the Modern Woman</p>
              
              <!-- Social Links -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto 20px;">
                <tr>
                  <td style="padding: 0 12px;">
                    <a href="${shopUrl}" style="font-size: 13px; color: #6B6B6B; text-decoration: none;">Shop</a>
                  </td>
                  <td style="color: #D0D0D0; font-size: 12px;">•</td>
                  <td style="padding: 0 12px;">
                    <a href="${shopUrl}/info/contacts" style="font-size: 13px; color: #6B6B6B; text-decoration: none;">Support</a>
                  </td>
                  <td style="color: #D0D0D0; font-size: 12px;">•</td>
                  <td style="padding: 0 12px;">
                    <a href="https://instagram.com/vvlen" style="font-size: 13px; color: #6B6B6B; text-decoration: none;">Instagram</a>
                  </td>
                </tr>
              </table>
              
              <!-- Copyright -->
              <p style="margin: 0 0 16px; font-size: 12px; line-height: 1.6; color: #A0A0A0;">
                © 2024 VVLEN. All rights reserved.<br>
                Made with love in Ukraine 🇺🇦
              </p>
              
              <!-- Unsubscribe -->
              <p style="margin: 0;">
                <a href="${shopUrl}/unsubscribe" style="font-size: 11px; color: #B0B0B0; text-decoration: underline;">
                  Unsubscribe from emails
                </a>
              </p>
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
