import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "НОВИНКИ",
    "ВСІ ТОВАРИ", 
    "СУКНІ",
    "АКСЕСУАРИ ТА СУМКИ",
    "ALLURE PRE-FALL'25",
    "ODESA DAYS",
    "ДУША",
    "WEDDING COLLECTION",
    "SALE",
    "УКРАЇНСЬКА ДНИ",
    "LOOK BOOK",
    "КОЛЕКЦІЇ"
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-black transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="section-padding py-8">
          <Button
            variant="ghost"
            size="icon"
            className="mb-8"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          <nav className="space-y-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-sm font-light tracking-wide hover:text-accent-foreground transition-colors duration-300 uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;