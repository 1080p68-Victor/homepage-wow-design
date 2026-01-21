import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center section-padding relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto animate-fade-in">
        {/* 404 Number with gradient */}
        <h1 
          className="text-[12rem] md:text-[16rem] font-extralight leading-none tracking-tighter bg-clip-text text-transparent"
          style={{ backgroundImage: 'var(--gradient-neon)' }}
        >
          404
        </h1>
        
        {/* Message */}
        <div className="space-y-4 -mt-8">
          <h2 className="heading-large text-foreground">
            Сторінку не знайдено
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-md mx-auto">
            На жаль, сторінка яку ви шукаєте не існує або була переміщена
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:opacity-90 transition-opacity gap-2 px-8"
          >
            <Link to="/">
              <Home className="w-4 h-4" />
              На головну
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/5 gap-2 px-8"
          >
            <Link to="/search">
              <Search className="w-4 h-4" />
              Пошук
            </Link>
          </Button>
        </div>

        {/* Back link */}
        <button 
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
        >
          <ArrowLeft className="w-4 h-4" />
          Повернутися назад
        </button>
      </div>

      {/* Brand name at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span 
          className="text-2xl font-extralight tracking-widest bg-clip-text text-transparent"
          style={{ backgroundImage: 'var(--gradient-neon)' }}
        >
          VVLEN
        </span>
      </div>
    </div>
  );
};

export default NotFound;
