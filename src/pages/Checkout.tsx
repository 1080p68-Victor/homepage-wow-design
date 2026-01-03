import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CheckoutProgress } from '@/components/checkout/CheckoutProgress';
import { CartOverview } from '@/components/checkout/CartOverview';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { OrderReview } from '@/components/checkout/OrderReview';
import { OrderSuccess } from '@/components/checkout/OrderSuccess';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { useCart } from '@/contexts/CartContext';

const STEPS = ['Кошик', 'Оформлення', 'Перевірка', 'Готово'];

function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `VV-${timestamp}-${random}`;
}

interface CheckoutProps {
  initialStep?: number;
}

export default function Checkout({ initialStep = 1 }: CheckoutProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [orderNumber, setOrderNumber] = useState(initialStep === 4 ? 'VV-PREVIEW-001' : '');
  const [isLoading, setIsLoading] = useState(false);
  const { items, clearCart } = useCart();

  const handleConfirmOrder = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setCurrentStep(4);
    setIsLoading(false);
    // Don't clear cart immediately so success page can show total
    setTimeout(() => clearCart(), 100);
  };

  const showSidebar = currentStep < 4 && items.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Повернутися до магазину</span>
          </Link>
          <Link to="/" className="text-xl font-bold tracking-tight">
            VVLEN
          </Link>
          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Progress */}
      {currentStep < 4 && (
        <CheckoutProgress currentStep={currentStep} steps={STEPS} />
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className={`grid gap-8 ${showSidebar ? 'lg:grid-cols-3' : ''}`}>
          {/* Main Column */}
          <div className={showSidebar ? 'lg:col-span-2' : 'max-w-3xl mx-auto w-full'}>
            {currentStep === 1 && (
              <CartOverview onContinue={() => setCurrentStep(2)} />
            )}
            {currentStep === 2 && (
              <CheckoutForm
                onContinue={() => setCurrentStep(3)}
                onBack={() => setCurrentStep(1)}
              />
            )}
            {currentStep === 3 && (
              <OrderReview
                onConfirm={handleConfirmOrder}
                onBack={() => setCurrentStep(2)}
                isLoading={isLoading}
              />
            )}
            {currentStep === 4 && (
              <OrderSuccess orderNumber={orderNumber} />
            )}
          </div>

          {/* Sidebar - Order Summary */}
          {showSidebar && (
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <OrderSummary showItems={currentStep === 1} compact />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
