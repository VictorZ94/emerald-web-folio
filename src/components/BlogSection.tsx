import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "Optimizando Performance en React con Lazy Loading",
    excerpt: "Técnicas avanzadas para mejorar la velocidad de carga en aplicaciones React mediante lazy loading de componentes y code splitting.",
    category: "React",
    date: "2024-01-15",
    readTime: "8 min",
    featured: true
  },
  {
    id: 2,
    title: "Introducción a Prisma ORM: El futuro de las bases de datos",
    excerpt: "Exploración completa de Prisma ORM, desde la configuración inicial hasta queries avanzadas y migraciones automáticas.",
    category: "Backend",
    date: "2024-01-10",
    readTime: "12 min",
    featured: true
  },
  {
    id: 3,
    title: "Server Components en Next.js 14: Guía completa",
    excerpt: "Todo lo que necesitas saber sobre Server Components en Next.js 14, incluyendo mejores prácticas y casos de uso.",
    category: "Next.js",
    date: "2024-01-05",
    readTime: "15 min",
    featured: false
  },
  {
    id: 4,
    title: "Arquitectura Hexagonal en Node.js",
    excerpt: "Implementando Clean Architecture con Node.js para crear aplicaciones escalables y mantenibles.",
    category: "Arquitectura",
    date: "2023-12-28",
    readTime: "10 min",
    featured: false
  },
  {
    id: 5,
    title: "TypeScript Tips: Tipos Avanzados para Desarrolladores",
    excerpt: "Explorando tipos avanzados en TypeScript que harán tu código más seguro y expresivo.",
    category: "TypeScript",
    date: "2023-12-20",
    readTime: "6 min",
    featured: false
  }
];

const categories = ["Todos", "React", "Next.js", "TypeScript", "Backend", "Arquitectura"];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Blog <span className="gradient-text">Personal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comparto mis aprendizajes, experiencias y las últimas tendencias 
            en desarrollo web y tecnologías modernas.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              size="sm"
              className={
                category === "Todos"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-primary/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card 
              key={post.id} 
              className="group glass-effect hover:shadow-emerald transition-smooth cursor-pointer"
            >
              {/* Post image placeholder */}
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-primary/30 text-4xl font-mono">
                    {post.category}
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <Badge 
                  className="absolute top-4 left-4 bg-primary text-primary-foreground"
                >
                  {post.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-smooth" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent posts list */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Artículos Recientes</h3>
          <div className="space-y-4">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card 
                key={post.id} 
                className="group glass-effect hover:shadow-emerald transition-smooth cursor-pointer p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge 
                        variant="outline" 
                        className="border-primary/30 text-primary"
                      >
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                            day: 'numeric', 
                            month: 'short' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-smooth mb-2">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transform group-hover:translate-x-1 transition-smooth" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View all posts button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
          >
            Ver todos los artículos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;