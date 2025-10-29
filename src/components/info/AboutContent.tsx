import { Card } from "@/components/ui/card";

export const AboutContent = () => {
  return (
    <div className="space-y-6">
      <div className="elegant-card">
        <h3 className="heading-medium mb-4">✨ Наша історія</h3>
        <p className="text-muted-foreground leading-relaxed">
          VVLEN — це український бренд жіночого одягу, створений у 2020 році. Ми віримо, що мода — це спосіб самовираження, 
          тому створюємо колекції, які підкреслюють індивідуальність кожної жінки. Наша місія — робити якісний та стильний одяг 
          доступним для кожної української жінки.
        </p>
      </div>

      <div className="elegant-card">
        <h3 className="heading-medium mb-4">🎯 Наші цінності</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary/5 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">Якість</h4>
            <p className="text-sm text-muted-foreground">
              Використовуємо лише якісні тканини та фурнітуру
            </p>
          </div>
          <div className="p-4 bg-accent/5 rounded-lg">
            <h4 className="font-semibold mb-2 text-accent">Стиль</h4>
            <p className="text-sm text-muted-foreground">
              Актуальні тренди та унікальний дизайн
            </p>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">Комфорт</h4>
            <p className="text-sm text-muted-foreground">
              Зручний крій та приємні матеріали
            </p>
          </div>
          <div className="p-4 bg-accent/5 rounded-lg">
            <h4 className="font-semibold mb-2 text-accent">Підтримка</h4>
            <p className="text-sm text-muted-foreground">
              Виробництво в Україні, підтримка локального виробника
            </p>
          </div>
        </div>
      </div>

      <div className="elegant-card">
        <h3 className="heading-medium mb-4">🌟 Чому обирають нас?</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Нові колекції кожного сезону</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Широкий розмірний ряд (XS-XXL)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Індивідуальний підхід до кожного клієнта</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Швидка доставка по всій Україні та за кордон</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Програма лояльності для постійних клієнтів</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
