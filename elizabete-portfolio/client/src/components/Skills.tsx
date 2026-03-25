/**
 * Skills Section - Minimalismo Moderno
 * Design Philosophy: Grid layout, subtle background, clear categorization
 * Background: Generated image with geometric pattern
 * Typography: Bold category titles, light descriptions
 */

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
    },

    {
      title: 'Ferramentas',
      skills: ['Git', 'Figma', 'Webpack'],
    },
    {
      title: 'Soft Skills',
      skills: ['Liderança', 'Comunicação', 'Problem Solving', 'Colaboração'],
    },
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663077346982/ERdP6weTWjrSF7qPmZatEk/skills-section-bg-7e2jkb3jT53h3WGRS3QnXm.webp)',
        }}
      />

      {/* Content */}
      <div className="container relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="inline-block w-1 h-12 bg-primary mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Habilidades
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 font-light max-w-2xl">
            Ao longo dos anos, desenvolvi uma ampla gama de habilidades técnicas 
            e soft skills que me permitem criar soluções eficazes e colaborar 
            eficientemente com equipes.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-white/80 backdrop-blur-sm border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary group-hover:h-10 transition-all duration-300" />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-bold text-foreground">Proficiência</h3>
          {[
            { name: 'React & TypeScript', level: 95 },
            { name: 'Design Responsivo', level: 90 },
            { name: 'Backend Development', level: 85 },
            { name: 'UI/UX Design', level: 80 },
          ].map((item) => (
            <div key={item.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="text-sm text-muted-foreground">{item.level}%</span>
              </div>
              <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
