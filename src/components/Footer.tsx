import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Heart, Linkedin, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
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
              Kevin Barros
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Diseñador UX/UI apasionado por crear experiencias digitales 
              que conectan con las personas y transforman ideas en realidad.
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
            <h4 className="font-medium">Enlaces rápidos</h4>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Sobre mí
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="font-medium">Servicios</h4>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <span>Investigación UX</span>
              <span>Diseño UI</span>
              <span>Prototipado</span>
              <span>Testing de Usabilidad</span>
              <span>Design Systems</span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Sonevinar. Hecho con</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>y mucha ilusión.</span>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Términos de Uso
            </a>
            <button 
              onClick={scrollToTop}
              className="hover:text-foreground transition-colors"
            >
              Volver arriba ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}