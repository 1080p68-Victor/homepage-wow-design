import { Mail, Sparkles, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SubscriptionSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubscriptionSuccessModal({ open, onOpenChange }: SubscriptionSuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden border-0">
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/30 px-6 pt-10 pb-8">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4">
            <Sparkles className="h-5 w-5 text-primary/40 animate-pulse" />
          </div>
          <div className="absolute top-8 left-6">
            <Sparkles className="h-3 w-3 text-accent/50 animate-pulse delay-150" />
          </div>
          
          {/* Success icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-full p-4 shadow-lg">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 shadow-md">
                <CheckCircle2 className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          <DialogHeader className="text-center space-y-2">
            <DialogTitle className="text-2xl font-semibold text-foreground">
              Дякуємо за підписку!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              Ви успішно підписалися на нашу розсилку
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Instructions card */}
          <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-lg p-2 shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground text-sm">
                  Перевірте свою пошту
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ми надіслали вам лист з підтвердженням. Натисніть на посилання в листі, щоб активувати підписку.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground text-center">
              Не бачите листа? Перевірте папку «Спам» або «Промоакції»
            </p>
          </div>

          {/* Action button */}
          <Button 
            onClick={() => onOpenChange(false)}
            className="w-full h-12 text-base font-medium rounded-xl"
          >
            Зрозуміло
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
