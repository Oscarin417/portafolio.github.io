import { info } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-6 bg-grid">
      <div className="container px-4 text-center">
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-purple">{'//'} Hecho con </span>
          <span className="text-primary">❤</span>
          <span className="text-muted-foreground"> por </span>
          <span className="text-primary">{info.name}</span>
        </div>
        <div className="font-mono text-xs text-muted-foreground/50 mt-2">
          © {new Date().getFullYear()} {info.name.split(" ")[0]}
        </div>
      </div>
    </footer>
  );
}