import { Card } from "@/components/ui/card";

export const DeliveryContent = () => {
  return (
    <div className="space-y-6">
      <div className="elegant-card">
        <h3 className="heading-medium mb-3">🚚 Нова Пошта</h3>
        <p className="text-muted-foreground mb-2">Доставка у відділення або поштомат</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Строк доставки: 1-3 робочих дні</li>
          <li>Вартість: за тарифами перевізника</li>
          <li>Безкоштовна доставка при замовленні від 3000 грн</li>
        </ul>
      </div>

      <div className="elegant-card">
        <h3 className="heading-medium mb-3">🏠 Кур'єрська доставка</h3>
        <p className="text-muted-foreground mb-2">Доставка за адресою (Київ та область)</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Строк доставки: 1-2 робочих дні</li>
          <li>Вартість: 150 грн</li>
          <li>Безкоштовна доставка при замовленні від 5000 грн</li>
        </ul>
      </div>

      <div className="elegant-card">
        <h3 className="heading-medium mb-3">✈️ Міжнародна доставка</h3>
        <p className="text-muted-foreground mb-2">Доставка у країни Європи та світу</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Строк доставки: 5-14 днів</li>
          <li>Вартість розраховується індивідуально</li>
          <li>Зв'яжіться з нами для уточнення деталей</li>
        </ul>
      </div>
    </div>
  );
};
