import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

const projects = [
  {
    titleKey: "portfolio.projects.ecobank.title",
    descriptionKey: "portfolio.projects.ecobank.description",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5Mzg5MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tagsKey: "portfolio.projects.ecobank.tags",
    liveUrl: "#",
    caseStudyUrl: "#"
  },
  {
    titleKey: "portfolio.projects.healthcare.title",
    descriptionKey: "portfolio.projects.healthcare.description",
    image: "https://images.unsplash.com/photo-1657812159077-90649115008c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU5NDAwNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tagsKey: "portfolio.projects.healthcare.tags",
    liveUrl: "#",
    caseStudyUrl: "#"
  },
  {
    titleKey: "portfolio.projects.foodieshare.title",
    descriptionKey: "portfolio.projects.foodieshare.description",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1OTQxNTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tagsKey: "portfolio.projects.foodieshare.tags",
    liveUrl: "#",
    caseStudyUrl: "#"
  },
  {
    titleKey: "portfolio.projects.edulearn.title",
    descriptionKey: "portfolio.projects.edulearn.description",
    image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NTk0OTk0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tagsKey: "portfolio.projects.edulearn.tags",
    liveUrl: "#",
    caseStudyUrl: "#"
  }
];

export function Portfolio() {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('portfolio.intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:glow transform hover:scale-105">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{t(project.titleKey)}</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {t(project.descriptionKey)}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {(t(project.tagsKey, { returnObjects: true }) as string[]).map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-gradient-to-r from-primary/20 to-accent/20 border border-white/20 hover:glow-purple transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow transform hover:scale-105 transition-all duration-300"
                  >
                    {t('portfolio.buttons.caseStudy')}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent/50 hover:bg-accent/10 hover:glow-purple transform hover:scale-105 transition-all duration-300"
                  >
                    {t('portfolio.buttons.demo')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {t('portfolio.buttons.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
}