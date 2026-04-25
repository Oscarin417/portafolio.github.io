import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";

export function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="habilidades" className="py-16 md:py-24 bg-grid">
      <div className="container px-4">
        <div className="mb-6 font-mono text-sm">
          <span className="text-purple">{'//'} Habilidades</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-gradient">
          &lt;Habilidades /&gt;
        </h2>
        <div className="max-w-3xl">
          <div className="font-mono text-sm text-muted-foreground mb-6">
            <span className="text-purple">const</span>{" "}
            <span className="text-primary">techStack</span>{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-purple">[</span>
          </div>
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category} className="flex flex-col gap-3">
                <div className="font-mono text-sm">
                  <span className="text-primary">{category}</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-purple">[</span>
                </div>
                <div className="flex flex-wrap gap-2 ml-6">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <Badge 
                        key={skill.name} 
                        variant="secondary"
                        className="font-mono text-sm border-primary/30 hover:border-primary hover:glow-cyan-sm transition-all duration-300"
                      >
                        &#34;{skill.name}&#34;
                      </Badge>
                    ))}
                </div>
                <div className="font-mono text-sm text-purple ml-6">]</div>
              </div>
            ))}
          </div>
          <div className="font-mono text-sm text-purple mt-6">];</div>
        </div>
      </div>
    </section>
  );
}