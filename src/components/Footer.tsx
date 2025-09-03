import { Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted py-20">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="heading-medium mb-6">GEPUR</h3>
            <p className="text-sm font-light text-muted-foreground mb-6 leading-relaxed">
              Український бренд преміального жіночого одягу, що створює елегантні образи 
              для сучасних жінок, які цінують стиль та якість.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="text-lg font-light mb-6 uppercase tracking-wide">Каталог</h4>
            <nav className="space-y-3">
              {["Новинки", "Сукні", "Жакети", "Брюки", "Аксесуари", "Sale"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-light mb-6 uppercase tracking-wide">Колекції</h4>
            <nav className="space-y-3">
              {["Allure Pre-Fall'25", "Odesa Days", "Wedding Collection", "Українські дні", "Look Book"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-light mb-6 uppercase tracking-wide">Інформація</h4>
            <nav className="space-y-3">
              {["Про нас", "Доставка та оплата", "Обмін та повернення", "Розмірна сітка", "Контакти", "Політика конфіденційності"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-16 mb-16">
          <div className="max-w-md mx-auto text-center">
            <h4 className="heading-medium mb-4">Розсилка новин</h4>
            <p className="text-sm font-light text-muted-foreground mb-6">
              Будьте першими, хто дізнається про нові колекції та ексклюзивні пропозиції
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 border border-input rounded-sm bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="px-6">
                Підписатись
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs font-light text-muted-foreground">
            © 2025 GEPUR. Всі права захищені.
          </p>
          <p className="text-xs font-light text-muted-foreground">
            Зроблено з любов'ю в Україні
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;