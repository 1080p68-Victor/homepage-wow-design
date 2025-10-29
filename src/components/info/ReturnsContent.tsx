import { Card } from "@/components/ui/card";

export const ReturnsContent = () => {
  return (
    <div className="space-y-6">
      <div className="elegant-card">
        <h3 className="heading-medium mb-3">✓ Умови повернення</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Повернення протягом 14 днів з моменту отримання</li>
          <li>Товар повинен бути у первинному вигляді з бирками</li>
          <li>Збережені всі етикетки та упаковка</li>
          <li>Відсутні сліди носіння та запахи</li>
        </ul>
      </div>

      <div className="elegant-card">
        <h3 className="heading-medium mb-3">🔄 Обмін товару</h3>
        <p className="text-muted-foreground mb-2">Ви можете обміняти товар на:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Інший розмір або колір</li>
          <li>Інший товар із асортименту</li>
          <li>Обмін безкоштовний протягом 14 днів</li>
        </ul>
      </div>

      <div className="elegant-card">
        <h3 className="heading-medium mb-3">💰 Повернення коштів</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Кошти повертаються на картку протягом 5-10 робочих днів</li>
          <li>Вартість доставки не повертається</li>
          <li>Для повернення зв'яжіться з нами</li>
        </ul>
      </div>

      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
        <p className="text-sm text-muted-foreground">
          <strong className="text-primary">Важливо:</strong> Товар із категорії "Sale" поверненню не підлягає, лише обмін на інший розмір.
        </p>
      </div>
    </div>
  );
};
