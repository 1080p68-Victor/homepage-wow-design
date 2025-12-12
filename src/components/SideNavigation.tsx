import { useState } from "react";
import { Menu, X, Search, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SearchModal } from "@/components/search/SearchModal";

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const menuItems = [
    { label: "КАТАЛОГ", href: "#" },
    { label: "ПЛАТЬЯ", href: "#" },
    { label: "БОЛЬШИЕ РАЗМЕРЫ", href: "#" },
    { label: "СПОРТ", href: "#" },
    { label: "РУБАШКИ", href: "#" },
    { label: "ОВЕРСАЙЗ", href: "#" },
    { label: "КОКТЕЙЛЬНЫЕ", href: "#" },
    { label: "РАСПРОДАЖА", href: "#" },
    { label: "ИНФОРМАЦИЯ", href: "/info" },
    { label: "БЛОГ", href: "#" },
    { label: "КОНТАКТЫ", href: "/info" }
  ];

  return (
    <>
      {/* Top Navigation Buttons */}
      <div className="fixed top-6 left-6 z-50 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 border border-primary/20"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 border border-primary/20"
          onClick={() => setSearchOpen(true)}
        >
          <Search className="h-5 w-5" />
        </Button>
        <Link to="/register">
          <Button
            variant="ghost"
            size="icon"
            className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 border border-primary/20"
          >
            <UserPlus className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* Search Modal */}
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />

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
            className="mb-8 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* VVLEN Logo */}
          <div className="mb-12">
            <h1 className="text-2xl font-bold tracking-[0.1em] bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">VVLEN</h1>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-6">
            {menuItems.map((item, index) => (
              item.href.startsWith('/') ? (
                <Link
                  key={index}
                  to={item.href}
                  className="block text-sm font-light tracking-wide hover:text-primary transition-colors duration-300 uppercase hover:translate-x-2 transform"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm font-light tracking-wide hover:text-primary transition-colors duration-300 uppercase hover:translate-x-2 transform"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;