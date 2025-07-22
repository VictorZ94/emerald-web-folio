import { GitBranch, GitCommit, Star, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GitHubStats = () => {
  // En un proyecto real, estos datos vendrían de la API de GitHub
  const stats = [
    {
      icon: GitCommit,
      label: "Commits este año",
      value: "1,247",
      color: "text-green-400"
    },
    {
      icon: GitBranch,
      label: "Repositorios públicos",
      value: "42",
      color: "text-blue-400"
    },
    {
      icon: Star,
      label: "Stars recibidas",
      value: "284",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      label: "Contribuciones",
      value: "156",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="github" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            GitHub <span className="gradient-text">Stats</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mi actividad en GitHub refleja mi constante aprendizaje y contribución 
            a la comunidad de desarrollo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="glass-effect hover:shadow-emerald transition-smooth text-center"
              >
                <CardContent className="pt-6">
                  <div className={`inline-flex p-3 rounded-full bg-background/50 mb-4 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub charts placeholders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contribution graph */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Actividad de Contribuciones</CardTitle>
                <CardDescription>
                  Commits en los últimos 12 meses
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Simulación del gráfico de contribuciones de GitHub */}
                <div className="space-y-2">
                  {Array.from({ length: 7 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex gap-1">
                      {Array.from({ length: 52 }).map((_, colIndex) => {
                        const intensity = Math.floor(Math.random() * 5);
                        const getColor = () => {
                          switch (intensity) {
                            case 0: return 'bg-muted/30';
                            case 1: return 'bg-primary/20';
                            case 2: return 'bg-primary/40';
                            case 3: return 'bg-primary/60';
                            case 4: return 'bg-primary/80';
                            default: return 'bg-primary';
                          }
                        };
                        
                        return (
                          <div
                            key={colIndex}
                            className={`w-3 h-3 rounded-sm ${getColor()}`}
                            title={`${intensity} contribuciones`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
                  <span>Menos</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-sm bg-muted/30"></div>
                    <div className="w-3 h-3 rounded-sm bg-primary/20"></div>
                    <div className="w-3 h-3 rounded-sm bg-primary/40"></div>
                    <div className="w-3 h-3 rounded-sm bg-primary/60"></div>
                    <div className="w-3 h-3 rounded-sm bg-primary"></div>
                  </div>
                  <span>Más</span>
                </div>
              </CardContent>
            </Card>

            {/* Language stats */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Lenguajes Más Usados</CardTitle>
                <CardDescription>
                  Distribución de lenguajes en repositorios públicos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'TypeScript', percentage: 35, color: 'bg-blue-500' },
                    { name: 'JavaScript', percentage: 28, color: 'bg-yellow-500' },
                    { name: 'Python', percentage: 15, color: 'bg-green-500' },
                    { name: 'CSS', percentage: 12, color: 'bg-purple-500' },
                    { name: 'HTML', percentage: 10, color: 'bg-orange-500' }
                  ].map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${lang.color}`}></div>
                          {lang.name}
                        </span>
                        <span className="text-muted-foreground">{lang.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${lang.color}`}
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* GitHub profile links */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex -space-x-1">
                {/* GitHub Readme Stats */}
                <div className="w-full max-w-md">
                  <img 
                    src="https://github-readme-stats.vercel.app/api?username=tuusuario&show_icons=true&theme=dark&hide_border=true&bg_color=1a1b23&title_color=00FFB2&icon_color=00FFB2&text_color=ffffff"
                    alt="GitHub Stats"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              
              <div className="w-full max-w-md">
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=tuusuario&theme=dark&hide_border=true&background=1a1b23&ring=00FFB2&fire=00FFB2&currStreakLabel=00FFB2"
                  alt="GitHub Streak"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              * Reemplaza "tuusuario" con tu username real de GitHub
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;