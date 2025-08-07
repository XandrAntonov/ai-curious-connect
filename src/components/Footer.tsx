import { Link } from "react-router-dom";
import { Brain, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo a popis */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
              <Brain className="h-8 w-8" />
              <span>AI Inquisitive</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Ovládni AI. Připoj se ke komunitě inovátorů a transformuj svou kariéru pomocí umělé inteligence.
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Rychlé odkazy</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Domů
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/o-nas" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                O nás
              </Link>
              <Link to="/komunita" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Komunita
              </Link>
            </div>
          </div>

          {/* Právní */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Právní</h3>
            <div className="space-y-2">
              <Link to="/ochrana-osobnich-udaju" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Ochrana osobních údajů
              </Link>
              <Link to="/podminky" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Obchodní podmínky
              </Link>
              <Link to="/cookies" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@aiinquisitive.net</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+420 777 123 456</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  AI Inquisitive s.r.o.<br />
                  Wenceslas Square 1<br />
                  110 00 Praha 1, Česká republika
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 AI Inquisitive. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};