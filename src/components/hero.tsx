import { Button } from "@/components/ui/button";
import { info } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="flex-1 flex items-center justify-center py-24 md:py-32 bg-grid">
      <div className="container px-4 text-center">
        <div className="mb-4 font-mono text-sm text-muted-foreground">
          <span className="text-purple">const</span>{" "}
          <span className="text-primary">desarrollador</span>{" "}
          <span className="text-muted-foreground">=</span>{" "}
          <span className="text-purple">{'{'}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="text-gradient">{info.name}</span>
        </h1>
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="font-mono text-xl md:text-2xl text-primary">
            {info.title}
          </span>
          <span className="animate-cursor-blink font-mono text-xl md:text-2xl text-primary">|</span>
        </div>
        <p className="max-w-2xl mx-auto font-mono text-sm md:text-base text-muted-foreground mb-8">
          <span className="text-purple">console</span>.
          <span className="text-primary">log</span>
          <span className="text-muted-foreground">(</span>
          <span className="text-secondary-foreground">&#34;{info.description}&#34;</span>
          <span className="text-muted-foreground">)</span>
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="font-mono glow-cyan-sm hover:glow-cyan transition-all duration-300">
            <a href="#proyectos">Ver Proyectos</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-mono border-primary/50 hover:border-primary hover:glow-cyan-sm transition-all duration-300">
            <a href="#contacto">Contactar</a>
          </Button>
        </div>
      </div>
    </section>
  );
}