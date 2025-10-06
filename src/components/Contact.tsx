import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Download,
  Send
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.intro')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div className="space-y-6">
            <Card className="bg-card/30 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:glow transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <Mail className="h-5 w-5 group-hover:glow transition-all duration-300" />
                  {t('contact.cards.email.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">kevin@mipigu.com</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2 border-accent/50 hover:bg-accent/10 hover:glow-purple transform hover:scale-105 transition-all duration-300"
                >
                  {t('contact.cards.email.button')}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  {t('contact.cards.phone.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+34 623 042 922</p>
                <Button variant="outline" size="sm" className="mt-2">
                  {t('contact.cards.phone.button')}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {t('contact.cards.location.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('contact.cards.location.place')}</p>
                <Badge variant="secondary" className="mt-2">
                  {t('contact.cards.location.remote')}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('contact.cards.social.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <Download className="mr-2 h-4 w-4" />
                  {t('contact.cards.social.cv')}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:glow transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                  {t('contact.form.title')}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {t('contact.form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.labels.name')}</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t('contact.form.placeholders.name')}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.labels.email')}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t('contact.form.placeholders.email')}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('contact.form.labels.subject')}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={t('contact.form.placeholders.subject')}
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.labels.message')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t('contact.form.placeholders.message')}
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}