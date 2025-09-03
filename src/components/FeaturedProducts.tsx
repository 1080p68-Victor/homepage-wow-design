import { Button } from "@/components/ui/button";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Чорний двобортний комбінезон",
      price: "3,200 ₴",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop",
      category: "НОВИНКИ"
    },
    {
      id: 2,
      name: "Елегантна сукня міді",
      price: "2,800 ₴", 
      image: "https://images.unsplash.com/photo-1566479179817-c0b76eb4e1aa?q=80&w=1887&auto=format&fit=crop",
      category: "СУКНІ"
    },
    {
      id: 3,
      name: "Твідовий жакет класик",
      price: "4,100 ₴",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1887&auto=format&fit=crop",
      category: "ЖАКЕТИ"
    },
    {
      id: 4,
      name: "Сатинова сукня максі",
      price: "3,600 ₴",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1887&auto=format&fit=crop",
      category: "ВЕЧІРНІ"
    },
    {
      id: 5,
      name: "Широкі штани-кльош",
      price: "2,400 ₴",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop",
      category: "БРЮКИ"
    },
    {
      id: 6,
      name: "Мінімалістична блуза",
      price: "1,900 ₴",
      image: "https://images.unsplash.com/photo-1564584217132-2271339c8c35?q=80&w=1887&auto=format&fit=crop",
      category: "БЛУЗИ"
    }
  ];

  return (
    <section className="py-20 section-padding">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          НОВИНКИ
        </p>
        <h2 className="heading-large mb-6">
          Останні надходження
        </h2>
        <div className="w-24 h-px bg-primary mx-auto"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden mb-4 bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wide">
                {product.category}
              </div>

              {/* Quick View Button */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button 
                  variant="outline" 
                  className="w-full bg-white/90 backdrop-blur-sm hover:bg-white"
                >
                  ШВИДКИЙ ПЕРЕГЛЯД
                </Button>
              </div>
            </div>

            <div className="text-center">
              <h3 className="heading-medium mb-2 group-hover:text-accent transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-lg font-light">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button 
          variant="outline" 
          size="lg"
          className="elegant-button px-12"
        >
          ПЕРЕГЛЯНУТИ ВСІ ТОВАРИ
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;