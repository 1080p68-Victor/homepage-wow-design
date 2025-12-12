import * as React from "react";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const hasValue = props.value && String(props.value).length > 0;

    return (
      <div className="relative">
        <input
          ref={ref}
          {...props}
          className={cn(
            "peer w-full px-4 pt-6 pb-2 text-base bg-background border rounded-lg transition-all duration-200",
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
        {error && (
          <p className="mt-1.5 text-xs text-destructive animate-fade-in">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export { FormInput };
