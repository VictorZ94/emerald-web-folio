import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "example@email.com",
    href: "mailto:example@email.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(123) 456-7890",
    href: "tel:+11234567890"
  },
  {
    icon: MapPin,
    label: "Location", 
    value: "City, Country",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/tuusuario",
    label: "GitHub"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/tuusuario", 
    label: "Twitter"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/tuusuario",
    label: "LinkedIn"
  },
  {
    icon: MessageSquare,
    href: "https://wa.me/123456789",
    label: "WhatsApp"
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
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section header with decorative line */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary"></div>
            <h2 className="text-4xl md:text-5xl font-bold mx-8">
              Contact <span className="gradient-text">me</span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-in-up">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="glass-effect hover:shadow-gold transition-smooth hover:scale-105 bg-card/50 border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-primary font-medium text-lg mb-1">{info.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social links with decorative line */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent to-primary/50"></div>
              <div className="flex gap-4 mx-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-smooth hover:scale-110 hover:-translate-y-1"
                    title={social.label}
                  >
                    <social.icon className="h-5 w-5 text-primary" />
                  </a>
                ))}
              </div>
              <div className="w-32 h-px bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>

          {/* Thanks message */}
          <div className="text-center animate-fade-in-up">
            <p className="text-2xl font-medium gradient-text mb-8">
              "Thanks for Scrolling"
            </p>
          </div>

          {/* Contact form */}
          <Card className="glass-effect hover:shadow-gold transition-smooth animate-slide-in-up bg-card/30 border-primary/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nombre *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Asunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿De qué quieres hablar?"
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    rows={6}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold transition-smooth hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Mail className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;