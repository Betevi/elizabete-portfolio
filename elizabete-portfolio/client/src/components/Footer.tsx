export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Elizabete</h3>
            <p className="text-white/70 font-light">
              Desenvolvedora criando experiências web incríveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Sobre', 'Habilidades', 'Projetos', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:elizabetesilvaoliveira.liz@gmail.com"
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                 elizabetesilvaoliveira.liz@gmail.com
                </a>
              </li>
              <li className="text-white/70 font-light">
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 font-light text-sm">
              © {currentYear} Elizabete. Todos os direitos reservados.
            </p>
            <p className="text-white/70 font-light text-sm">
              Desenvolvido com React + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
