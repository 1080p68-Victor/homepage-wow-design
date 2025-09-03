import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "VVLEN",
      subtitle: "НОВАЯ КОЛЛЕКЦИЯ",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1920&auto=format&fit=crop",
      description: "Стиль для кожної жінки"
    },
    {
      title: "OVERSIZE",
      subtitle: "ПЛАТЬЯ ОВЕРСАЙЗ", 
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
      description: "Комфорт і елегантність"
    },
    {
      title: "SPORT",
      subtitle: "СПОРТИВНАЯ ОДЕЖДА",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1920&auto=format&fit=crop",
      description: "Активний стиль життя"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative full-screen overflow-hidden">
      {/* Hero Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="full-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30" />
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="section-padding">
          <h1 className="heading-display mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="heading-medium mb-6 animate-fade-in opacity-90">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg font-light mb-8 animate-fade-in opacity-75">
            {slides[currentSlide].description}
          </p>
          <Button 
            size="lg"
            className="elegant-button bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent shadow-lg transition-all duration-300"
          >
            СМОТРЕТЬ КОЛЛЕКЦИЮ
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;