import { Link } from "react-router-dom";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function Register() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with logo */}
      <header className="py-6 px-4 flex justify-center">
        <Link to="/" className="text-2xl font-light tracking-[0.3em] text-foreground">
          VVLEN
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[420px] animate-scale-in">
          {/* Form card */}
          <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-8 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold text-foreground">
                Создать аккаунт
              </h1>
              <p className="text-sm text-muted-foreground">
                Станьте частью нашего fashion-сообщества
              </p>
            </div>

            <RegisterForm />

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                Уже есть аккаунт?{" "}
                <Link
                  to="/login"
                  className="text-primary font-medium hover:underline"
                >
                  Войти
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 text-center space-y-2">
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Политика конфиденциальности
          </Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Условия использования
          </Link>
        </div>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} VVLEN. Все права защищены.
        </p>
      </footer>
    </div>
  );
}
