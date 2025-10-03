import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Lightbulb, Users, Target, Zap } from "lucide-react";

const skills = [
  { name: "User Research", level: 95 },
  { name: "Prototyping", level: 90 },
  { name: "Design Systems", level: 85 },
  { name: "Figma", level: 95 },
  { name: "Adobe Creative Suite", level: 80 },
  { name: "HTML/CSS", level: 75 },
  { name: "User Testing", level: 90 },
];

const values = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Centrado en el Usuario",
    description: "Cada decisión de diseño se basa en las necesidades reales de los usuarios."
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovación",
    description: "Busco constantemente nuevas formas de resolver problemas complejos."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Orientado a Objetivos",
    description: "Diseño con propósito, siempre alineado con los objetivos del negocio."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Iteración Rápida",
    description: "Prototipo rápido, pruebo temprano y mejoro continuamente."
  }
];

export function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sobre mí
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Soy un diseñador UX/UI apasionada con más de 5 años de experiencia creando 
            experiencias digitales que marcan la diferencia. Mi enfoque combina investigación 
            profunda del usuario con diseño visual impactante y storytelling emocional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Mi Historia</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mi viaje en el diseño UX comenzó hace 5 años cuando me di cuenta de que 
                la tecnología más poderosa es aquella que las personas pueden usar 
                intuitivamente. Desde entonces, he trabajado con startups y empresas 
                establecidas para crear productos digitales que realmente importan.
              </p>
              <p>
                Mi enfoque se basa en la investigación profunda del usuario, la iteración 
                constante y la colaboración estrecha con equipos de desarrollo. Creo que 
                el mejor diseño es invisible: funciona tan bien que los usuarios ni 
                siquiera lo notan.
              </p>
              <p>
                Cuando no estoy diseñando, me encontrarás explorando nuevas metodologías 
                de UX, leyendo sobre psicología del comportamiento, o experimentando con 
                nuevas herramientas de prototipado.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Certificaciones</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Google UX Design Certificate</Badge>
                <Badge variant="outline">Nielsen Norman Group UX</Badge>
                <Badge variant="outline">Design Systems Certification</Badge>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3 group">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                    <span className="text-sm text-accent font-medium">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-white/10 group-hover:glow transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-pink-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Mis Principios de Diseño</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-2xl transition-all duration-500 bg-card/30 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:glow transform hover:scale-105 group"
              >
                <CardHeader className="pb-2">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary mb-4 group-hover:glow-purple transition-all duration-500 group-hover:scale-110">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}