import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const services = [
    {
      icon: "Video",
      title: "Создание Reels",
      description: "Вертикальные видео для Instagram, TikTok и YouTube Shorts с киноматографичной картинкой"
    },
    {
      icon: "Sparkles",
      title: "Концепция и сценарий",
      description: "Разработка уникальной идеи, которая зацепит вашу аудиторию с первых секунд"
    },
    {
      icon: "Camera",
      title: "Съёмка и монтаж",
      description: "Профессиональное оборудование, цветокоррекция и эффекты премиум-класса"
    },
    {
      icon: "TrendingUp",
      title: "Продвижение контента",
      description: "Анализ трендов и адаптация контента под алгоритмы социальных сетей"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/fe7e43e7-22fd-427c-97c3-24fb8bd196ea/files/dd319b6f-084a-49a8-b930-043ee9663b34.jpg",
      title: "Премиум бренд",
      views: "2.5M"
    },
    {
      image: "https://cdn.poehali.dev/projects/fe7e43e7-22fd-427c-97c3-24fb8bd196ea/files/c13bb8a8-1105-4323-b419-44830fcec063.jpg",
      title: "Behind the scenes",
      views: "1.8M"
    },
    {
      image: "https://cdn.poehali.dev/projects/fe7e43e7-22fd-427c-97c3-24fb8bd196ea/files/13be16e2-0fc8-41d0-bd0c-42ac26396bec.jpg",
      title: "Lifestyle контент",
      views: "3.2M"
    }
  ];

  const cases = [
    {
      image: "https://cdn.poehali.dev/files/166229b9-924d-4290-8107-c04731323eb9.jpg",
      client: "2BRO",
      result: "111 955 202 просмотра",
      stats: "YouTube • 111 млн",
      handle: "@2BRO_SHOW",
      subscribers: "107 тыс. подписчиков",
      videos: "354 видео",
      description: "Развлекательный канал с нуля. Ежедневные Shorts. Рекордный – на 16 млн просмотров."
    },
    {
      image: "https://cdn.poehali.dev/files/f15a933c-77e3-47f3-9f97-9b91356b74cf.jpg",
      client: "Антонина Горская",
      result: "679 714 просмотров",
      stats: "YouTube • Узкая экспертная ниша",
      handle: "@collagen_podcast",
      subscribers: "3,33 тыс. подписчиков",
      videos: "386 видео",
      description: "Научный подкаст по косметологии. Регулярные выпуски + ежедневные Shorts."
    },
    {
      image: "https://cdn.poehali.dev/files/2f3b226b-7491-45d6-be7c-907a9a2ab4c5.jpg",
      client: "Рекордные просмотры",
      result: "Рекордные просмотры на 4х аккаунтах",
      stats: "Инст* и TikTok",
      highlights: ["991 тыс.", "1,1 млн", "811 тыс."],
      description: "Три ролика с рекордными охватами для разных брендов: бизнес-коучинг, кофейня, косметология."
    },
    {
      image: "https://cdn.poehali.dev/files/a97cbffd-3c65-47b4-908b-972cb4e6372c.jpg",
      client: "Нулевой TikTok-аккаунт",
      result: "5,9 млн просмотров",
      stats: "Барбершоп с нуля",
      highlights: ["1,7 млн", "4,2 млн"],
      description: "Аккаунт барбершопа, созданный с нуля. Выложено 9 роликов. 2 из них набрали 4,2млн и 1,7млн просмотров."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">AK Production</h1>
            <div className="hidden md:flex gap-8">
              {["Главная", "Портфолио", "Услуги", "Кейсы", "О нас", "Контакты"].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(["hero", "portfolio", "services", "cases", "about", "contacts"][idx])}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:flex">
              <Icon name="Send" size={16} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">Reels-продакшен в Москве</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Съемка Reels под ключ <br />
              <span className="text-primary">в Москве</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Создаём вертикальные видео, которые набирают миллионы просмотров и превращают подписчиков в клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => window.open('https://t.me/brahman_sveta', '_blank')}>
                <Icon name="Send" size={20} className="mr-2" />
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('portfolio')}>
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary/50" />
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Работы, которые говорят сами за себя</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="group overflow-hidden bg-card hover:scale-105 transition-transform duration-300 cursor-pointer animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Icon name="Eye" size={16} />
                      <span className="text-sm font-medium">{item.views} просмотров</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => window.open('https://t.me/case_reels', '_blank')}>
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Все работы в Telegram
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Полный цикл производства вертикального контента</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="p-8 bg-card hover:bg-secondary/50 transition-colors duration-300 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Кейсы</h2>
            <p className="text-xl text-muted-foreground">Результаты, которые вдохновляют</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="overflow-hidden bg-card animate-scale-in hover:scale-105 transition-all duration-300" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative overflow-hidden bg-secondary">
                  <img src={caseItem.image} alt={caseItem.client} className="w-full h-auto object-cover" />
                </div>
                <div className="p-8">
                  {caseItem.handle && (
                    <div className="text-sm text-muted-foreground mb-2">{caseItem.handle}</div>
                  )}
                  <h3 className="text-3xl font-bold mb-3">{caseItem.client}</h3>
                  {caseItem.subscribers && (
                    <div className="text-sm text-muted-foreground mb-4">
                      {caseItem.subscribers} • {caseItem.videos}
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    <div className="text-2xl font-bold text-primary">{caseItem.result}</div>
                  </div>
                  {caseItem.highlights && (
                    <div className="flex gap-3 mb-4">
                      {caseItem.highlights.map((highlight, i) => (
                        <div key={i} className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                          {highlight}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="text-xs text-primary font-medium mb-3">{caseItem.stats}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">8 шагов до результативных рилс</h2>
            <p className="text-xl text-muted-foreground">Наша проверенная система создания вирусного контента</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { num: "01", title: "Анализ ниши", desc: "Изучаем вашу аудиторию, конкурентов и актуальные тренды в вашей сфере" },
              { num: "02", title: "Разработка концепции", desc: "Создаём уникальную идею, которая зацепит зрителя с первых секунд" },
              { num: "03", title: "Написание сценария", desc: "Прописываем сюжет, диалоги и визуальный ряд с учётом алгоритмов" },
              { num: "04", title: "Подготовка к съёмке", desc: "Подбираем локации, реквизит, актёров и планируем съёмочный день" },
              { num: "05", title: "Съёмка материала", desc: "Снимаем на профессиональное оборудование с киноматографичной картинкой" },
              { num: "06", title: "Монтаж и эффекты", desc: "Собираем ролик, добавляем динамику, переходы и спецэффекты" },
              { num: "07", title: "Цветокоррекция", desc: "Создаём уникальную стилистику и настроение через цветокоррекцию" },
              { num: "08", title: "Оптимизация", desc: "Адаптируем под форматы и алгоритмы каждой платформы" }
            ].map((step, idx) => (
              <Card key={idx} className="p-6 bg-card hover:bg-secondary/50 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.num}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="niches" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Примеры роликов в разных нишах</h2>
            <p className="text-xl text-muted-foreground">Опыт работы с брендами из различных сфер</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Ювелирные бренды", desc: "Крупные планы украшений, процесс создания, истории камней", icon: "Gem" },
              { title: "Рестораны и кафе", desc: "Приготовление блюд, атмосфера заведения, шеф-повара", icon: "UtensilsCrossed" },
              { title: "Fashion и одежда", desc: "Показы коллекций, стилизации, закулисье модных съёмок", icon: "Shirt" },
              { title: "Косметология и бьюти", desc: "Процедуры, результаты до/после, экспертные советы", icon: "Sparkles" },
              { title: "Фитнес и спорт", desc: "Тренировки, трансформации клиентов, мотивационный контент", icon: "Dumbbell" },
              { title: "Недвижимость", desc: "Туры по объектам, обзоры локаций, советы по выбору", icon: "Home" },
              { title: "Образование", desc: "Полезные уроки, лайфхаки, разбор кейсов", icon: "GraduationCap" },
              { title: "Авто и мото", desc: "Тест-драйвы, обзоры, технические особенности", icon: "Car" },
              { title: "Развлечения", desc: "Челленджи, реакции, вирусные форматы", icon: "PartyPopper" }
            ].map((niche, idx) => (
              <Card key={idx} className="p-8 bg-card hover:bg-secondary/50 transition-all duration-300 cursor-pointer animate-scale-in group" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={niche.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{niche.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{niche.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы делаем для результата</h2>
            <p className="text-xl text-muted-foreground">Секреты миллионных просмотров</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "Target",
                title: "Попадаем в тренды",
                desc: "Ежедневно мониторим тренды и адаптируем их под ваш бренд, сохраняя уникальность"
              },
              {
                icon: "Zap",
                title: "Хук в первые 3 секунды",
                desc: "Цепляем внимание зрителя с первого кадра — это критично для алгоритмов"
              },
              {
                icon: "Film",
                title: "Киноматографичная картинка",
                desc: "Профессиональная камера, свет и цветокоррекция — ваш контент выделяется в ленте"
              },
              {
                icon: "Brain",
                title: "Знание алгоритмов",
                desc: "Понимаем, как работают рекомендации в каждой соцсети и оптимизируем под них"
              },
              {
                icon: "Users",
                title: "Эмоциональная связь",
                desc: "Создаём истории, которые вызывают эмоции и заставляют делиться"
              },
              {
                icon: "BarChart3",
                title: "Аналитика и улучшение",
                desc: "Отслеживаем метрики каждого ролика и применяем выводы в следующих проектах"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-card hover:bg-secondary/50 transition-colors duration-300 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О продакшене</h2>
          </div>
          <Card className="p-12 bg-card">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-primary font-semibold">Андрей Кожевников</span> — режиссёр и продюсер с 8-летним опытом в производстве вирусного контента для социальных сетей.
              </p>
              <p>
                Мы специализируемся на создании вертикальных видео (Reels, Shorts, Stories), которые не просто красиво выглядят, но и работают на ваш бизнес. За последние 3 года наши клиенты набрали более <span className="text-primary font-semibold">150 миллионов просмотров</span>.
              </p>
              <p>
                Наш подход — это сочетание киноматографичной картинки, точного попадания в тренды и глубокого понимания алгоритмов социальных сетей. Каждый проект для нас уникален, и мы создаём контент, который выделяется среди миллионов роликов.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы создать вирусный контент?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Напишите нам в Telegram, и мы обсудим ваш проект
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-10 py-6" onClick={() => window.open('https://t.me/brahman_sveta', '_blank')}>
                <Icon name="Send" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6" onClick={() => window.open('https://t.me/case_reels', '_blank')}>
                <Icon name="Tv" size={20} className="mr-2" />
                Наш канал
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>@brahman_sveta</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MessageCircle" size={16} />
                <span>@case_reels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Reels-продакшен Андрея Кожевникова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;