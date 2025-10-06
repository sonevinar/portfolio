import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Heart, Linkedin, Github, Twitter, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Información personal */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('footer.bioTitle')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
            {t('footer.bio')}
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-blue-500/20 hover:glow transform hover:scale-110 transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-500/20 hover:glow transform hover:scale-110 transition-all duration-300">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-400/20 hover:glow transform hover:scale-110 transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-red-500/20 hover:glow-pink transform hover:scale-110 transition-all duration-300">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
          <h4 className="font-medium">{t('footer.quickLinks')}</h4>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
              {t('nav.portfolio')}
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
              {t('nav.about')}
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
              {t('nav.contact')}
              </button>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
          <h4 className="font-medium">{t('footer.services')}</h4>
            <div className="flex flex-col space-y-2 text-muted-foreground">
            {(t('footer.servicesList', { returnObjects: true }) as string[]).map((service, i) => (
              <span key={i}>{service}</span>
            ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
          <span>© {currentYear} Sonevinar. {t('footer.copyright.madeWith')}</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
          <span>{t('footer.copyright.and')}</span>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
            {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
            {t('footer.terms')}
            </a>
            <button 
              onClick={scrollToTop}
              className="hover:text-foreground transition-colors"
            >
            {t('footer.backToTop')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}