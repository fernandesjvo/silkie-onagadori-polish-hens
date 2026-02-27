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
      <Link to="/" className="flex items-center gap-3" aria-label="Página inicial — Cocoricó Collections">
        <Feather className="h-6 w-6 text-accent" aria-hidden="true" />
        <span className="text-xl font-display font-bold text-primary-foreground tracking-wide">
          Cocoricó Collections
        </span>
      </Link>
      <nav className="ml-auto" aria-label="Navegação principal">
        <ul className="flex gap-6 text-sm font-body">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`transition-colors ${isActive
                    ? "text-accent font-semibold"
                    : "text-primary-foreground/80 hover:text-accent"
                    }`}
                  {...(isActive ? { "aria-current": "page" as const } : {})}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
