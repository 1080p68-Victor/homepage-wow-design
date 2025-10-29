import { Card } from "@/components/ui/card";

export const ContactsContent = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="elegant-card">
        <h3 className="heading-medium mb-4">📞 Зв'яжіться з нами</h3>
        <div className="space-y-3 text-muted-foreground">
          <p><strong className="text-foreground">Телефон:</strong> +380 (67) 123-45-67</p>
          <p><strong className="text-foreground">Email:</strong> info@vvlen.com</p>
          <p><strong className="text-foreground">Viber/Telegram:</strong> +380 (67) 123-45-67</p>
        </div>
      </div>

      <div className="elegant-card">
        <h3 className="heading-medium mb-4">🕐 Час роботи</h3>
        <div className="space-y-2 text-muted-foreground">
          <p>Понеділок - П'ятниця: 9:00 - 18:00</p>
          <p>Субота: 10:00 - 16:00</p>
          <p>Неділя: Вихідний</p>
        </div>
      </div>

      <div className="elegant-card md:col-span-2">
        <h3 className="heading-medium mb-4">📍 Адреса шоу-руму</h3>
        <p className="text-muted-foreground mb-3">
          м. Київ, вул. Хрещатик, 1, офіс 101
        </p>
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Зверніть увагу:</strong> Відвідування шоу-руму за попереднім записом
        </p>
      </div>

      <div className="elegant-card md:col-span-2">
        <h3 className="heading-medium mb-4">💬 Соціальні мережі</h3>
        <div className="flex gap-4">
          <a href="#" className="elegant-button text-sm">Instagram</a>
          <a href="#" className="elegant-button text-sm">Facebook</a>
          <a href="#" className="elegant-button text-sm">TikTok</a>
          <a href="#" className="elegant-button text-sm">Pinterest</a>
        </div>
      </div>
    </div>
  );
};
