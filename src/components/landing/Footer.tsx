import { Instagram, Linkedin, Mail } from "lucide-react";
import logoDigitalDM from "@/assets/logo-digitaldm.png";

const navigationLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "DM IA", href: "#dm-ia" },
  { label: "Método MIA", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
];

const resourceLinks = [
  { label: "Funil Estratégico", href: "#funil" },
  { label: "Automação", href: "#automacao" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const actionLinks = [
  { label: "Diagnóstico Grátis", href: "#diagnostico" },
  { label: "Planos e Preços", href: "#planos" },
  { label: "Quem Somos", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/digitaldm.com.br/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/digitaldm", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <img 
                src={logoDigitalDM} 
                alt="Digital DM" 
                className="h-6 w-auto mb-4"
              />
              <p className="text-muted-foreground text-sm mb-6">
                Marketing digital estratégico com CRM inteligente e IA. 
                Transformamos seu funil em crescimento previsível.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ações */}
            <div>
              <h4 className="font-semibold mb-4">Ações</h4>
              <ul className="space-y-2">
                {actionLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:contato@digitaldm.com.br"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mt-4"
              >
                <Mail className="w-4 h-4" />
                contato@digitaldm.com.br
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Digital DM. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              LGPD: Seus dados são protegidos e usados apenas para contato comercial.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
