import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { CartItemComponent } from './CartItem';
import { Separator } from '@/components/ui/separator';

interface CheckoutFormProps {
  onContinue: () => void;
  onBack: () => void;
}

const countries = [
  { value: 'Ukraine', label: 'Україна' },
  { value: 'Poland', label: 'Польща' },
  { value: 'Romania', label: 'Румунія' },
  { value: 'Moldova', label: 'Молдова' },
];

const deliveryMethods: Record<string, { value: string; label: string }[]> = {
  Ukraine: [
    { value: 'nova_poshta', label: 'Нова Пошта' },
    { value: 'ukrposhta', label: 'Укрпошта' },
    { value: 'courier', label: "Кур'єр" },
  ],
  Poland: [
    { value: 'inpost', label: 'InPost' },
    { value: 'dpd', label: 'DPD' },
    { value: 'courier', label: "Кур'єр" },
  ],
  Romania: [
    { value: 'fan_courier', label: 'Fan Courier' },
    { value: 'sameday', label: 'Sameday' },
  ],
  Moldova: [
    { value: 'nova_poshta', label: 'Нова Пошта' },
    { value: 'courier', label: "Кур'єр" },
  ],
};

const paymentMethods = [
  { value: 'cod', label: 'Накладений платіж' },
  { value: 'partial', label: 'Часткова передоплата' },
  { value: 'full', label: 'Повна передоплата' },
];

const paymentSystems = [
  { value: 'wayforpay', label: 'WayForPay' },
  { value: 'fondy', label: 'Fondy' },
  { value: 'liqpay', label: 'LiqPay' },
  { value: 'stripe', label: 'Stripe' },
];

export function CheckoutForm({ onContinue, onBack }: CheckoutFormProps) {
  const { items, customerInfo, updateCustomerInfo, updateQuantity, removeItem } = useCart();

  const currentDeliveryMethods = deliveryMethods[customerInfo.country] || deliveryMethods.Ukraine;
  const showPaymentSystems = customerInfo.paymentMethod === 'partial' || customerInfo.paymentMethod === 'full';
  const showWarehouse = customerInfo.deliveryMethod && customerInfo.deliveryMethod !== 'courier';
  const showAddress = customerInfo.deliveryMethod === 'courier';

  useEffect(() => {
    if (customerInfo.country && !currentDeliveryMethods.find(m => m.value === customerInfo.deliveryMethod)) {
      updateCustomerInfo({ deliveryMethod: '', warehouse: '', address: '' });
    }
  }, [customerInfo.country]);

  const isValid = 
    customerInfo.fullName.trim() &&
    customerInfo.phone.trim() &&
    customerInfo.email.trim() &&
    customerInfo.city.trim() &&
    customerInfo.deliveryMethod &&
    customerInfo.paymentMethod &&
    (showWarehouse ? customerInfo.warehouse.trim() : true) &&
    (showAddress ? customerInfo.address.trim() : true) &&
    (showPaymentSystems ? customerInfo.paymentSystem : true);

  return (
    <div className="space-y-8">
      {/* Cart Items Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Товари в замовленні</h2>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="divide-y divide-border">
            {items.map(item => (
              <CartItemComponent
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
        </div>
      </div>

      <Separator />

      {/* Customer Information */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Контактні дані</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName">Повне ім'я *</Label>
            <Input
              id="fullName"
              placeholder="Іван Петренко"
              value={customerInfo.fullName}
              onChange={(e) => updateCustomerInfo({ fullName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+380 XX XXX XX XX"
              value={customerInfo.phone}
              onChange={(e) => updateCustomerInfo({ phone: e.target.value })}
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              value={customerInfo.email}
              onChange={(e) => updateCustomerInfo({ email: e.target.value })}
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Delivery Information */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Доставка</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Країна *</Label>
            <Select
              value={customerInfo.country}
              onValueChange={(value) => updateCustomerInfo({ country: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Оберіть країну" />
              </SelectTrigger>
              <SelectContent>
                {countries.map(country => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">Місто *</Label>
            <Input
              id="city"
              placeholder="Київ"
              value={customerInfo.city}
              onChange={(e) => updateCustomerInfo({ city: e.target.value })}
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label>Спосіб доставки *</Label>
            <RadioGroup
              value={customerInfo.deliveryMethod}
              onValueChange={(value) => updateCustomerInfo({ deliveryMethod: value, warehouse: '', address: '' })}
              className="grid gap-3 sm:grid-cols-3"
            >
              {currentDeliveryMethods.map(method => (
                <Label
                  key={method.value}
                  htmlFor={method.value}
                  className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-accent transition-colors [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                >
                  <RadioGroupItem value={method.value} id={method.value} />
                  <span className="text-sm font-medium">{method.label}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>
          {showWarehouse && (
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="warehouse">Відділення / Поштомат *</Label>
              <Input
                id="warehouse"
                placeholder="№ відділення або адреса поштомату"
                value={customerInfo.warehouse}
                onChange={(e) => updateCustomerInfo({ warehouse: e.target.value })}
              />
            </div>
          )}
          {showAddress && (
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="address">Адреса доставки *</Label>
              <Input
                id="address"
                placeholder="Вулиця, будинок, квартира"
                value={customerInfo.address}
                onChange={(e) => updateCustomerInfo({ address: e.target.value })}
              />
            </div>
          )}
        </div>
      </div>

      <Separator />

      {/* Payment */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Оплата</h2>
        <div className="space-y-4">
          <RadioGroup
            value={customerInfo.paymentMethod}
            onValueChange={(value) => updateCustomerInfo({ paymentMethod: value, paymentSystem: '' })}
            className="grid gap-3"
          >
            {paymentMethods.map(method => (
              <Label
                key={method.value}
                htmlFor={`payment-${method.value}`}
                className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-accent transition-colors [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
              >
                <RadioGroupItem value={method.value} id={`payment-${method.value}`} />
                <span className="text-sm font-medium">{method.label}</span>
              </Label>
            ))}
          </RadioGroup>

          {showPaymentSystems && (
            <div className="space-y-3 pt-2">
              <Label>Платіжна система *</Label>
              <RadioGroup
                value={customerInfo.paymentSystem}
                onValueChange={(value) => updateCustomerInfo({ paymentSystem: value })}
                className="grid gap-3 sm:grid-cols-2"
              >
                {paymentSystems.map(system => (
                  <Label
                    key={system.value}
                    htmlFor={`system-${system.value}`}
                    className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-accent transition-colors [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                  >
                    <RadioGroupItem value={system.value} id={`system-${system.value}`} />
                    <span className="text-sm font-medium">{system.label}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button variant="outline" onClick={onBack} className="flex-1">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Назад
        </Button>
        <Button onClick={onContinue} disabled={!isValid} className="flex-1">
          Перевірити замовлення
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
