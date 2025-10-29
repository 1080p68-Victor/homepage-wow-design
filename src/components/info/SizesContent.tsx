import { Card } from "@/components/ui/card";

export const SizesContent = () => {
  return (
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
  );
};
