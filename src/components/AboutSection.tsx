import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Users } from "lucide-react";

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: [
    "Node.js",
    "Express",
    "Nest.js",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ],
  tools: ["Docker", "AWS", "GCP", "Vercel", "Git", "Jest", "Cypress"],
  mobile: ["React Native", "Expo"],
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desarrollador apasionado por crear soluciones innovadoras y
            escalables que impactan positivamente en la experiencia del usuario.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Personal info and photo */}
            <div className="lg:col-span-1">
              <Card className="glass-effect p-6 text-center animate-slide-in-left">
                {/* Avatar placeholder */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-4 border-primary/20">
                  <div className="text-6xl text-primary/50">👨‍💻</div>
                </div>

                <h3 className="text-2xl font-bold mb-2">Víctor Zuluaga</h3>
                <p className="text-primary font-medium mb-4">
                  Full Stack Developer
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Con más de 5 años de experiencia en desarrollo web, me
                  especializo en crear aplicaciones modernas, escalables y
                  centradas en el usuario.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Proyectos
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">
                      Años exp.
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 animate-slide-in-right">
              <Card className="glass-effect h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Mi Historia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Comencé mi carrera en desarrollo web hace más de 5 años,
                    motivado por la fascinación de convertir ideas creativas en
                    soluciones digitales funcionales. Desde entonces, he
                    trabajado en proyectos diversos, desde startups emergentes
                    hasta empresas consolidadas.
                  </p>
                  <p>
                    Me especializo en el ecosistema de JavaScript moderno, con
                    un enfoque particular en React, Next.js y TypeScript.
                    También tengo experiencia sólida en backend con Node.js y
                    bases de datos tanto relacionales como NoSQL.
                  </p>
                  <p>
                    Cuando no estoy programando, disfruto contribuyendo a
                    proyectos open source, escribiendo artículos técnicos y
                    manteniéndome al día con las últimas tendencias en
                    desarrollo web.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className="glass-effect hover:shadow-emerald transition-smooth hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-primary" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="glass-effect hover:shadow-emerald transition-smooth hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Database className="h-5 w-5 text-primary" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="glass-effect hover:shadow-emerald transition-smooth hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code className="h-5 w-5 text-primary" />
                  Herramientas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="glass-effect hover:shadow-emerald transition-smooth hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Mobile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.mobile.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
