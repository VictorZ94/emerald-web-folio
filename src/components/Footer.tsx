import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/tuusuario",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/tuusuario",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:tu.email@ejemplo.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contacto" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Víctor Zuluaga
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full Stack Developer especializado en crear experiencias web modernas 
              y escalables. Siempre explorando nuevas tecnologías y mejores prácticas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background/50 hover:bg-primary/10 transition-smooth group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>tu.email@ejemplo.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Tu Ciudad, País</p>
            </div>
            
            {/* Back to top button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="mt-4 border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Volver arriba
            </Button>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Victor Zuluaga. Todos los derechos reservados.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="h-4 w-4 text-red-400 fill-current" /> usando React y TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;