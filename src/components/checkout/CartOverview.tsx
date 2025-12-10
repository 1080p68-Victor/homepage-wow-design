import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { CartItemComponent } from './CartItem';

interface CartOverviewProps {
  onContinue: () => void;
}

export function CartOverview({ onContinue }: CartOverviewProps) {
  const { items, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Ваш кошик порожній</h2>
        <p className="text-muted-foreground mb-6 max-w-sm">
          Додайте товари до кошика, щоб продовжити покупки
        </p>
        <Button asChild size="lg">
          <Link to="/">
            Перейти до каталогу
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-1">Кошик</h2>
        <p className="text-sm text-muted-foreground">
          {items.length} {items.length === 1 ? 'товар' : items.length < 5 ? 'товари' : 'товарів'}
        </p>
      </div>

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

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button asChild variant="outline" className="flex-1">
          <Link to="/">Продовжити покупки</Link>
        </Button>
        <Button onClick={onContinue} className="flex-1">
          Оформити замовлення
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
