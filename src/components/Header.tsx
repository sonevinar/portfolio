import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-white/10 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">
            {t('brand')}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="relative hover:text-primary transition-all duration-300 hover:glow group"
            >
              {t('nav.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="relative hover:text-primary transition-all duration-300 hover:glow group"
            >
              {t('nav.portfolio')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="relative hover:text-primary transition-all duration-300 hover:glow group"
            >
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative hover:text-primary transition-all duration-300 hover:glow group"
            >
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Language switcher */}
            <div className="flex items-center gap-2 pl-4">
              <Button
                variant={i18n.language?.startsWith('es') ? 'default' : 'outline'}
                size="sm"
                onClick={() => i18n.changeLanguage('es')}
              >
                ES
              </Button>
              <Button
                variant={i18n.language?.startsWith('en') ? 'default' : 'outline'}
                size="sm"
                onClick={() => i18n.changeLanguage('en')}
              >
                EN
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left hover:text-primary transition-colors"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left hover:text-primary transition-colors"
              >
                {t('nav.portfolio')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-primary transition-colors"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-primary transition-colors"
              >
                {t('nav.contact')}
              </button>

              <div className="pt-2 flex gap-2">
                <Button
                  variant={i18n.language?.startsWith('es') ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => i18n.changeLanguage('es')}
                >
                  ES
                </Button>
                <Button
                  variant={i18n.language?.startsWith('en') ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => i18n.changeLanguage('en')}
                >
                  EN
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}