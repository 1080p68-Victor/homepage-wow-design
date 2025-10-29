import { useParams, Link, Navigate } from "react-router-dom";
import { Package, CreditCard, RotateCcw, MapPin, Building2, Ruler, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { DeliveryContent } from "@/components/info/DeliveryContent";
import { PaymentContent } from "@/components/info/PaymentContent";
import { ReturnsContent } from "@/components/info/ReturnsContent";
import { ContactsContent } from "@/components/info/ContactsContent";
import { AboutContent } from "@/components/info/AboutContent";
import { SizesContent } from "@/components/info/SizesContent";

const InfoArticle = () => {
  const { section } = useParams();

  const sections: Record<string, {
    label: string;
    icon: any;
    title: string;
    description: string;
    content: JSX.Element;
  }> = {
    delivery: {
      label: "Доставка",
      icon: Package,
      title: "Доставка",
      description: "Інформація про доставку замовлень по Україні та за кордон",
      content: <DeliveryContent />
    },
    payment: {
      label: "Оплата",
      icon: CreditCard,
      title: "Оплата",
      description: "Способи оплати: онлайн, накладений платіж, банківський переказ",
      content: <PaymentContent />
    },
    returns: {
      label: "Повернення",
      icon: RotateCcw,
      title: "Повернення та обмін",
      description: "Умови повернення та обміну товарів VVLEN",
      content: <ReturnsContent />
    },
    contacts: {
      label: "Контакти",
      icon: MapPin,
      title: "Контакти",
      description: "Зв'яжіться з нами: телефон, email, соціальні мережі",
      content: <ContactsContent />
    },
    about: {
      label: "Про бренд",
      icon: Building2,
      title: "Про VVLEN",
      description: "Історія бренду, наші цінності та переваги VVLEN",
      content: <AboutContent />
    },
    sizes: {
      label: "Розміри",
      icon: Ruler,
      title: "Таблиця розмірів",
      description: "Як правильно обрати розмір одягу VVLEN",
      content: <SizesContent />
    },
  };

  const currentSection = section ? sections[section] : null;

  useEffect(() => {
    if (currentSection) {
      document.title = `${currentSection.title} | VVLEN`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", currentSection.description);
      }
    }
  }, [section, currentSection]);

  if (!section || !currentSection) {
    return <Navigate to="/info" replace />;
  }

  const Icon = currentSection.icon;

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
              to="/info" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Назад до інформації</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Головна</Link>
            <span>/</span>
            <Link to="/info" className="hover:text-primary transition-colors">Інформація</Link>
            <span>/</span>
            <span className="text-foreground">{currentSection.label}</span>
          </nav>

          {/* Hero Section */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {currentSection.title}
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              {currentSection.description}
            </p>
          </div>

          {/* Content */}
          <Card className="p-8 md:p-12 border-primary/20 bg-gradient-to-br from-background to-muted/30 animate-fade-in">
            {currentSection.content}
          </Card>

          {/* Navigation to other sections */}
          <div className="mt-12 p-6 bg-muted/30 rounded-xl">
            <h3 className="font-semibold mb-4 text-foreground">Інші розділи</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(sections)
                .filter(([key]) => key !== section)
                .map(([key, { label, icon: SectionIcon }]) => (
                  <Link
                    key={key}
                    to={`/info/${key}`}
                    className="flex items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors text-sm"
                  >
                    <SectionIcon className="w-4 h-4 text-primary" />
                    <span>{label}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InfoArticle;
