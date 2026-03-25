import { ArrowRight } from 'lucide-react';


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663077346982/ERdP6weTWjrSF7qPmZatEk/hero-background-nc8jQbpXQxcM4KSZG6c9U5.webp)',
        }}
      />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="container relative z-10 max-w-4xl">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Olá, sou <span className="text-primary">Elizabete</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-light">
              Desenvolvedora full-stack apaixonada por criar experiências web incríveis, 
              com foco em design moderno e código limpo.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Ver Projetos
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Entrar em Contato
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Scroll para explorar</span>
              <div className="w-1 h-6 border-l-2 border-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
