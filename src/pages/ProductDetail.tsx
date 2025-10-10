import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("pink");
  const [selectedSize, setSelectedSize] = useState("M");

  const product = {
    name: "Платтє оверсайз рожевого кольору",
    price: "999 грн.",
    model: "2858-2.116",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-c0b76eb4e1aa?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1887&auto=format&fit=crop",
    ],
    colors: [
      {
        id: "pink",
        name: "Рожевий",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "blue",
        name: "Блакитний", 
        image: "https://images.unsplash.com/photo-1566479179817-c0b76eb4e1aa?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "mint",
        name: "М'ятний",
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=200&auto=format&fit=crop",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Платтє оверсайз із стретчевої тканини. Підходить на розміри 44-52.",
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding py-8">
        {/* Breadcrumbs */}
        <div className="mb-8 text-sm text-muted-foreground">
          <a href="/" className="hover:text-primary transition-colors">
            Головна
          </a>
          <span className="mx-2">/</span>
          <a href="/" className="hover:text-primary transition-colors">
            Каталог
          </a>
          <span className="mx-2">/</span>
          <span className="text-foreground">Платтє оверсайз</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative mb-4 bg-muted rounded-lg overflow-hidden group">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {product.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? "border-primary scale-105"
                      : "border-transparent hover:border-accent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div>
            {/* Header */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                V&V LEN
              </p>
              <h1 className="heading-large mb-4">{product.name}</h1>
              <div className="flex items-center justify-between mb-4">
                <p className="text-3xl font-bold text-primary">{product.price}</p>
                <div className="flex gap-2">
                  <button className="p-2 border border-border rounded-full hover:bg-accent transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 border border-border rounded-full hover:bg-accent transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                МОДЕЛЬ: {product.model}
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="heading-small mb-4">Інші кольори</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      selectedColor === color.id
                        ? "border-primary ring-2 ring-primary ring-offset-2"
                        : "border-border"
                    }`}
                  >
                    <img
                      src={color.image}
                      alt={color.name}
                      className="w-20 h-28 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="heading-small mb-4">Виберіть розмір</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem
                        value={size}
                        id={`size-${size}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-border cursor-pointer transition-all duration-300 hover:border-accent peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:scale-110 font-semibold"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
              <a
                href="#"
                className="text-sm text-primary hover:text-accent transition-colors mt-3 inline-block"
              >
                Таблиця розмірів
              </a>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold uppercase tracking-wide"
              >
                Купити в 1 клік
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent transition-all duration-300 font-semibold uppercase tracking-wide"
              >
                В кошик
              </Button>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 border-t border-border pt-6">
              <div>
                <h4 className="font-semibold mb-2">Опис</h4>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold mb-1">Безкоштовна доставка</p>
                  <p className="text-muted-foreground text-xs">
                    Не застосовується до акційних товарів
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold mb-1">Покупай більше - плати менше</p>
                  <p className="text-muted-foreground text-xs">
                    При замовленні 2-х виробів - знижка 5%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
