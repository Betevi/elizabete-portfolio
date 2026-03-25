export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663077346982/ERdP6weTWjrSF7qPmZatEk/about-section-bg-hM3GcHNoRA72YM3tBAM6VZ.webp)',
        }}
      />

      {/* Content */}
      <div className="container relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <div className="inline-block w-1 h-12 bg-primary mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sobre Mim
              </h2>
            </div>

            <div className="space-y-4 text-foreground/80 font-light">
              <p className="text-lg leading-relaxed">
                Sou uma desenvolvedora em processo de habilitação técnica em desenvolvimento de sistemas
                criando soluções web inovadoras. Especializada em React, TypeScript e 
                design responsivo.
              </p>
              <p className="text-lg leading-relaxed">
                Minha paixão é transformar ideias em produtos digitais funcionais e 
                visualmente atraentes. Acredito que bom design e código limpo andam 
                de mãos dadas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <p className="text-sm text-muted-foreground">Projetos Completados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2+</div>
                <p className="text-sm text-muted-foreground">Anos de estudo</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-sm">
              {/* Decorative circles and shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              
              {/* Card */}
              <div className="relative bg-white border border-border rounded-lg p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="h-4 bg-primary/20 rounded w-3/4" />
                  <div className="h-4 bg-primary/20 rounded w-full" />
                  <div className="h-4 bg-primary/20 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
