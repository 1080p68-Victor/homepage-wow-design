import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/contexts/CartContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  compact?: boolean;
}

export function CartItemComponent({ item, onUpdateQuantity, onRemove, compact = false }: CartItemProps) {
  if (compact) {
    return (
      <div className="flex gap-3 py-3 border-b border-border last:border-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-20 object-cover rounded-md bg-muted"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium truncate">{item.title}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            {item.size} • {item.color}
          </p>
          <p className="text-xs text-muted-foreground">Кількість: {item.quantity}</p>
          <p className="text-sm font-semibold mt-1">{(item.price * item.quantity).toLocaleString()} ₴</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 py-6 border-b border-border last:border-0">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-32 sm:w-28 sm:h-36 object-cover rounded-lg bg-muted"
      />
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-medium text-sm sm:text-base truncate">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Розмір: {item.size} • Колір: {item.color}
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-destructive">
                <Trash2 className="w-4 h-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Видалити товар?</AlertDialogTitle>
                <AlertDialogDescription>
                  Ви впевнені, що хочете видалити "{item.title}" з кошика?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Скасувати</AlertDialogCancel>
                <AlertDialogAction onClick={() => onRemove(item.id)}>Видалити</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-center border border-border rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-r-none"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-l-none"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
          <p className="font-semibold">{(item.price * item.quantity).toLocaleString()} ₴</p>
        </div>
      </div>
    </div>
  );
}
