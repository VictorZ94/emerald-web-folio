import { Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2022 - Presente",
    description: "Liderazgo técnico en proyectos de gran escala usando React, Next.js y arquitecturas cloud-native."
  },
  {
    title: "Frontend Developer",
    company: "Startup Innovadora",
    period: "2020 - 2022",
    description: "Desarrollo de interfaces modernas y responsivas, optimización de performance y experiencia de usuario."
  },
  {
    title: "Full Stack Developer",
    company: "Agencia Digital",
    period: "2018 - 2020",
    description: "Desarrollo completo de aplicaciones web desde el diseño hasta el despliegue en producción."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mi <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un recorrido profesional enfocado en el crecimiento constante y la creación 
            de soluciones tecnológicas de alto impacto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect hover:shadow-gold transition-smooth animate-slide-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="h-6 w-6 text-primary" />
                Trayectoria Profesional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 border-l-2 border-primary/30 last:border-l-0 hover:border-primary/60 transition-smooth group"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-smooth"></div>
                    <div className="mb-3">
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium text-lg">{exp.company}</p>
                      <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;