import { Button } from "@/components/ui/button";
import { info } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="container px-4 text-center">
        <div className="mb-6 font-mono text-sm">
          <span className="text-purple">{'//'} Contacto</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-gradient">
          &lt;Contacto /&gt;
        </h2>
        <div className="font-mono text-sm text-muted-foreground mb-4">
          <span className="text-purple">const</span>{" "}
          <span className="text-primary">status</span>{" "}
          <span className="text-muted-foreground">=</span>{" "}
          <span className="text-purple">&#34;disponible&#34;</span>
          <span className="text-muted-foreground">;</span>
        </div>
        <p className="font-mono text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          <span className="text-purple">{'//'} </span>
          <span>¿Interesado en trabajar juntos? Contáctame a través de mis redes sociales.</span>
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild className="font-mono glow-cyan-sm hover:glow-cyan transition-all duration-300">
            <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="secondary" className="font-mono border-primary/50 hover:border-primary transition-all duration-300">
            <a href={info.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="font-mono border-purple/50 text-purple hover:border-purple hover:glow-cyan-sm transition-all duration-300">
            <a href={`mailto:${info.email}`}>Email</a>
          </Button>
        </div>
      </div>
    </section>
  );
}