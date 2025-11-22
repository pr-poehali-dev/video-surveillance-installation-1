import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="https://wa.me/79658501441"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 whatsapp-pulse"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={32} />
      </a>
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">SecurePro</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex" asChild>
            <a href="tel:89658501441">
              <Icon name="Phone" size={18} className="mr-2" />
              8 (965) 850-14-41
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Профессиональные системы безопасности
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Монтаж видеонаблюдения, домофонов, интернета, СКУД и охранной сигнализации. Продажа оборудования от ведущих производителей.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base" asChild>
                  <a href="https://wa.me/79658501441" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp консультация
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <a href="tel:89658501441">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/26f65b1c-872a-4b41-a92b-2eb1777224fa/files/cb42b779-cc1f-41ab-b811-3d1928aef55e.jpg" 
                alt="Оборудование безопасности"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр решений для безопасности вашего объекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Video",
                title: "Видеонаблюдение",
                description: "IP и аналоговые системы любой сложности. Удаленный доступ и хранение записей.",
              },
              {
                icon: "Phone",
                title: "Домофоны",
                description: "Аудио и видеодомофоны для квартир, домов и бизнеса. Интеграция с мобильными устройствами.",
              },
              {
                icon: "Wifi",
                title: "Интернет",
                description: "Прокладка сетей, настройка оборудования. Стабильное соединение для всех устройств.",
              },
              {
                icon: "Lock",
                title: "СКУД",
                description: "Системы контроля доступа с картами, биометрией и удаленным управлением.",
              },
              {
                icon: "Bell",
                title: "Охранная сигнализация",
                description: "Защита от проникновения с датчиками движения и мгновенным оповещением.",
              },
              {
                icon: "ShoppingCart",
                title: "Продажа оборудования",
                description: "Сертифицированное оборудование от надежных производителей с гарантией.",
              },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/26f65b1c-872a-4b41-a92b-2eb1777224fa/files/3cc9849a-9977-4474-a9eb-7f629e669088.jpg" 
                alt="Монтаж систем безопасности"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Почему выбирают нас</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "CheckCircle2",
                    title: "Опытные специалисты",
                    description: "Сертифицированные инженеры с опытом работы более 10 лет",
                  },
                  {
                    icon: "Award",
                    title: "Гарантия качества",
                    description: "Официальная гарантия на оборудование и монтажные работы",
                  },
                  {
                    icon: "Clock",
                    title: "Быстрый монтаж",
                    description: "Установка системы за 1-3 дня в зависимости от сложности",
                  },
                  {
                    icon: "Headphones",
                    title: "Поддержка 24/7",
                    description: "Круглосуточная техническая поддержка и обслуживание",
                  },
                ].map((advantage, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={advantage.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/26f65b1c-872a-4b41-a92b-2eb1777224fa/files/cc905975-d532-4728-a7cd-42139b848c11.jpg" 
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы защитить свой объект?</h2>
            <p className="text-lg mb-8 opacity-90">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для бесплатной консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base" asChild>
                <a href="tel:89658501441">
                  <Icon name="Phone" size={20} className="mr-2" />
                  8 (965) 850-14-41
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">Свяжитесь с нами удобным способом</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Адрес</h3>
                <p className="text-muted-foreground text-sm">г. Москва, ул. Примерная, д. 1</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Телефон</h3>
                <a href="tel:89658501441" className="text-muted-foreground text-sm hover:text-primary transition-colors">8 (965) 850-14-41</a>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:video18izh@yandex.ru" className="text-muted-foreground text-sm hover:text-primary transition-colors">video18izh@yandex.ru</a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={24} />
              <span className="text-xl font-bold">SecurePro</span>
            </div>
            <p className="text-sm opacity-80">© 2024 SecurePro. Все права защищены</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-background/10">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10" asChild>
                <a href="https://wa.me/79658501441" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;