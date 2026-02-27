import { Feather } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/especies", label: "Espécies" },
  { to: "/sobre", label: "Sobre" },
];

const SiteHeader = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[var(--header-height)] bg-primary flex items-center px-6 shadow-md">
      <Link to="/" className="flex items-center gap-3">
        <Feather className="h-6 w-6 text-accent" />
        <span className="text-xl font-display font-bold text-primary-foreground tracking-wide">
          Espécies de Galinhas
        </span>
      </Link>
      <nav className="ml-auto">
        <ul className="flex gap-6 text-sm font-body">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`transition-colors ${
                  location.pathname === link.to
                    ? "text-accent font-semibold"
                    : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
