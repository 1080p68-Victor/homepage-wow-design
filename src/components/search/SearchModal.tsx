import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TRENDING_SEARCHES = [
  "Сукні",
  "Костюми",
  "Блузи",
  "Джинси",
  "Верхній одяг",
];

const POPULAR_CATEGORIES = [
  { name: "Новинки", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&h=200&fit=crop" },
  { name: "Сукні", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop" },
  { name: "Костюми", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop" },
  { name: "Аксесуари", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=200&h=200&fit=crop" },
];

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
    
    onOpenChange(false);
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  }, [recentSearches, navigate, onOpenChange]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 bg-background border-border overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            autoFocus
            placeholder="Пошук товарів..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border-0 bg-transparent text-lg placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {/* Quick Search Results */}
          {query.length > 0 ? (
            <div className="p-4">
              <button
                onClick={() => handleSearch(query)}
                className="w-full flex items-center justify-between p-3 hover:bg-muted rounded-lg transition-colors group"
              >
                <span className="text-foreground">
                  Пошук "<span className="font-medium">{query}</span>"
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          ) : (
            <>
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Недавні пошуки
                    </h3>
                    <button
                      onClick={clearRecentSearches}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Очистити
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, i) => (
                      <button
                        key={i}
                        onClick={() => handleSearch(search)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full text-sm transition-colors"
                      >
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              <div className="p-4 border-b border-border">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Популярні запити
                </h3>
                <div className="flex flex-wrap gap-2">
                  {TRENDING_SEARCHES.map((search, i) => (
                    <button
                      key={i}
                      onClick={() => handleSearch(search)}
                      className="flex items-center gap-2 px-3 py-1.5 border border-border hover:border-primary hover:text-primary rounded-full text-sm transition-colors"
                    >
                      <TrendingUp className="w-3 h-3" />
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Categories */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Популярні категорії
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {POPULAR_CATEGORIES.map((category, i) => (
                    <button
                      key={i}
                      onClick={() => handleSearch(category.name)}
                      className="group text-center"
                    >
                      <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-muted">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-sm group-hover:text-primary transition-colors">
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
