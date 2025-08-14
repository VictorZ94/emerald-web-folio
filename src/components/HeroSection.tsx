import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
            <span className="text-sm text-muted-foreground">Disponible para proyectos</span>
          </div>
          
          {/* Name and title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-delayed-fade-in">
            Hola, soy{" "}
            <span className="gradient-text">Tu Nombre</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-8 animate-delayed-fade-in-2">
            Full Stack Web Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-delayed-fade-in-3">
            Especializado en crear experiencias web modernas y escalables usando{" "}
            <span className="text-primary font-medium">React</span>,{" "}
            <span className="text-primary font-medium">Next.js</span> y{" "}
            <span className="text-primary font-medium">TypeScript</span>. 
            Transformo ideas en soluciones digitales innovadoras.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold transition-smooth hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              Ver mis proyectos
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth hover:scale-105"
            >
              Descargar CV
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-6 animate-fade-in-up">
            <a 
              href="#" 
              className="p-3 rounded-full bg-card/50 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-smooth group hover:scale-110 hover:-translate-y-1"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-card/50 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-smooth group hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-card/50 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-smooth group hover:scale-110 hover:-translate-y-1"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;