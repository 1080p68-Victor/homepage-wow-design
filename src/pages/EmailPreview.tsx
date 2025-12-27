import { useState } from 'react';
import { getWelcomeEmailHTML } from '@/emails/WelcomeEmail';
import { getPasswordResetEmailHTML } from '@/emails/PasswordResetEmail';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, Check, Mail, Smartphone, Monitor, KeyRound, UserPlus } from 'lucide-react';
import { toast } from 'sonner';

type EmailTemplate = 'welcome' | 'password-reset';

const EmailPreview = () => {
  const [customerName, setCustomerName] = useState('Anna');
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [template, setTemplate] = useState<EmailTemplate>('welcome');

  const emailHTML = template === 'welcome' 
    ? getWelcomeEmailHTML({ customerName, shopUrl: window.location.origin })
    : getPasswordResetEmailHTML({ 
        customerName, 
        resetLink: `${window.location.origin}/reset-password?token=example-token-123`,
        expirationTime: '24 hours'
      });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailHTML);
      setCopied(true);
      toast.success('HTML copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  const templateInfo = {
    welcome: {
      title: 'Welcome Registration Email',
      icon: UserPlus,
    },
    'password-reset': {
      title: 'Password Reset Email',
      icon: KeyRound,
    },
  };

  const CurrentIcon = templateInfo[template].icon;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-medium">Email Template Preview</h1>
                <p className="text-sm text-muted-foreground">{templateInfo[template].title}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Template Selector */}
              <div className="flex items-center border border-border rounded-lg p-1">
                <button
                  onClick={() => setTemplate('welcome')}
                  className={`px-3 py-2 rounded-md transition-colors flex items-center gap-2 text-sm ${
                    template === 'welcome' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <UserPlus className="w-4 h-4" />
                  <span className="hidden sm:inline">Welcome</span>
                </button>
                <button
                  onClick={() => setTemplate('password-reset')}
                  className={`px-3 py-2 rounded-md transition-colors flex items-center gap-2 text-sm ${
                    template === 'password-reset' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <KeyRound className="w-4 h-4" />
                  <span className="hidden sm:inline">Password Reset</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Name:</span>
                <Input
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-32 h-9"
                  placeholder="Customer name"
                />
              </div>

              <div className="flex items-center border border-border rounded-lg p-1">
                <button
                  onClick={() => setViewMode('desktop')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'desktop' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'mobile' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              <Button onClick={copyToClipboard} variant="outline" size="sm">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy HTML
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div 
            className={`mx-auto bg-background rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
              viewMode === 'mobile' ? 'max-w-[375px]' : 'max-w-[700px]'
            }`}
          >
            {/* Browser Chrome */}
            <div className="bg-muted/50 border-b border-border px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground text-center">
                  mail.example.com
                </div>
              </div>
            </div>

            {/* Email Content */}
            <iframe
              srcDoc={emailHTML}
              title="Email Preview"
              className="w-full border-0"
              style={{ height: viewMode === 'mobile' ? '800px' : '1000px' }}
            />
          </div>

          {/* Info */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CurrentIcon className="w-4 h-4" />
                {templateInfo[template].title} - Usage
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Click "Copy HTML" to get the email template code</li>
                <li>• The template is ready for use with email services (Resend, SendGrid, etc.)</li>
                <li>• Replace <code className="bg-muted px-1.5 py-0.5 rounded text-xs">{'${customerName}'}</code> with dynamic customer data</li>
                {template === 'welcome' && (
                  <li>• Replace <code className="bg-muted px-1.5 py-0.5 rounded text-xs">{'${shopUrl}'}</code> with your actual shop URL</li>
                )}
                {template === 'password-reset' && (
                  <>
                    <li>• Replace <code className="bg-muted px-1.5 py-0.5 rounded text-xs">{'${resetLink}'}</code> with the actual password reset URL</li>
                    <li>• Replace <code className="bg-muted px-1.5 py-0.5 rounded text-xs">{'${expirationTime}'}</code> with your token expiration time</li>
                  </>
                )}
                <li>• The template is responsive and works on all email clients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
