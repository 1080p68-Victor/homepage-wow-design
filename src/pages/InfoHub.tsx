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

const fetchInfoSections = async (): Promise<InfoSection[]> => {
  const response = await fetch(`${API_BASE}/info-sections?active=true`);
  if (!response.ok) throw new Error("Failed to fetch info sections");
  const data: ApiResponse = await response.json();
  return data.data || [];
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
  const { data: sections = [], isLoading, error } = useQuery({
    queryKey: ["infoSections"],
    queryFn: fetchInfoSections,
    staleTime: 60 * 1000, // 1 minute
    refetchOnWindowFocus: false,
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
            {isLoading && (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Завантаження...</p>
              </div>
            )}
            
            {error && (
              <div className="col-span-full text-center py-12">
                <p className="text-destructive">Помилка завантаження даних</p>
              </div>
            )}
            
            {!isLoading && !error && sections.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Розділи відсутні</p>
              </div>
            )}
            
            {!isLoading && sections.length > 0 && sections.map((section) => (
              <SectionCard key={section._id} section={section} />
            ))}
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
  const { data: title } = useQuery({
    queryKey: ["translation", section.titleKey],
    queryFn: () => fetchTranslation(section.titleKey),
    staleTime: 60 * 1000,
  });

  const { data: description } = useQuery({
    queryKey: ["translation", section.descriptionKey],
    queryFn: () => fetchTranslation(section.descriptionKey),
    staleTime: 60 * 1000,
  });

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
          {title || section.titleKey}
        </h3>
        
        <p className="text-muted-foreground mb-6 flex-grow">
          {description || section.descriptionKey}
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
