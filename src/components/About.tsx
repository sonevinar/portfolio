import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Lightbulb, Users, Target, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    titleKey: "about.values.userCentric.title",
    descriptionKey: "about.values.userCentric.desc"
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    titleKey: "about.values.innovation.title",
    descriptionKey: "about.values.innovation.desc"
  },
  {
    icon: <Target className="h-6 w-6" />,
    titleKey: "about.values.goalOriented.title",
    descriptionKey: "about.values.goalOriented.desc"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    titleKey: "about.values.rapidIteration.title",
    descriptionKey: "about.values.rapidIteration.desc"
  }
];

export function About() {
  const { t } = useTranslation();
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
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('about.intro')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t('about.story.title')}</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
              <p>{t('about.story.p3')}</p>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">{t('about.certs')}</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Google UX Design Certificate</Badge>
                <Badge variant="outline">Nielsen Norman Group UX</Badge>
                <Badge variant="outline">Design Systems Certification</Badge>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">{t('about.skillsTitle')}</h3>
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
          <h3 className="text-2xl font-semibold text-center mb-8">{t('about.principles')}</h3>
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
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{t(value.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {t(value.descriptionKey)}
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