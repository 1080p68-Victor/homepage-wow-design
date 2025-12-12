import * as React from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  showStrength?: boolean;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, showStrength = false, className, value, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const hasValue = value && String(value).length > 0;
    const password = String(value || "");

    const requirements = [
      { label: "Минимум 8 символов", met: password.length >= 8 },
      { label: "Заглавная буква", met: /[A-Z]/.test(password) },
      { label: "Строчная буква", met: /[a-z]/.test(password) },
      { label: "Цифра", met: /\d/.test(password) },
    ];

    const strength = requirements.filter((r) => r.met).length;
    const strengthPercent = (strength / requirements.length) * 100;

    const getStrengthColor = () => {
      if (strength <= 1) return "bg-destructive";
      if (strength === 2) return "bg-orange-400";
      if (strength === 3) return "bg-yellow-400";
      return "bg-green-500";
    };

    const getStrengthLabel = () => {
      if (strength <= 1) return "Слабый";
      if (strength === 2) return "Средний";
      if (strength === 3) return "Хороший";
      return "Надёжный";
    };

    return (
      <div className="space-y-2">
        <div className="relative">
          <input
            ref={ref}
            type={isVisible ? "text" : "password"}
            value={value}
            {...props}
            className={cn(
              "peer w-full px-4 pt-6 pb-2 pr-12 text-base bg-background border rounded-lg transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
              error ? "border-destructive" : "border-input hover:border-primary/50",
              className
            )}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            placeholder=" "
          />
          <label
            className={cn(
              "absolute left-4 transition-all duration-200 pointer-events-none text-muted-foreground",
              isFocused || hasValue
                ? "top-2 text-xs"
                : "top-1/2 -translate-y-1/2 text-base"
            )}
          >
            {label}
          </label>
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {error && (
          <p className="text-xs text-destructive animate-fade-in">{error}</p>
        )}

        {showStrength && password.length > 0 && (
          <div className="space-y-2 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className={cn("h-full transition-all duration-300", getStrengthColor())}
                  style={{ width: `${strengthPercent}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground min-w-[70px]">
                {getStrengthLabel()}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {requirements.map((req, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex items-center gap-1.5 text-xs transition-colors",
                    req.met ? "text-green-600" : "text-muted-foreground"
                  )}
                >
                  {req.met ? <Check size={12} /> : <X size={12} />}
                  {req.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
