import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Palette } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit glow-purple border border-accent/30 bg-gradient-to-r from-primary/20 to-accent/20 text-inherit">
                <Sparkles className="w-3 h-3 mr-1" />
                Diseñador UX/UI
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Kevin
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed">
                Creo experiencias digitales 
                <span className="text-accent font-semibold"> mágicas </span>
                que conectan, inspiran y resuelven problemas reales a través del diseño.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/30 hover:glow transition-all duration-300">
                Research
              </Badge>
              <Badge variant="outline" className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 hover:glow-purple transition-all duration-300">
                Prototyping
              </Badge>
              <Badge variant="outline" className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30 hover:glow transition-all duration-300">
                Design Systems
              </Badge>
              <Badge variant="outline" className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30 hover:glow-pink transition-all duration-300">
                User Testing
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToPortfolio} 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow transform hover:scale-105 transition-all duration-300"
              >
                Ver mi trabajo
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent/50 hover:bg-accent/10 hover:glow-purple transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Button>
            </div>

            <div className="flex gap-4">
              <a variant="ghost" size="icon" className="hover:bg-blue-500/20 hover:glow transform hover:scale-110 transition-all duration-300" href="https://es.linkedin.com/in/sonevinar" target="_blank">
                <Linkedin className="h-5 w-5" />
              </a>
              <a variant="ghost" size="icon" className="hover:bg-gray-500/20 hover:glow transform hover:scale-110 transition-all duration-300" href="https://github.com/sonevinar" target="_blank">
                <Github className="h-5 w-5" />
              </a>
              <a variant="ghost" size="icon" className="hover:bg-red-500/20 hover:glow-pink transform hover:scale-110 transition-all duration-300" href="mailto:kevin@mipigu.com">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:flex justify-center">
            <div className="relative">
              {/* Main photo container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary via-accent to-pink-500 p-1 glow-purple pulse-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                  <ImageWithFallback
                    src="https://media.licdn.com/dms/image/v2/D4D03AQE8I1PHosWenw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708524647842?e=2147483647&v=beta&t=g24SUbZ--FqTDT2zmGUHV8rcWQKLpsrFRQEWOA6fOBI"
                    alt="Kevin Barros - Diseñadora UX"
                    className="w-72 h-72 rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Floating elements with animations */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-full flex items-center justify-center shadow-xl glow float-animation">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-accent to-pink-500 rounded-full flex items-center justify-center shadow-xl glow-pink float-animation" style={{animationDelay: '2s'}}>
                <Palette className="h-5 w-5 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full glow animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 -left-8 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full glow-pink animate-ping" style={{animationDelay: '3s'}}></div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                <div className="absolute -top-2 left-1/2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full glow"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}