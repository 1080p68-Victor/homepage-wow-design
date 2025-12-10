import { useCart } from '@/contexts/CartContext';
import { CartItemComponent } from './CartItem';
import { Separator } from '@/components/ui/separator';

interface OrderSummaryProps {
  showItems?: boolean;
  compact?: boolean;
}

export function OrderSummary({ showItems = true, compact = false }: OrderSummaryProps) {
  const { items, subtotal, deliveryFee, total, updateQuantity, removeItem } = useCart();

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="font-semibold text-lg mb-4">Ваше замовлення</h3>
      
      {showItems && items.length > 0 && (
        <>
          <div className="max-h-80 overflow-y-auto -mx-2 px-2">
            {items.map(item => (
              <CartItemComponent
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
                compact={compact}
              />
            ))}
          </div>
          <Separator className="my-4" />
        </>
      )}

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Товари ({items.reduce((sum, i) => sum + i.quantity, 0)})</span>
          <span>{subtotal.toLocaleString()} ₴</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Доставка</span>
          <span>{deliveryFee === 0 ? 'Безкоштовно' : `${deliveryFee} ₴`}</span>
        </div>
        {deliveryFee > 0 && (
          <p className="text-xs text-muted-foreground">
            Безкоштовна доставка від 2000 ₴
          </p>
        )}
        <Separator />
        <div className="flex justify-between text-base font-semibold">
          <span>Разом</span>
          <span>{total.toLocaleString()} ₴</span>
        </div>
      </div>
    </div>
  );
}
