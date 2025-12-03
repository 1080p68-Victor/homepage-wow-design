import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, SlidersHorizontal, X, Grid3X3, LayoutList, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

// Mock products data
const MOCK_PRODUCTS = [
  { id: 1, name: "Сукня міді з V-вирізом", price: 2499, oldPrice: 3299, category: "Сукні", color: "Чорний", size: ["XS", "S", "M"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop" },
  { id: 2, name: "Костюм оверсайз", price: 4599, category: "Костюми", color: "Бежевий", size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop" },
  { id: 3, name: "Блуза сатинова", price: 1899, category: "Блузи", color: "Білий", size: ["XS", "S", "M", "L"], image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=600&fit=crop" },
  { id: 4, name: "Джинси straight", price: 2199, oldPrice: 2799, category: "Джинси", color: "Синій", size: ["XS", "S", "M"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop" },
  { id: 5, name: "Пальто вовняне", price: 6999, category: "Верхній одяг", color: "Сірий", size: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop" },
  { id: 6, name: "Топ трикотажний", price: 999, category: "Топи", color: "Чорний", size: ["XS", "S", "M"], image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=600&fit=crop" },
  { id: 7, name: "Спідниця плісе", price: 1799, category: "Спідниці", color: "Бежевий", size: ["XS", "S", "M", "L"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj1a?w=400&h=600&fit=crop" },
  { id: 8, name: "Жакет структурний", price: 3499, category: "Жакети", color: "Чорний", size: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=600&fit=crop" },
];

const CATEGORIES = ["Сукні", "Костюми", "Блузи", "Джинси", "Верхній одяг", "Топи", "Спідниці", "Жакети"];
const COLORS = ["Чорний", "Білий", "Бежевий", "Синій", "Сірий"];
const SIZES = ["XS", "S", "M", "L", "XL"];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Filter products
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesQuery = !query || 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
    const matchesSize = selectedSizes.length === 0 || product.size.some(s => selectedSizes.includes(s));
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesQuery && matchesCategory && matchesColor && matchesSize && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc": return a.price - b.price;
      case "price-desc": return b.price - a.price;
      case "name": return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(query ? { q: query } : {});
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([0, 10000]);
  };

  const activeFiltersCount = selectedCategories.length + selectedColors.length + selectedSizes.length + 
    (priceRange[0] > 0 || priceRange[1] < 10000 ? 1 : 0);

  useEffect(() => {
    document.title = query ? `Пошук: ${query} | VVLEN` : "Пошук | VVLEN";
  }, [query]);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h4 className="font-medium mb-3 text-sm uppercase tracking-wider">Категорії</h4>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer group">
              <Checkbox
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => {
                  setSelectedCategories(prev =>
                    checked ? [...prev, category] : prev.filter(c => c !== category)
                  );
                }}
              />
              <span className="text-sm group-hover:text-primary transition-colors">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-medium mb-3 text-sm uppercase tracking-wider">Ціна</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={10000}
          step={100}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{priceRange[0]} ₴</span>
          <span>{priceRange[1]} ₴</span>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h4 className="font-medium mb-3 text-sm uppercase tracking-wider">Колір</h4>
        <div className="space-y-2">
          {COLORS.map((color) => (
            <label key={color} className="flex items-center gap-3 cursor-pointer group">
              <Checkbox
                checked={selectedColors.includes(color)}
                onCheckedChange={(checked) => {
                  setSelectedColors(prev =>
                    checked ? [...prev, color] : prev.filter(c => c !== color)
                  );
                }}
              />
              <span className="text-sm group-hover:text-primary transition-colors">{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h4 className="font-medium mb-3 text-sm uppercase tracking-wider">Розмір</h4>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => {
                setSelectedSizes(prev =>
                  prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
                );
              }}
              className={cn(
                "w-10 h-10 border rounded-sm text-sm font-medium transition-colors",
                selectedSizes.includes(size)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Очистити фільтри ({activeFiltersCount})
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-muted rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            
            <form onSubmit={handleSearch} className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Пошук товарів..."
                className="pl-12 pr-10 h-12 text-base bg-muted/50 border-0 rounded-full"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSearchParams({});
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-background rounded-full"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </form>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-2">
            {/* Mobile Filters */}
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  Фільтри
                  {activeFiltersCount > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Фільтри</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            <span className="text-sm text-muted-foreground">
              {sortedProducts.length} товарів
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] h-9">
                <SelectValue placeholder="Сортування" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">За релевантністю</SelectItem>
                <SelectItem value="price-asc">Ціна: низька → висока</SelectItem>
                <SelectItem value="price-desc">Ціна: висока → низька</SelectItem>
                <SelectItem value="name">За назвою</SelectItem>
              </SelectContent>
            </Select>

            <div className="hidden sm:flex border border-border rounded-md">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === "grid" ? "bg-muted" : "hover:bg-muted/50"
                )}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === "list" ? "bg-muted" : "hover:bg-muted/50"
                )}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-medium mb-4 text-lg">Фільтри</h3>
              <FilterContent />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
                <h2 className="text-xl font-medium mb-2">Нічого не знайдено</h2>
                <p className="text-muted-foreground mb-6">
                  Спробуйте змінити пошуковий запит або фільтри
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Очистити фільтри
                </Button>
              </div>
            ) : (
              <div className={cn(
                viewMode === "grid"
                  ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
                  : "space-y-4"
              )}>
                {sortedProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className={cn(
                      "group",
                      viewMode === "list" && "flex gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors"
                    )}
                  >
                    <div className={cn(
                      "relative overflow-hidden bg-muted rounded-sm",
                      viewMode === "grid" ? "aspect-[3/4]" : "w-32 h-40 flex-shrink-0"
                    )}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.oldPrice && (
                        <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-sm">
                          -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                        </span>
                      )}
                    </div>
                    
                    <div className={cn(
                      viewMode === "grid" ? "mt-3" : "flex-1 flex flex-col justify-center"
                    )}>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-medium">{product.price} ₴</span>
                        {product.oldPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.oldPrice} ₴
                          </span>
                        )}
                      </div>
                      {viewMode === "list" && (
                        <div className="flex gap-1 mt-2">
                          {product.size.map((s) => (
                            <span key={s} className="text-xs text-muted-foreground border border-border px-1.5 py-0.5 rounded">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
