import { Separator } from "@/components/ui/separator";
import { info } from "@/data/portfolio";

export function About() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-grid">
      <div className="container px-4">
        <div className="mb-6 font-mono text-sm">
          <span className="text-purple">{'//'} Sobre mí</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-gradient">
          &lt;Sobre mí /&gt;
        </h2>
        <div className="max-w-2xl">
          <div className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-purple">const</span>{" "}
            <span className="text-primary">bio</span>{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-purple">{`"`}</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {info.description}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Me especializo en el desarrollo de aplicaciones web y de escritorio, 
            con experiencia en el diseño e implementación de bases de datos. 
            Siempre estoy aprendiendo nuevas tecnologías como Next.js y NestJS 
            para expandir mis habilidades en el desarrollo full-stack.
          </p>
          <div className="font-mono text-sm text-muted-foreground mb-6">
            <span className="text-purple">{`"`}</span>
            <span className="text-muted-foreground">;</span>
          </div>
          <Separator className="my-6 border-primary/20" />
          <div className="flex gap-4">
            <span className="font-mono text-sm text-purple">links:</span>
            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-primary hover:text-cyan transition-colors"
            >
              GitHub
            </a>
            <a
              href={info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-primary hover:text-cyan transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}