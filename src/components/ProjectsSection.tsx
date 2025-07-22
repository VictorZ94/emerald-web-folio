import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Panel de administración completo para tienda online con analíticas en tiempo real, gestión de productos y órdenes.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación colaborativa de gestión de tareas con funcionalidades de tiempo real y sincronización automática.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "API Gateway Microservices",
    description: "Arquitectura de microservicios escalable con gateway API, autenticación JWT y documentación automática.",
    image: "/api/placeholder/400/250",
    technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Real-time Chat Platform",
    description: "Plataforma de chat en tiempo real con salas privadas, compartir archivos y notificaciones push.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Firebase", "WebRTC", "PWA", "Material-UI"],
    demoUrl: "#",
    codeUrl: "#",
    featured: false
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes, desde aplicaciones web completas 
            hasta arquitecturas backend escalables.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className={`group glass-effect hover:shadow-emerald transition-smooth ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-primary/30 text-6xl font-mono">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge variant="outline" className="mt-2 border-primary/30 text-primary">
                        Destacado
                      </Badge>
                    )}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Código
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View all projects button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
          >
            Ver todos los proyectos
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;