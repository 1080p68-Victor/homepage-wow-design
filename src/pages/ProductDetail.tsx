import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("pink");
  const [selectedSize, setSelectedSize] = useState("");

  const product = {
    name: "Платтє оверсайз рожевого кольору",
    price: "999 грн.",
    model: "2858-2.116",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&h=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-c0b76eb4e1aa?q=80&w=800&h=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=800&h=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&h=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&h=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=800&h=1200&auto=format&fit=crop",
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
    sizes: ["XS", "S", "M", "L"],
    description: "Платтє оверсайз рожевого кольору виготовлене зі стретчевої тканини. Підходить на розміри 44-52.",
    characteristics: [
      { label: "Довжина виробу", value: "макси" },
      { label: "Довжина рукава", value: "короткий рукав" },
      { label: "Стиль", value: "Повсякденний" },
      { label: "Фасон", value: "Платтє оверсайз" },
      { label: "Виріз", value: "округлий" },
      { label: "Колір", value: "рожевий" },
      { label: "Тканина", value: "віскоза 26%, поліестер 74%" },
      { label: "Вага", value: "400 гр." },
    ],
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Сукня макси м'ятного кольору",
      price: "1 299 грн.",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Светр оверсайз білого кольору",
      price: "799 грн.",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Платтє міні чорного кольору",
      price: "1 099 грн.",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Кардиган з мереживом",
      price: "899 грн.",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=400&auto=format&fit=crop",
    },
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12">
          {/* Left Side - Image Gallery (2 images per row) */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] ${
                    selectedImage === index
                      ? "border-primary ring-2 ring-primary ring-offset-2"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="lg:sticky lg:top-8 h-fit">
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

            <Separator className="my-6" />

            {/* Size Selection - Gepur Style */}
            <div className="mb-8">
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
                        className="flex items-center justify-center min-w-[60px] h-12 px-6 rounded-full border-2 border-border cursor-pointer transition-all duration-300 hover:border-primary peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background peer-data-[state=checked]:border-foreground font-semibold uppercase text-sm"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Action Buttons - Gepur Style */}
            <div className="flex gap-4 mb-8">
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-medium"
              >
                Купить в 1 клик
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-medium"
              >
                В корзину
              </Button>
            </div>

            <Separator className="my-6" />

            {/* Additional Info */}
            <div className="space-y-6">
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

        {/* Description & Characteristics */}
        <div className="mt-16 max-w-4xl">
          <div className="mb-8">
            <h2 className="heading-large mb-4">Опис</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <Separator className="my-8" />

          <div>
            <h2 className="heading-large mb-6">Характеристики товару</h2>
            <div className="grid gap-4">
              {product.characteristics.map((char, index) => (
                <div
                  key={index}
                  className="flex justify-between py-3 border-b border-border last:border-0"
                >
                  <span className="text-muted-foreground">{char.label}:</span>
                  <span className="font-medium">{char.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="heading-large mb-8">Вас може зацікавити</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <a
                key={product.id}
                href="#"
                className="group"
              >
                <div className="relative rounded-lg overflow-hidden mb-4 bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary font-bold">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
