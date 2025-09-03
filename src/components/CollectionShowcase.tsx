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
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
              ALLURE PRE-FALL'25
            </p>
            
            <h2 className="heading-large mb-8">
              Елегантність<br />
              без компромісів
            </h2>

            <p className="text-lg font-light mb-8 text-muted-foreground leading-relaxed">
              Відкрийте для себе нову колекцію, де кожна деталь продумана до дрібниць. 
              Витончені силуети, преміальні тканини та бездоганний крій створюють 
              неперевершений стиль для сучасної жінки.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-light">Ексклюзивні тканини з Італії</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-light">Ручна робота майстрів</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-light">Лімітована колекція</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="elegant-button px-12"
            >
              ДИВИТИСЯ КОЛЕКЦІЮ
            </Button>
          </div>
        </div>
      </div>

      {/* Second Collection Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        {/* Left Side - Content */}
        <div className="flex items-center section-padding py-20 lg:py-0 order-2 lg:order-1">
          <div className="max-w-md ml-auto">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
              WEDDING COLLECTION
            </p>
            
            <h2 className="heading-large mb-8">
              Весільна<br />
              розкіш
            </h2>

            <p className="text-lg font-light mb-10 text-muted-foreground leading-relaxed">
              Створіть незабутній образ для найважливішого дня у вашому житті. 
              Наша весільна колекція поєднує традиції та сучасність, створюючи 
              магію моментів, які залишаться в пам'яті назавжди.
            </p>

            <Button 
              variant="outline" 
              size="lg" 
              className="elegant-button px-12"
            >
              ВЕСІЛЬНА КОЛЕКЦІЯ
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