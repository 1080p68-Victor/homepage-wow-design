import * as React from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./FormInput";
import { PasswordInput } from "./PasswordInput";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  newsletter: boolean;
  privacyPolicy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  privacyPolicy?: string;
}

export function RegisterForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
    privacyPolicy: false,
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  const validateField = (name: keyof FormData, value: string | boolean): string | undefined => {
    switch (name) {
      case "name":
        if (!value || (typeof value === "string" && value.trim().length < 2)) {
          return "Введите ваше имя (минимум 2 символа)";
        }
        break;
      case "email":
        if (!value || (typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
          return "Введите корректный email";
        }
        break;
      case "password":
        if (!value || (typeof value === "string" && value.length < 8)) {
          return "Пароль должен содержать минимум 8 символов";
        }
        break;
      case "confirmPassword":
        if (value !== formData.password) {
          return "Пароли не совпадают";
        }
        break;
      case "privacyPolicy":
        if (!value) {
          return "Необходимо принять условия";
        }
        break;
    }
    return undefined;
  };

  const handleChange = (name: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    // Re-validate confirmPassword when password changes
    if (name === "password" && touched.confirmPassword) {
      const confirmError = validateField("confirmPassword", formData.confirmPassword);
      setErrors((prev) => ({ ...prev, confirmPassword: confirmError }));
    }
  };

  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
      privacyPolicy: true,
    });

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    toast.success("Регистрация успешна! Добро пожаловать!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FormInput
        label="Имя"
        type="text"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        onBlur={() => handleBlur("name")}
        error={errors.name}
        autoComplete="name"
      />

      <FormInput
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        onBlur={() => handleBlur("email")}
        error={errors.email}
        autoComplete="email"
      />

      <PasswordInput
        label="Пароль"
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
        onBlur={() => handleBlur("password")}
        error={errors.password}
        showStrength
        autoComplete="new-password"
      />

      <PasswordInput
        label="Подтвердите пароль"
        value={formData.confirmPassword}
        onChange={(e) => handleChange("confirmPassword", e.target.value)}
        onBlur={() => handleBlur("confirmPassword")}
        error={errors.confirmPassword}
        autoComplete="new-password"
      />

      <div className="space-y-3 pt-2">
        <div className="flex items-start gap-3">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => handleChange("newsletter", !!checked)}
            className="mt-0.5"
          />
          <label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer leading-tight">
            Подписаться на рассылку новинок и акций
          </label>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="privacyPolicy"
            checked={formData.privacyPolicy}
            onCheckedChange={(checked) => handleChange("privacyPolicy", !!checked)}
            className="mt-0.5"
          />
          <div className="space-y-1">
            <label htmlFor="privacyPolicy" className="text-sm text-muted-foreground cursor-pointer leading-tight">
              Я принимаю{" "}
              <a href="/privacy" className="text-primary hover:underline">
                политику конфиденциальности
              </a>{" "}
              и{" "}
              <a href="/terms" className="text-primary hover:underline">
                условия использования
              </a>
            </label>
            {errors.privacyPolicy && (
              <p className="text-xs text-destructive animate-fade-in">
                {errors.privacyPolicy}
              </p>
            )}
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-base font-medium mt-6"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Создание аккаунта...
          </>
        ) : (
          "Создать аккаунт"
        )}
      </Button>

      <SocialLoginButtons />
    </form>
  );
}
