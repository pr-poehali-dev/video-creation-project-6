import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
  lighting: string;
  style: string;
}

const photos: Photo[] = [
  {
    id: 1,
    url: "https://cdn.poehali.dev/projects/fb7518fe-0602-4d06-92a3-3ef3772b86a7/files/4dcfbe53-a436-4361-b242-a1f97c62ef98.jpg",
    title: "Естественный портрет",
    category: "Студия",
    lighting: "Дневной свет",
    style: "Минимализм"
  },
  {
    id: 2,
    url: "https://cdn.poehali.dev/projects/fb7518fe-0602-4d06-92a3-3ef3772b86a7/files/19a82470-8f60-4a09-805b-a687c687f7a5.jpg",
    title: "Динамика в кадре",
    category: "Студия",
    lighting: "Золотой час",
    style: "В движении"
  },
  {
    id: 3,
    url: "https://cdn.poehali.dev/projects/fb7518fe-0602-4d06-92a3-3ef3772b86a7/files/1fa9f64f-1c9e-4055-859b-c0555a28a56d.jpg",
    title: "Деловой портрет",
    category: "Студия",
    lighting: "Студийный свет",
    style: "С аксессуарами"
  },
  {
    id: 4,
    url: "https://cdn.poehali.dev/projects/fb7518fe-0602-4d06-92a3-3ef3772b86a7/files/9d86ebda-1da3-4fe0-9ddf-83fa53b72720.jpg",
    title: "Полный рост",
    category: "Студия",
    lighting: "Естественный свет",
    style: "С реквизитом"
  },
  {
    id: 5,
    url: "https://cdn.poehali.dev/projects/fb7518fe-0602-4d06-92a3-3ef3772b86a7/files/e55825ef-b8e0-4b96-81d5-782fac8d8fd2.jpg",
    title: "Крупный план",
    category: "Студия",
    lighting: "Оконный свет",
    style: "С аксессуарами"
  },
  {
    id: 6,
    url: "https://cdn.poehali.dev/projects/fb7518fe-0602-4d06-92a3-3ef3772b86a7/files/79b05b64-c821-45c4-87c4-6f1520606ac2.jpg",
    title: "Живая эмоция",
    category: "Студия",
    lighting: "Дневной свет",
    style: "В движении"
  }
];

export default function Index() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filter, setFilter] = useState<string>("Все");

  const categories = ["Все", "Минимализм", "В движении", "С аксессуарами", "С реквизитом"];

  const filteredPhotos = filter === "Все" 
    ? photos 
    : photos.filter(photo => photo.style === filter);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm fixed w-full top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-heading font-semibold tracking-tight">
            Sofia Mitchell
          </h1>
          <nav className="flex gap-8 items-center">
            <a href="#portfolio" className="text-sm font-body hover:text-accent transition-colors">
              Портфолио
            </a>
            <a href="#about" className="text-sm font-body hover:text-accent transition-colors">
              О модели
            </a>
            <a href="#contact" className="text-sm font-body hover:text-accent transition-colors">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h2 className="text-6xl font-heading font-light mb-6 tracking-tight">
              Профессиональная модель
            </h2>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              Естественная красота в каждом кадре. Специализация на студийной съемке 
              с натуральным освещением, минимальным макияжем и живыми эмоциями.
            </p>
          </div>

          <div className="flex gap-3 mb-12 flex-wrap animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-body transition-all ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-heading font-medium mb-2">
                        {photo.title}
                      </h3>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {photo.lighting}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {photo.style}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-muted/30 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-heading font-light mb-6">О модели</h2>
                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                  Опыт работы в модельном бизнесе более 5 лет. Специализация на 
                  fashion-съемках с акцентом на естественность и живые эмоции.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Camera" size={20} className="text-accent" />
                    <span className="font-body">Студийная и уличная съемка</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Sun" size={20} className="text-accent" />
                    <span className="font-body">Работа с естественным светом</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Sparkles" size={20} className="text-accent" />
                    <span className="font-body">Минимальный макияж, натуральность</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-6 border border-border">
                  <div className="text-4xl font-heading font-semibold mb-2">150+</div>
                  <div className="text-muted-foreground font-body">Проектов</div>
                </div>
                <div className="bg-background rounded-lg p-6 border border-border">
                  <div className="text-4xl font-heading font-semibold mb-2">50+</div>
                  <div className="text-muted-foreground font-body">Брендов</div>
                </div>
                <div className="bg-background rounded-lg p-6 border border-border">
                  <div className="text-4xl font-heading font-semibold mb-2">5</div>
                  <div className="text-muted-foreground font-body">Лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-heading font-light mb-6">Сотрудничество</h2>
            <p className="text-xl text-muted-foreground font-body mb-10 max-w-2xl mx-auto">
              Открыта для новых проектов и креативного сотрудничества с фотографами и брендами
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="mailto:sofia@example.com"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-body hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <Icon name="Mail" size={20} />
                Написать
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-border rounded-full font-body hover:bg-muted transition-colors inline-flex items-center gap-2"
              >
                <Icon name="Instagram" size={20} />
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {selectedPhoto && (
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[3/4] md:aspect-auto">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-heading font-semibold mb-4">
                  {selectedPhoto.title}
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground font-body mb-1">Категория</div>
                    <div className="font-body">{selectedPhoto.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-body mb-1">Освещение</div>
                    <div className="font-body">{selectedPhoto.lighting}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-body mb-1">Стиль</div>
                    <div className="font-body">{selectedPhoto.style}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{selectedPhoto.style}</Badge>
                  <Badge variant="outline">{selectedPhoto.lighting}</Badge>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border mt-24 py-12">
        <div className="container mx-auto px-6 text-center text-muted-foreground font-body text-sm">
          © 2024 Sofia Mitchell. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
