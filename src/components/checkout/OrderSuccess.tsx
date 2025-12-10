import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface OrderSuccessProps {
  orderNumber: string;
}

export function OrderSuccess({ orderNumber }: OrderSuccessProps) {
  const { total } = useCart();

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 animate-scale-in">
        <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
      </div>
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">Замовлення оформлено!</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        Дякуємо за покупку! Ми надіслали підтвердження на вашу електронну пошту.
      </p>

      <div className="bg-card rounded-xl border border-border p-6 mb-8 w-full max-w-sm">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Номер замовлення</span>
            <span className="font-mono font-semibold">{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Сума</span>
            <span className="font-semibold">{total.toLocaleString()} ₴</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <Button asChild variant="outline" className="flex-1">
          <Link to="/">
            На головну
          </Link>
        </Button>
        <Button asChild className="flex-1">
          <Link to="/">
            Продовжити покупки
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>

      {/* Recommended Products Placeholder */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-6">Вам може сподобатись</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-muted rounded-lg mb-3 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10" />
              </div>
              <p className="text-sm font-medium truncate">Рекомендований товар</p>
              <p className="text-sm text-muted-foreground">1 299 ₴</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
