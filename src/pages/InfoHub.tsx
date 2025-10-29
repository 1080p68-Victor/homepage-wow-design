import { Link } from "react-router-dom";
import { Package, CreditCard, RotateCcw, MapPin, Building2, Ruler, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const InfoHub = () => {
  useEffect(() => {
    document.title = "Інформація | VVLEN";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Доставка, оплата, повернення та інша корисна інформація про VVLEN");
    }
  }, []);

  const sections = [
    { 
      id: "delivery", 
      label: "Доставка", 
      icon: Package,
      description: "Нова Пошта, кур'єр та міжнародна доставка",
      color: "from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20"
    },
    { 
      id: "payment", 
      label: "Оплата", 
      icon: CreditCard,
      description: "Онлайн, накладений платіж, банківський переказ",
      color: "from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20"
    },
    { 
      id: "returns", 
      label: "Повернення", 
      icon: RotateCcw,
      description: "Умови повернення та обміну товару",
      color: "from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20"
    },
    { 
      id: "contacts", 
      label: "Контакти", 
      icon: MapPin,
      description: "Телефон, email, соціальні мережі та адреса",
      color: "from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20"
    },
    { 
      id: "about", 
      label: "Про бренд", 
      icon: Building2,
      description: "Історія, цінності та переваги VVLEN",
      color: "from-pink-500/10 to-pink-600/10 hover:from-pink-500/20 hover:to-pink-600/20"
    },
    { 
      id: "sizes", 
      label: "Розміри", 
      icon: Ruler,
      description: "Таблиця розмірів та як зняти мірки",
      color: "from-cyan-500/10 to-cyan-600/10 hover:from-cyan-500/20 hover:to-cyan-600/20"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              VVLEN
            </Link>
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← На главную
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Центр підтримки
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Все, що вам потрібно знати про роботу з VVLEN
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.id}
                  to={`/info/${section.id}`}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br ${section.color} border border-primary/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-primary/30`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4 p-3 bg-background/50 rounded-xl w-fit">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {section.label}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {section.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      <span>Детальніше</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Не знайшли відповідь?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Наша команда завжди готова допомогти вам. Зв'яжіться з нами будь-яким зручним способом.
            </p>
            <Link 
              to="/info/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Зв'язатися з нами
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InfoHub;
