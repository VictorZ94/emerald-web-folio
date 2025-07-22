import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tu.email@ejemplo.com",
    href: "mailto:tu.email@ejemplo.com"
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Tu Ciudad, País",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/tuusuario",
    color: "hover:text-gray-300"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/tuusuario",
    color: "hover:text-blue-400"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/tuusuario",
    color: "hover:text-blue-400"
  }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío de formulario
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarme. Te responderé pronto.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hablemos <span className="gradient-text">Juntos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? No dudes en contactarme. 
            Siempre estoy abierto a nuevas oportunidades y conversaciones interesantes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info and social */}
            <div className="space-y-8">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                  <CardDescription>
                    Puedes contactarme a través de cualquiera de estos medios
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-smooth group"
                    >
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-primary transition-smooth">
                          {info.label}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Social links */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Sígueme en Redes</CardTitle>
                  <CardDescription>
                    Conectemos en las redes sociales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-smooth group ${social.color}`}
                        title={social.label}
                      >
                        <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="glass-effect bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">¿Listo para trabajar juntos?</h3>
                  <p className="text-muted-foreground mb-4">
                    Transformemos tus ideas en soluciones digitales extraordinarias
                  </p>
                  <Button 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald transition-smooth"
                  >
                    Envíame un Email
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact form */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Envíame un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y te responderé lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="¿De qué quieres hablar?"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                      rows={6}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald transition-smooth"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;