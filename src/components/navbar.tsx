"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { info } from "@/data/portfolio";

export function Navbar() {
  const navItems = [
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <Link href="#" className="font-mono font-semibold text-primary">
          {'<OSCAR />'}
        </Link>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button asChild size="sm" className="font-mono glow-cyan-sm hover:glow-cyan transition-all duration-300">
          <Link href={info.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Button>
      </div>
    </nav>
  );
}