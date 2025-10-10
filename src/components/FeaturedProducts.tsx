import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: "Платье оверсайз голубого цвета",
      price: "999 грн.",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop",
      category: "ПЛАТЬЯ ОВЕРСАЙЗ"
    },
    {
      id: 2,
      name: "Платье оверсайз розового цвета", 
      price: "999 грн.", 
      image: "https://images.unsplash.com/photo-1566479179817-c0b76eb4e1aa?q=80&w=1887&auto=format&fit=crop",
      category: "ПЛАТЬЯ ОВЕРСАЙЗ"
    },
    {
      id: 3,
      name: "Спортивное платье",
      price: "850 грн.",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1887&auto=format&fit=crop",
      category: "СПОРТ"
    },
    {
      id: 4,
      name: "Коктейльное платье",
      price: "1,200 грн.",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1887&auto=format&fit=crop",
      category: "КОКТЕЙЛЬНЫЕ"
    },
    {
      id: 5,
      name: "Платье больших размеров",
      price: "1,100 грн.",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop",
      category: "БОЛЬШИЕ РАЗМЕРЫ"
    },
    {
      id: 6,
      name: "Рубашка оверсайз",
      price: "750 грн.",
      image: "https://images.unsplash.com/photo-1564584217132-2271339c8c35?q=80&w=1887&auto=format&fit=crop",
      category: "РУБАШКИ"
    }
  ];

  return (
    <section className="py-20 section-padding">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">
          НОВИНКИ
        </p>
        <h2 className="heading-large mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Последние поступления
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-primary to-secondary mx-auto"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
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
              <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 text-xs uppercase tracking-wide rounded-sm font-semibold">
                {product.category}
              </div>

              {/* Quick View Button */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent transition-all duration-300"
                >
                  БЫСТРЫЙ ПРОСМОТР
                </Button>
              </div>
            </div>

            <div className="text-center">
              <h3 className="heading-medium mb-2 group-hover:text-primary transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-lg font-semibold text-primary">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button 
          size="lg"
          className="elegant-button px-12 bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent"
        >
          ПОСМОТРЕТЬ ВСЕ ТОВАРЫ
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;