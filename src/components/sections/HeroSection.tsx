import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
  );
};
