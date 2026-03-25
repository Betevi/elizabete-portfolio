import { ExternalLink, Github } from 'lucide-react';



export default function Projects() {
  const projects = [
    
    {
      title: 'Brascema',
      description: 'Biblioteca online de obras acadêmicas, projeto desenvolvido durante semana de Hackaton',
      tags: ['React','Node.js', 'MySQL'],
      link: 'https://betevi.github.io/Brascema---Hackaton/',
      github: 'https://github.com/Betevi',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663077346982/ERdP6weTWjrSF7qPmZatEk/projects-section-bg-DzMxgR8Tv4opneSSbAsvpw.webp)',
        }}
      />

      {/* Content */}
      <div className="container relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="inline-block w-1 h-12 bg-primary mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos Destacados
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 font-light max-w-2xl">
            Uma seleção dos meus trabalhos mais recentes, demonstrando minha 
            capacidade de criar soluções web modernas e escaláveis.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Ver Projeto
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground font-medium hover:text-foreground transition-colors"
                  >
                    GitHub
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground/70 mb-6">
            Quer ver mais projetos?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Entre em Contato
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
