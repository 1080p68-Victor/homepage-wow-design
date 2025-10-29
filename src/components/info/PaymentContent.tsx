import { Card } from "@/components/ui/card";

export const PaymentContent = () => {
  return (
    <div className="space-y-6">
      <div className="elegant-card">
        <h3 className="heading-medium mb-3">💳 Онлайн оплата</h3>
        <p className="text-muted-foreground mb-2">Оплата банківською карткою</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Приймаємо Visa, Mastercard</li>
          <li>Безпечна оплата через LiqPay</li>
          <li>Миттєве підтвердження замовлення</li>
        </ul>
      </div>

      <div className="elegant-card">
        <h3 className="heading-medium mb-3">📦 Накладений платіж</h3>
        <p className="text-muted-foreground mb-2">Оплата при отриманні товару</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Оплата готівкою або карткою у відділенні Нової Пошти</li>
          <li>Комісія 20 грн + 2% від суми замовлення</li>
          <li>Доступно лише для доставки по Україні</li>
        </ul>
      </div>

      <div className="elegant-card">
        <h3 className="heading-medium mb-3">🏦 Банківський переказ</h3>
        <p className="text-muted-foreground mb-2">Оплата на розрахунковий рахунок</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Для юридичних осіб та ФОП</li>
          <li>Виставляємо рахунок на оплату</li>
          <li>Відправка після надходження коштів</li>
        </ul>
      </div>
    </div>
  );
};
