import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
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
    <section className="relative full-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="full-screen bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="section-padding">
          <h1 className="heading-display mb-4 animate-fade-in">
            404
          </h1>
          <p className="heading-medium mb-6 animate-fade-in opacity-90">
            СТОРІНКУ НЕ ЗНАЙДЕНО
          </p>
          <p className="text-lg font-light mb-8 animate-fade-in opacity-75 max-w-md mx-auto">
            На жаль, сторінка яку ви шукаєте не існує або була переміщена
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              asChild
              size="lg"
              className="elegant-button bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent shadow-lg transition-all duration-300"
            >
              <Link to="/">
                НА ГОЛОВНУ
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="ghost"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
            >
              <Link to="/search">
                ПОШУК
              </Link>
            </Button>
          </div>
          <button 
            onClick={() => window.history.back()}
            className="mt-8 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-light animate-fade-in"
          >
            <ChevronLeft className="w-4 h-4" />
            Повернутися назад
          </button>
        </div>
      </div>

      {/* Brand at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="heading-medium bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          VVLEN
        </span>
      </div>
    </section>
  );
};

export default NotFound;
