import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Package, CreditCard, RotateCcw, MapPin, Building2, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Info = () => {
  const [activeTab, setActiveTab] = useState("delivery");

  const sections = [
    { id: "delivery", label: "Доставка", icon: Package },
    { id: "payment", label: "Оплата", icon: CreditCard },
    { id: "returns", label: "Возвраты", icon: RotateCcw },
    { id: "contacts", label: "Контакты", icon: MapPin },
    { id: "about", label: "О фирме", icon: Building2 },
    { id: "sizes", label: "Выбор размера", icon: Ruler },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back to Home */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              VVLEN
            </Link>
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← На главную
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="heading-display mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Інформація
            </h1>
            <p className="text-muted-foreground text-lg">
              Все, що вам потрібно знати про VVLEN
            </p>
          </div>

          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-2 bg-muted/50 backdrop-blur-sm mb-8">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <TabsTrigger
                    key={section.id}
                    value={section.id}
                    className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary/20 data-[state=active]:to-accent/20 data-[state=active]:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs">{section.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Delivery */}
            <TabsContent value="delivery" className="animate-fade-in">
              <Card className="p-8 border-primary/20 bg-gradient-to-br from-background to-muted/30">
                <h2 className="heading-large mb-6 text-primary">Доставка</h2>
                
                <div className="space-y-6">
                  <div className="elegant-card">
                    <h3 className="heading-medium mb-3">🚚 Нова Пошта</h3>
                    <p className="text-muted-foreground mb-2">Доставка у відділення або поштомат</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Строк доставки: 1-3 робочих дні</li>
                      <li>Вартість: за тарифами перевізника</li>
                      <li>Безкоштовна доставка при замовленні від 3000 грн</li>
                    </ul>
                  </div>

                  <div className="elegant-card">
                    <h3 className="heading-medium mb-3">🏠 Кур'єрська доставка</h3>
                    <p className="text-muted-foreground mb-2">Доставка за адресою (Київ та область)</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Строк доставки: 1-2 робочих дні</li>
                      <li>Вартість: 150 грн</li>
                      <li>Безкоштовна доставка при замовленні від 5000 грн</li>
                    </ul>
                  </div>

                  <div className="elegant-card">
                    <h3 className="heading-medium mb-3">✈️ Міжнародна доставка</h3>
                    <p className="text-muted-foreground mb-2">Доставка у країни Європи та світу</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Строк доставки: 5-14 днів</li>
                      <li>Вартість розраховується індивідуально</li>
                      <li>Зв'яжіться з нами для уточнення деталей</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Payment */}
            <TabsContent value="payment" className="animate-fade-in">
              <Card className="p-8 border-primary/20 bg-gradient-to-br from-background to-muted/30">
                <h2 className="heading-large mb-6 text-primary">Оплата</h2>
                
                <div className="space-y-6">
                  <div className="elegant-card">
                    <h3 className="heading-medium mb-3">💳 Онлайн оплата</h3>
                    <p className="text-muted-foreground mb-2">Оплата банківською карткою</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Приймаємо Visa, Mastercard</li>
                      <li>Безпечна оплата через LiqPay</li>
                      <li>Миттєве підтвердження замовлення</li>
                    </ul>
                  </div>

                  <div className="elegant-card">
                    <h3 className="heading-medium mb-3">📦 Накладений платіж</h3>
                    <p className="text-muted-foreground mb-2">Оплата при отриманні товару</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Оплата готівкою або карткою у відділенні Нової Пошти</li>
                      <li>Комісія 20 грн + 2% від суми замовлення</li>
                      <li>Доступно лише для доставки по Україні</li>
                    </ul>
                  </div>

                  <div className="elegant-card">
                    <h3 className="heading-medium mb-3">🏦 Банківський переказ</h3>
                    <p className="text-muted-foreground mb-2">Оплата на розрахунковий рахунок</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Для юридичних осіб та ФОП</li>
                      <li>Виставляємо рахунок на оплату</li>
                      <li>Відправка після надходження коштів</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Returns */}
            <TabsContent value="returns" className="animate-fade-in">
              <Card className="p-8 border-primary/20 bg-gradient-to-br from-background to-muted/30">
                <h2 className="heading-large mb-6 text-primary">Повернення та обмін</h2>
                
                <div className="space-y-6">
                  <div className="elegant-card">
                    <h3 className="heading-medium mb-3">✓ Умови повернення</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Повернення протягом 14 днів з моменту отримання</li>
                      <li>Товар повинен бути у первинному вигляді з бирками</li>
                      <li>Збережені всі етикетки та упаковка</li>
                      <li>Відсутні сліди носіння та запахи</li>
                    </ul>
                  </div>

                  <div className="elegant-card">
                    <h3 className="heading-medium mb-3">🔄 Обмін товару</h3>
                    <p className="text-muted-foreground mb-2">Ви можете обміняти товар на:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Інший розмір або колір</li>
                      <li>Інший товар із асортименту</li>
                      <li>Обмін безкоштовний протягом 14 днів</li>
                    </ul>
                  </div>

                  <div className="elegant-card">
                    <h3 className="heading-medium mb-3">💰 Повернення коштів</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Кошти повертаються на картку протягом 5-10 робочих днів</li>
                      <li>Вартість доставки не повертається</li>
                      <li>Для повернення зв'яжіться з нами</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Важливо:</strong> Товар із категорії "Sale" поверненню не підлягає, лише обмін на інший розмір.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Contacts */}
            <TabsContent value="contacts" className="animate-fade-in">
              <Card className="p-8 border-primary/20 bg-gradient-to-br from-background to-muted/30">
                <h2 className="heading-large mb-6 text-primary">Контакти</h2>
                
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
              </Card>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="animate-fade-in">
              <Card className="p-8 border-primary/20 bg-gradient-to-br from-background to-muted/30">
                <h2 className="heading-large mb-6 text-primary">Про VVLEN</h2>
                
                <div className="space-y-6">
                  <div className="elegant-card">
                    <h3 className="heading-medium mb-4">✨ Наша історія</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      VVLEN — це український бренд жіночого одягу, створений у 2020 році. Ми віримо, що мода — це спосіб самовираження, 
                      тому створюємо колекції, які підкреслюють індивідуальність кожної жінки. Наша місія — робити якісний та стильний одяг 
                      доступним для кожної української жінки.
                    </p>
                  </div>

                  <div className="elegant-card">
                    <h3 className="heading-medium mb-4">🎯 Наші цінності</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold mb-2 text-primary">Якість</h4>
                        <p className="text-sm text-muted-foreground">
                          Використовуємо лише якісні тканини та фурнітуру
                        </p>
                      </div>
                      <div className="p-4 bg-accent/5 rounded-lg">
                        <h4 className="font-semibold mb-2 text-accent">Стиль</h4>
                        <p className="text-sm text-muted-foreground">
                          Актуальні тренди та унікальний дизайн
                        </p>
                      </div>
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold mb-2 text-primary">Комфорт</h4>
                        <p className="text-sm text-muted-foreground">
                          Зручний крій та приємні матеріали
                        </p>
                      </div>
                      <div className="p-4 bg-accent/5 rounded-lg">
                        <h4 className="font-semibold mb-2 text-accent">Підтримка</h4>
                        <p className="text-sm text-muted-foreground">
                          Виробництво в Україні, підтримка локального виробника
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="elegant-card">
                    <h3 className="heading-medium mb-4">🌟 Чому обирають нас?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Нові колекції кожного сезону</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Широкий розмірний ряд (XS-XXL)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Індивідуальний підхід до кожного клієнта</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Швидка доставка по всій Україні та за кордон</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Програма лояльності для постійних клієнтів</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Sizes */}
            <TabsContent value="sizes" className="animate-fade-in">
              <Card className="p-8 border-primary/20 bg-gradient-to-br from-background to-muted/30">
                <h2 className="heading-large mb-6 text-primary">Таблиця розмірів</h2>
                
                <div className="space-y-8">
                  <div className="elegant-card">
                    <h3 className="heading-medium mb-4">📏 Як правильно зняти мірки?</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Обхват грудей</h4>
                        <p className="text-sm text-muted-foreground">
                          Вимірюйте по найбільш виступаючих точках грудей, тримаючи стрічку горизонтально
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Обхват талії</h4>
                        <p className="text-sm text-muted-foreground">
                          Вимірюйте в найвужчій частині талії, зазвичай трохи вище пупка
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Обхват стегон</h4>
                        <p className="text-sm text-muted-foreground">
                          Вимірюйте по найбільш виступаючих точках сідниць
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Довжина рукава</h4>
                        <p className="text-sm text-muted-foreground">
                          Від плечового шва до зап'ястя по зовнішній стороні зігнутої руки
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-primary/20">
                          <th className="p-4 text-left text-primary">Розмір</th>
                          <th className="p-4 text-center text-primary">Обхват грудей (см)</th>
                          <th className="p-4 text-center text-primary">Обхват талії (см)</th>
                          <th className="p-4 text-center text-primary">Обхват стегон (см)</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-muted hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold">XS</td>
                          <td className="p-4 text-center">80-84</td>
                          <td className="p-4 text-center">60-64</td>
                          <td className="p-4 text-center">86-90</td>
                        </tr>
                        <tr className="border-b border-muted hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold">S</td>
                          <td className="p-4 text-center">84-88</td>
                          <td className="p-4 text-center">64-68</td>
                          <td className="p-4 text-center">90-94</td>
                        </tr>
                        <tr className="border-b border-muted hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold">M</td>
                          <td className="p-4 text-center">88-92</td>
                          <td className="p-4 text-center">68-72</td>
                          <td className="p-4 text-center">94-98</td>
                        </tr>
                        <tr className="border-b border-muted hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold">L</td>
                          <td className="p-4 text-center">92-96</td>
                          <td className="p-4 text-center">72-76</td>
                          <td className="p-4 text-center">98-102</td>
                        </tr>
                        <tr className="border-b border-muted hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold">XL</td>
                          <td className="p-4 text-center">96-100</td>
                          <td className="p-4 text-center">76-80</td>
                          <td className="p-4 text-center">102-106</td>
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold">XXL</td>
                          <td className="p-4 text-center">100-104</td>
                          <td className="p-4 text-center">80-84</td>
                          <td className="p-4 text-center">106-110</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2 text-primary">💡 Корисна порада</h4>
                    <p className="text-sm text-muted-foreground">
                      Якщо ваші мірки знаходяться між двома розмірами, рекомендуємо обрати більший розмір для більшого комфорту. 
                      У разі сумнівів щодо вибору розміру, зв'яжіться з нашими консультантами — ми з радістю допоможемо!
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Info;
