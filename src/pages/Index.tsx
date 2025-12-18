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
      image: "https://cdn.poehali.dev/files/2025-12-18_05-20-57.png",
      title: "Ты же тоже с волосами",
      views: "16 млн",
      category: "Развлекательный контент",
      platform: "YouTube Shorts"
    },
    {
      image: "https://cdn.poehali.dev/files/2025-12-18_05-21-55.png",
      title: "Томатный?",
      views: "11 млн",
      category: "Вирусный контент",
      platform: "YouTube Shorts"
    },
    {
      image: "https://cdn.poehali.dev/files/2025-12-18_05-21-11.png",
      title: "Делайте это и будете благодарить меня до конца жизни",
      views: "5,5 млн",
      category: "Экспертный контент",
      platform: "YouTube Shorts"
    },
    {
      image: "https://cdn.poehali.dev/files/2025-12-18_05-21-22.png",
      title: "Сможешь?",
      views: "10 млн",
      category: "Интерактивный контент",
      platform: "YouTube Shorts"
    },
    {
      image: "https://cdn.poehali.dev/files/2025-12-18_05-21-33.png",
      title: "За пятёрку я тебя сам пострижу",
      views: "3,9 млн",
      category: "Барбершоп",
      platform: "TikTok"
    },
    {
      image: "https://cdn.poehali.dev/files/2025-12-18_05-22-05.png",
      title: "Как прийти к счастью?",
      views: "990 тыс.",
      category: "Бизнес и коучинг",
      platform: "Instagram Reels"
    },
    {
      image: "https://cdn.poehali.dev/files/2025-12-18_05-21-44.png",
      title: "Российский клуб управленцев",
      views: "1,4 млн",
      category: "Бизнес",
      platform: "Instagram Reels"
    },
    {
      image: "https://cdn.poehali.dev/files/2025-12-18_05-22-15.png",
      title: "Безопасность в косметологии прежде всего",
      views: "811 тыс.",
      category: "Экспертиза",
      platform: "Instagram Reels"
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
              {["Главная", "Портфолио", "Примеры", "Кейсы", "О нас", "Контакты"].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(["hero", "portfolio", "examples", "cases", "about", "contacts"][idx])}
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

      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/fe7e43e7-22fd-427c-97c3-24fb8bd196ea/files/a2cbe415-a416-4ad4-aac3-d94734c53714.jpg" 
            alt="Reels Production" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">Reels-продакшен в Москве</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Съемка Reels под ключ в&nbsp;Москве
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Создаём вертикальные видео, которые набирают миллионы просмотров и превращают подписчиков в клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => window.open('https://t.me/brahman_sveta', '_blank')}>
                <Icon name="Send" size={20} className="mr-2" />
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" onClick={() => scrollToSection('portfolio')}>
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/50" />
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Результаты наших Reels</h2>
            <p className="text-xl text-muted-foreground">А ниже на сайте вы найдете и кейсы</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="group overflow-hidden bg-card hover:scale-105 transition-transform duration-300 cursor-pointer animate-scale-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="relative aspect-[9/16] overflow-hidden bg-secondary">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Eye" size={14} className="text-white" />
                      <span className="text-xs font-bold text-white">{item.views}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-xs text-white/70 mb-1">{item.platform}</div>
                    <h3 className="text-base font-bold text-white mb-1 line-clamp-2">{item.title}</h3>
                    <div className="text-xs text-primary font-medium">{item.category}</div>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon name="Play" size={32} className="text-white ml-1" />
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

      <section id="examples" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Примеры роликов</h2>
            <p className="text-xl text-muted-foreground">Работаем с различными нишами и создаём вирусный контент</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Медицина", icon: "Heart", link: "https://t.me/case_reels" },
              { title: "Приложения", icon: "Smartphone", link: "https://t.me/case_reels" },
              { title: "Бьюти", icon: "Sparkles", link: "https://t.me/case_reels" },
              { title: "Дизайн/ремонт", icon: "Home", link: "https://t.me/case_reels" },
              { title: "Автомобили", icon: "Car", link: "https://t.me/case_reels" },
              { title: "Одежда/мода/фешн", icon: "Shirt", link: "https://t.me/case_reels" },
              { title: "Развлекательные", icon: "Play", link: "https://t.me/case_reels" },
              { title: "Инфобизнес/подкасты", icon: "Mic", link: "https://t.me/case_reels" },
              { title: "Экспертные", icon: "Award", link: "https://t.me/case_reels" }
            ].map((category, idx) => (
              <Card key={idx} className="p-6 bg-card hover:bg-secondary/50 transition-all duration-300 animate-scale-in group" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={category.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold flex-1">{category.title}</h3>
                </div>
                <a 
                  href={category.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Посмотреть в ТГ
                  <Icon name="ExternalLink" size={14} />
                </a>
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
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О продакшене</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/fe7e43e7-22fd-427c-97c3-24fb8bd196ea/files/286e280c-0ad0-48dd-a989-5718c20979ca.jpg" 
                alt="Команда продакшена" 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-semibold text-xl">
                Немного истории
              </p>
              <p>
                Более <span className="text-primary font-semibold">12 лет</span> наша команда занимается маркетингом. Изначально это были перфоманс инструменты (SEO, контекстная реклама, разработка сайтов). Мы привлекли более <span className="text-primary font-semibold">400.000 заявок</span> для бизнеса.
              </p>
              <p>
                В последние годы мы специализируемся на создании вертикальных видео (Reels, Shorts, TikTok), которые не просто красиво выглядят, но и работают на ваш бизнес. За последние 3 года наши клиенты набрали более <span className="text-primary font-semibold">150 миллионов просмотров</span>.
              </p>
              <p>
                Наш подход — это сочетание качественной картинки, цепляющей идеи и попадания в аудиторию.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены и тарифы</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий формат работы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Съемка и монтаж",
                price: "от 50 000 ₽",
                period: "за 10 роликов",
                features: [
                  "Анализируем нишу (аккаунты коллег и конкурентов)",
                  "Находим успешные идеи (темы, заходы) и придумываем новые на основании анализа и своего опыта",
                  "Пишем сценарии на согласованные идеи",
                  "Приезжаем с проф. оборудованием: камера, петлички, свет (если требуется)",
                  "Монтаж (динамичный, соответствующий трендам)",
                  "Согласование, корректировка",
                  "Отдаем пачку готовых роликов"
                ],
                icon: "Video"
              },
              {
                name: "ИИ-аватар",
                price: "от 50 000 ₽",
                period: "за 10 роликов",
                features: [
                  "Снимаем на проф. камеру 4-5 разных нейроаватаров (в разных локациях и одеждах) с 2х ракурсов",
                  "Создаем нейроаватара (далее он будет принадлежать вам)",
                  "Анализируем нишу (аккаунты коллег и конкурентов)",
                  "Находим успешные идеи и придумываем новые на основании анализа",
                  "Пишем сценарии на согласованные идеи",
                  "На основе аудиодорожек создаем видео с нейроаватаром (в 2х ракурсах)",
                  "Монтаж (динамичный, соответствующий трендам)",
                  "Согласование, корректировка и отдача готовых роликов"
                ],
                icon: "Sparkles"
              },
              {
                name: "Комплекс",
                price: "от 70 000 ₽",
                period: "под ключ",
                popular: true,
                features: [
                  "Продумываем стратегию",
                  "Анализируем нишу (аккаунты коллег и конкурентов)",
                  "Находим успешные идеи и придумываем новые на основании анализа и своего опыта",
                  "Пишем сценарии на согласованные идеи",
                  "Приезжаем с проф. оборудованием: камера, петлички, свет и снимаем по сценариям",
                  "Монтаж (динамичный, соответствующий трендам)",
                  "Согласование, корректировка",
                  "Выкладка во все соцсети"
                ],
                icon: "Crown"
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`p-8 relative overflow-hidden animate-scale-in ${plan.popular ? 'border-2 border-primary shadow-2xl scale-105' : 'bg-card'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    Популярный
                  </div>
                )}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={plan.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-1">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} onClick={() => window.open('https://t.me/brahman_sveta', '_blank')}>
                  Заказать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы о съёмке Reels</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Сколько времени занимает производство одного Reels?",
                a: "От 3 до 7 рабочих дней в зависимости от сложности проекта. Срочные заказы — от 24 часов за дополнительную плату."
              },
              {
                q: "Работаете ли вы с брендами из других городов?",
                a: "Да, основная съёмка проходит в Москве, но мы готовы выехать в другие города. Также работаем удалённо — вы присылаете материалы, мы создаём сценарий и монтируем."
              },
              {
                q: "Что входит в стоимость съёмки Reels под ключ?",
                a: "Полный цикл: анализ ниши, разработка концепции, сценарий, съёмка, монтаж, цветокоррекция, звук, спецэффекты, адаптация под платформы."
              },
              {
                q: "Гарантируете ли вы вирусность роликов?",
                a: "Мы используем проверенные методы и знание алгоритмов, но итоговый охват зависит от многих факторов. В портфолио — более 150 млн просмотров у наших клиентов."
              },
              {
                q: "Можно ли заказать только монтаж без съёмки?",
                a: "Да, если у вас есть отснятый материал, мы можем сделать только монтаж, цветокоррекцию и адаптацию. Стоимость рассчитывается индивидуально."
              },
              {
                q: "Какое оборудование вы используете?",
                a: "Профессиональные камеры Sony/Canon, стабилизаторы, студийный свет, микрофоны Rode. Вся техника обновляется ежегодно."
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 bg-card animate-scale-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4">{item.q}</h3>
                    <Icon name="ChevronDown" size={20} className="text-primary group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
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

      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold text-foreground mb-6">Съёмка Reels под ключ в Москве — профессиональный Reels-продакшен</h2>
            
            <p className="leading-relaxed mb-6">
              <strong className="text-foreground">Съёмка Reels в Москве</strong> от команды Андрея Кожевникова — это полный цикл производства вертикального контента, который работает на ваш бизнес. 
              Мы специализируемся на создании вирусных роликов для Instagram, TikTok и YouTube Shorts, которые набирают миллионы просмотров и привлекают реальных клиентов.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Почему выбирают нашу съёмку Reels под ключ</h3>
            
            <p className="leading-relaxed mb-4">
              <strong className="text-foreground">Reels-продакшен</strong> — это не просто съёмка видео. Это комплексный подход к созданию контента, который учитывает все особенности современных социальных сетей:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-foreground">Анализ трендов и алгоритмов</strong> — мы ежедневно отслеживаем, что работает в вашей нише, и адаптируем это под ваш бренд</li>
              <li><strong className="text-foreground">Киноматографичная картинка</strong> — профессиональное оборудование, свет и цветокоррекция выделяют ваш контент среди миллионов роликов</li>
              <li><strong className="text-foreground">Проверенные сценарии</strong> — каждый ролик строится по формулам вирусности: хук в первые 3 секунды, эмоциональная связь, призыв к действию</li>
              <li><strong className="text-foreground">Опыт в разных нишах</strong> — работали с ювелирными брендами, ресторанами, косметологами, барбершопами, образовательными проектами</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4">Что включает съёмка Reels под ключ</h3>

            <p className="leading-relaxed mb-4">
              Когда вы заказываете <strong className="text-foreground">съёмку Reels в Москве</strong> у нас, вы получаете полный спектр услуг:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong className="text-foreground">Предпродакшен</strong> — анализ вашей ниши, разработка концепции, написание сценариев, подбор локаций и реквизита</li>
              <li><strong className="text-foreground">Продакшен</strong> — профессиональная съёмка на камеры Sony/Canon со стабилизацией, студийный свет, запись качественного звука</li>
              <li><strong className="text-foreground">Постпродакшен</strong> — монтаж, цветокоррекция, звуковой дизайн, спецэффекты, адаптация под форматы всех платформ</li>
              <li><strong className="text-foreground">Аналитика</strong> — отслеживание метрик и применение выводов для улучшения следующих роликов</li>
            </ol>

            <h3 className="text-2xl font-bold text-foreground mb-4">Результаты нашего Reels-продакшена</h3>

            <p className="leading-relaxed mb-4">
              За 3 года работы наши клиенты набрали более <strong className="text-foreground">150 миллионов просмотров</strong>. В портфолио:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>YouTube-канал 2BRO — 111 миллионов просмотров, рекордный ролик на 16 млн</li>
              <li>Научный подкаст Антонины Горской — стабильные 679 тысяч просмотров в узкой нише</li>
              <li>Барбершоп на TikTok — 5,9 млн просмотров на нулевом аккаунте за 9 роликов</li>
              <li>Бизнес-коуч — рекордный ролик с охватом 1,1 млн на Instagram*</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4">Для кого подходит съёмка Reels в Москве</h3>

            <p className="leading-relaxed mb-6">
              Наш <strong className="text-foreground">Reels-продакшен</strong> работает для бизнеса любого масштаба:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Локальный бизнес:</h4>
                <p className="text-sm">Рестораны, барбершопы, салоны красоты, фитнес-клубы — привлекаем клиентов из вашего района</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Эксперты и блогеры:</h4>
                <p className="text-sm">Косметологи, психологи, бизнес-коучи — упаковываем экспертность в вирусный формат</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">E-commerce:</h4>
                <p className="text-sm">Ювелирные бренды, fashion-бутики, товары для дома — показываем продукт так, что его хотят купить</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Корпоративный сектор:</h4>
                <p className="text-sm">Крупные компании и сети — создаём контент для HR-бренда и продвижения услуг</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">Почему Москва — лучшее место для съёмки Reels</h3>

            <p className="leading-relaxed mb-6">
              <strong className="text-foreground">Съёмка Reels в Москве</strong> даёт уникальные возможности: доступ к топовым локациям (от исторического центра до современных бизнес-центров), 
              профессиональные съёмочные павильоны, большой выбор актёров и моделей, передовое оборудование. Москва — это концентрация креативных специалистов и трендсеттеров, 
              что позволяет создавать контент мирового уровня.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
              <p className="text-base font-medium text-foreground">
                💡 Начните с бесплатной консультации: расскажите о своём проекте в Telegram, и мы предложим концепцию первого вирусного ролика
              </p>
            </div>

            <p className="text-sm text-muted-foreground italic">
              *Instagram — продукт Meta, признанной экстремистской организацией в РФ
            </p>
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