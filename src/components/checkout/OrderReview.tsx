import { ArrowLeft, MapPin, CreditCard, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { CartItemComponent } from './CartItem';
import { Separator } from '@/components/ui/separator';

interface OrderReviewProps {
  onConfirm: () => void;
  onBack: () => void;
  isLoading?: boolean;
}

const deliveryLabels: Record<string, string> = {
  nova_poshta: 'Нова Пошта',
  ukrposhta: 'Укрпошта',
  courier: "Кур'єр",
  inpost: 'InPost',
  dpd: 'DPD',
  fan_courier: 'Fan Courier',
  sameday: 'Sameday',
};

const paymentLabels: Record<string, string> = {
  cod: 'Накладений платіж',
  partial: 'Часткова передоплата',
  full: 'Повна передоплата',
};

const systemLabels: Record<string, string> = {
  wayforpay: 'WayForPay',
  fondy: 'Fondy',
  liqpay: 'LiqPay',
  stripe: 'Stripe',
};

const countryLabels: Record<string, string> = {
  Ukraine: 'Україна',
  Poland: 'Польща',
  Romania: 'Румунія',
  Moldova: 'Молдова',
};

export function OrderReview({ onConfirm, onBack, isLoading }: OrderReviewProps) {
  const { items, customerInfo, subtotal, deliveryFee, total, updateQuantity, removeItem } = useCart();

  const deliveryAddress = customerInfo.deliveryMethod === 'courier' 
    ? customerInfo.address 
    : customerInfo.warehouse;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-1">Перевірка замовлення</h2>
        <p className="text-sm text-muted-foreground">
          Перевірте дані перед підтвердженням
        </p>
      </div>

      {/* Products */}
      <div className="bg-card rounded-xl border border-border p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Package className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold">Товари</h3>
        </div>
        <div className="divide-y divide-border">
          {items.map(item => (
            <CartItemComponent
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
              compact
            />
          ))}
        </div>
      </div>

      {/* Delivery Info */}
      <div className="bg-card rounded-xl border border-border p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold">Доставка</h3>
        </div>
        <div className="space-y-2 text-sm">
          <p><span className="text-muted-foreground">Отримувач:</span> {customerInfo.fullName}</p>
          <p><span className="text-muted-foreground">Телефон:</span> {customerInfo.phone}</p>
          <p><span className="text-muted-foreground">Email:</span> {customerInfo.email}</p>
          <Separator className="my-3" />
          <p><span className="text-muted-foreground">Країна:</span> {countryLabels[customerInfo.country] || customerInfo.country}</p>
          <p><span className="text-muted-foreground">Місто:</span> {customerInfo.city}</p>
          <p><span className="text-muted-foreground">Спосіб:</span> {deliveryLabels[customerInfo.deliveryMethod] || customerInfo.deliveryMethod}</p>
          <p><span className="text-muted-foreground">Адреса:</span> {deliveryAddress}</p>
        </div>
      </div>

      {/* Payment Info */}
      <div className="bg-card rounded-xl border border-border p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold">Оплата</h3>
        </div>
        <div className="space-y-2 text-sm">
          <p><span className="text-muted-foreground">Метод:</span> {paymentLabels[customerInfo.paymentMethod] || customerInfo.paymentMethod}</p>
          {customerInfo.paymentSystem && (
            <p><span className="text-muted-foreground">Система:</span> {systemLabels[customerInfo.paymentSystem] || customerInfo.paymentSystem}</p>
          )}
        </div>
      </div>

      {/* Total */}
      <div className="bg-card rounded-xl border border-border p-4 sm:p-6">
        <h3 className="font-semibold mb-4">Підсумок</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Товари</span>
            <span>{subtotal.toLocaleString()} ₴</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Доставка</span>
            <span>{deliveryFee === 0 ? 'Безкоштовно' : `${deliveryFee} ₴`}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-semibold">
            <span>До сплати</span>
            <span>{total.toLocaleString()} ₴</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button variant="outline" onClick={onBack} className="flex-1" disabled={isLoading}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          Редагувати
        </Button>
        <Button onClick={onConfirm} className="flex-1" disabled={isLoading}>
          {isLoading ? 'Обробка...' : 'Підтвердити замовлення'}
        </Button>
      </div>
    </div>
  );
}
