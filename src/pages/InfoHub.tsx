import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

interface InfoSection {
  _id: string;
  slug: string;
  icon: string;
  order: number;
  color: string;
  url: string;
  titleKey: string;
  descriptionKey: string;
  seoTitleKey: string;
  title?: string;
  description?: string;
}

interface TranslationValues {
  ua: string;
  ru: string;
}

interface Translation {
  values: TranslationValues;
}

interface ApiResponse {
  success: boolean;
  data: InfoSection[];
}

interface TranslationResponse {
  data: Translation[];
}

const API_BASE = "http://158.220.113.112:5001/api";

// Fallback статичні дані
const FALLBACK_SECTIONS: InfoSection[] = [
  {
    _id: "delivery",
    slug: "delivery",
    icon: "📦",
    order: 1,
    color: "from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20",
    url: "/info/delivery",
    titleKey: "info_delivery_title",
    descriptionKey: "info_delivery_description",
    seoTitleKey: "info_delivery_seo_title",
    title: "Доставка",
    description: "Нова Пошта, кур'єр та міжнародна доставка"
  },
  {
    _id: "payment",
    slug: "payment",
    icon: "💳",
    order: 2,
    color: "from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20",
    url: "/info/payment",
    titleKey: "info_payment_title",
    descriptionKey: "info_payment_description",
    seoTitleKey: "info_payment_seo_title",
    title: "Оплата",
    description: "Онлайн, накладений платіж, банківський переказ"
  },
  {
    _id: "returns",
    slug: "returns",
    icon: "🔄",
    order: 3,
    color: "from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20",
    url: "/info/returns",
    titleKey: "info_returns_title",
    descriptionKey: "info_returns_description",
    seoTitleKey: "info_returns_seo_title",
    title: "Повернення",
    description: "Умови повернення та обміну товару"
  },
  {
    _id: "contacts",
    slug: "contacts",
    icon: "📍",
    order: 4,
    color: "from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20",
    url: "/info/contacts",
    titleKey: "info_contacts_title",
    descriptionKey: "info_contacts_description",
    seoTitleKey: "info_contacts_seo_title",
    title: "Контакти",
    description: "Телефон, email, соціальні мережі та адреса"
  },
  {
    _id: "about",
    slug: "about",
    icon: "🏢",
    order: 5,
    color: "from-pink-500/10 to-pink-600/10 hover:from-pink-500/20 hover:to-pink-600/20",
    url: "/info/about",
    titleKey: "info_about_title",
    descriptionKey: "info_about_description",
    seoTitleKey: "info_about_seo_title",
    title: "Про бренд",
    description: "Історія, цінності та переваги VVLEN"
  },
  {
    _id: "sizes",
    slug: "sizes",
    icon: "📏",
    order: 6,
    color: "from-cyan-500/10 to-cyan-600/10 hover:from-cyan-500/20 hover:to-cyan-600/20",
    url: "/info/sizes",
    titleKey: "info_sizes_title",
    descriptionKey: "info_sizes_description",
    seoTitleKey: "info_sizes_seo_title",
    title: "Розміри",
    description: "Таблиця розмірів та як зняти мірки"
  }
];

const fetchInfoSections = async (): Promise<InfoSection[]> => {
  try {
    const response = await fetch(`${API_BASE}/info-sections?active=true`);
    if (!response.ok) throw new Error("Failed to fetch info sections");
    const data: ApiResponse = await response.json();
    return data.data || FALLBACK_SECTIONS;
  } catch (error) {
    console.warn("API недоступний, використовуємо fallback дані:", error);
    return FALLBACK_SECTIONS;
  }
};

const fetchTranslation = async (key: string): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE}/translations?key=${key}`);
    if (!response.ok) return key;
    const data: TranslationResponse = await response.json();
    return data.data?.[0]?.values?.ua || key;
  } catch {
    return key;
  }
};

const InfoHub = () => {
  const { data: sections = FALLBACK_SECTIONS, isLoading } = useQuery({
    queryKey: ["infoSections"],
    queryFn: fetchInfoSections,
    staleTime: 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  useEffect(() => {
    document.title = "Інформація | VVLEN";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Доставка, оплата, повернення та інша корисна інформація про VVLEN");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Центр підтримки
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Все, що вам потрібно знати про роботу з VVLEN
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Завантаження...</p>
              </div>
            ) : sections.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Розділи відсутні</p>
              </div>
            ) : (
              sections.map((section) => (
                <SectionCard key={section._id} section={section} />
              ))
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Не знайшли відповідь?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Наша команда завжди готова допомогти вам. Зв'яжіться з нами будь-яким зручним способом.
            </p>
            <Link 
              to="/info/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Зв'язатися з нами
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const SectionCard = ({ section }: { section: InfoSection }) => {
  // Використовуємо переклади з API тільки якщо немає fallback значень
  const shouldFetchTitle = !section.title;
  const shouldFetchDescription = !section.description;

  const { data: titleFromApi } = useQuery({
    queryKey: ["translation", section.titleKey],
    queryFn: () => fetchTranslation(section.titleKey),
    staleTime: 60 * 1000,
    enabled: shouldFetchTitle,
    retry: 0,
  });

  const { data: descriptionFromApi } = useQuery({
    queryKey: ["translation", section.descriptionKey],
    queryFn: () => fetchTranslation(section.descriptionKey),
    staleTime: 60 * 1000,
    enabled: shouldFetchDescription,
    retry: 0,
  });

  const title = section.title || titleFromApi || section.titleKey;
  const description = section.description || descriptionFromApi || section.descriptionKey;

  return (
    <Link
      to={section.url}
      className={`group relative p-8 rounded-2xl bg-gradient-to-br ${section.color} border border-primary/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-primary/30`}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 bg-background/50 rounded-xl w-fit">
          <span className="text-4xl">{section.icon}</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
          <span>Детальніше</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default InfoHub;
