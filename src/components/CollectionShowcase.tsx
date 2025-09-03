import { Button } from "@/components/ui/button";

const CollectionShowcase = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Image */}
        <div className="relative h-screen lg:h-auto">
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1920&auto=format&fit=crop)`
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex items-center section-padding py-20 lg:py-0">
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-widest text-primary mb-6 font-semibold">
              VVLEN OVERSIZE'25
            </p>
            
            <h2 className="heading-large mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Комфорт<br />
              без границ
            </h2>

            <p className="text-lg font-light mb-8 text-muted-foreground leading-relaxed">
              Откройте для себя коллекцию оверсайз, где каждое платье создано для максимального 
              комфорта и стиля. Свободные силуэты, качественные ткани и современные решения 
              для женщин, которые ценят удобство и красоту.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-light">Размеры от 42 до 60</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm font-light">Комфортные оверсайз силуэты</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-light">Доступные цены</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="elegant-button px-12 bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent"
            >
              СМОТРЕТЬ КОЛЛЕКЦИЮ
            </Button>
          </div>
        </div>
      </div>

      {/* Second Collection Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        {/* Left Side - Content */}
        <div className="flex items-center section-padding py-20 lg:py-0 order-2 lg:order-1">
          <div className="max-w-md ml-auto">
            <p className="text-sm uppercase tracking-widest text-secondary mb-6 font-semibold">
              SPORT COLLECTION
            </p>
            
            <h2 className="heading-large mb-8 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Спортивный<br />
              стиль
            </h2>

            <p className="text-lg font-light mb-10 text-muted-foreground leading-relaxed">
              Создайте идеальный образ для активного образа жизни. 
              Наша спортивная коллекция сочетает функциональность и стиль, создавая 
              комфортные решения для тренировок и повседневной жизни.
            </p>

            <Button 
              variant="outline" 
              size="lg" 
              className="elegant-button px-12 border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              СПОРТИВНАЯ КОЛЛЕКЦИЯ
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-screen lg:h-auto order-1 lg:order-2">
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1920&auto=format&fit=crop)`
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;