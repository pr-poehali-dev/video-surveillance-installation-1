import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={32} className="text-primary" />
            <span className="text-xl font-bold">SecureGuard</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#equipment" className="hover:text-primary transition-colors">
              Оборудование
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#contacts" className="hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Консультация
          </Button>
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              Системы безопасности под ключ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональный монтаж видеонаблюдения, домофонов, СКУД и охранных систем
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наше оборудование
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Работаем только с проверенными брендами
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Camera",
                title: "Видеонаблюдение",
                desc: "IP-камеры, аналоговые системы, облачное хранение",
                color: "text-primary"
              },
              {
                icon: "DoorOpen",
                title: "Домофоны",
                desc: "Видеодомофоны, переговорные устройства, IP-домофония",
                color: "text-accent"
              },
              {
                icon: "KeyRound",
                title: "СКУД",
                desc: "Контроль доступа, биометрия, электронные замки",
                color: "text-primary"
              },
              {
                icon: "Bell",
                title: "Сигнализация",
                desc: "Охранные системы, датчики движения, GSM-модули",
                color: "text-accent"
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:scale-105 transition-all duration-300 bg-card border-border hover:border-primary/50 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={item.icon} size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Реализованные проекты
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Более 500 успешно завершенных объектов
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "https://cdn.poehali.dev/projects/26f65b1c-872a-4b41-a92b-2eb1777224fa/files/a125508e-a91e-459e-9c00-752a52d1f1da.jpg",
                title: "Бизнес-центр «Технопарк»",
                desc: "32 IP-камеры, система распознавания лиц"
              },
              {
                image: "https://cdn.poehali.dev/projects/26f65b1c-872a-4b41-a92b-2eb1777224fa/files/4a389b0c-ee1e-4521-b10d-ec7467e843b2.jpg",
                title: "ЖК «Современник»",
                desc: "Видеодомофония на 120 квартир, СКУД"
              },
              {
                image: "https://cdn.poehali.dev/projects/26f65b1c-872a-4b41-a92b-2eb1777224fa/files/38116c5c-5d90-4b36-858b-a75e5a2e3b3d.jpg",
                title: "Торговый центр «Галерея»",
                desc: "Комплексная система безопасности"
              }
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Бесплатная консультация и выезд специалиста
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:border-primary/50 transition-colors">
              <Icon name="Phone" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-muted-foreground mb-2">+7 (495) 123-45-67</p>
              <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
            </Card>
            
            <Card className="p-6 hover:border-primary/50 transition-colors">
              <Icon name="Mail" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-2">info@secureguard.ru</p>
              <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
            </Card>
            
            <Card className="p-6 hover:border-primary/50 transition-colors">
              <Icon name="MapPin" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Офис</h3>
              <p className="text-muted-foreground mb-2">г. Москва, ул. Примерная, д. 10</p>
              <p className="text-sm text-muted-foreground">Пн-Пт: 9:00-18:00</p>
            </Card>
            
            <Card className="p-6 hover:border-primary/50 transition-colors">
              <Icon name="Clock" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">График работы</h3>
              <p className="text-muted-foreground mb-2">Круглосуточная поддержка</p>
              <p className="text-sm text-muted-foreground">Аварийная служба 24/7</p>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Оставьте заявку</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <textarea
                  placeholder="Опишите ваш проект"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary/30 border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2024 SecureGuard. Все права защищены.</p>
          <p className="text-sm">Профессиональный монтаж систем безопасности</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
