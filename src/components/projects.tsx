import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="proyectos" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="mb-6 font-mono text-sm">
          <span className="text-purple">{'//'} Proyectos</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-gradient">
          &lt;Proyectos /&gt;
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="flex flex-col border-primary/20 hover:border-primary/50 hover:glow-cyan-sm transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-mono text-base text-primary">
                    {project.title}
                  </CardTitle>
                </div>
                <Badge
                  variant={
                    project.status === "En desarrollo"
                      ? "secondary"
                      : project.status === "Colaboración"
                      ? "outline"
                      : "default"
                  }
                  className="font-mono text-xs w-fit"
                >
                  {project.status}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  <span className="text-purple">{'//'} </span>
                  <span>{project.description.substring(0, 50)}...</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-mono text-xs border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}