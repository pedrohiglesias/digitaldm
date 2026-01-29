import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logoDigitalDM from "@/assets/logo-digitaldm.png";

const footerLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "DM IA", href: "#dm-ia" },
  { label: "Método MIA", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Diagnóstico", href: "#diagnostico" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/digitaldm", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/digitaldm", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <img 
                src={logoDigitalDM} 
                alt="Digital DM" 
                className="h-6 w-auto mb-4"
              />
              <p className="text-muted-foreground text-sm mb-6">
                Marketing digital estratégico com CRM inteligente. 
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

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
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

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:contato@digitaldm.com.br"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    contato@digitaldm.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5596650200002"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
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
