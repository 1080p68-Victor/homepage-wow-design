import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface OrderSuccessProps {
  orderNumber: string;
}

export function OrderSuccess({ orderNumber }: OrderSuccessProps) {
  const { total } = useCart();

  const steps = [
    { icon: Mail, label: 'Підтвердження', description: 'Надіслано на пошту' },
    { icon: Package, label: 'Обробка', description: 'Протягом 24 годин' },
    { icon: Truck, label: 'Доставка', description: '2-5 робочих днів' },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {/* Success Animation */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 dark:from-emerald-900/40 dark:to-teal-900/40 rounded-full blur-2xl opacity-60 animate-pulse" />
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 flex items-center justify-center animate-scale-in shadow-lg">
          <CheckCircle className="w-14 h-14 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-3">
        Дякуємо за замовлення!
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
        Ваше замовлення успішно оформлено. Ми надіслали підтвердження на вашу електронну пошту.
      </p>

      {/* Order Details Card */}
      <div className="bg-gradient-to-br from-card to-muted/30 rounded-2xl border border-border/50 p-8 mb-10 w-full max-w-md shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Деталі замовлення</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Номер замовлення</span>
            <span className="font-mono text-sm font-semibold bg-muted/50 px-3 py-1.5 rounded-lg">{orderNumber}</span>
          </div>
          <div className="h-px bg-border/50" />
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Сума до сплати</span>
            <span className="text-xl font-semibold">{total.toLocaleString()} ₴</span>
          </div>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="w-full max-w-lg mb-12">
        <div className="flex items-center justify-between relative">
          {/* Connection Line */}
          <div className="absolute top-6 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-300 to-muted dark:from-emerald-800 dark:via-emerald-700 dark:to-muted" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center z-10">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all ${
                index === 0 
                  ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 ring-4 ring-emerald-50 dark:ring-emerald-900/30' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <step.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium mb-1">{step.label}</span>
              <span className="text-xs text-muted-foreground">{step.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Button asChild variant="outline" className="flex-1 h-12 rounded-xl border-border/50 hover:bg-muted/50">
          <Link to="/">
            На головну
          </Link>
        </Button>
        <Button asChild className="flex-1 h-12 rounded-xl bg-foreground text-background hover:bg-foreground/90">
          <Link to="/">
            Продовжити покупки
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>

      {/* Divider */}
      <div className="w-full max-w-4xl my-16">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <Heart className="w-4 h-4 text-muted-foreground/50" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>

      {/* Recommended Products */}
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-light tracking-tight mb-2">Вам може сподобатись</h2>
        <p className="text-sm text-muted-foreground mb-8">Обрані спеціально для вас</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" variant="secondary" className="w-full text-xs h-8 rounded-lg bg-background/90 backdrop-blur-sm">
                    Переглянути
                  </Button>
                </div>
              </div>
              <p className="text-sm font-medium truncate group-hover:text-foreground/80 transition-colors">Рекомендований товар</p>
              <p className="text-sm text-muted-foreground mt-1">1 299 ₴</p>
            </div>
          ))}
        </div>
      </div>

      {/* Thank You Note */}
      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          Дякуємо, що обрали <span className="font-semibold text-foreground">VVLEN</span>
        </p>
      </div>
    </div>
  );
}
