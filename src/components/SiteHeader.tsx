import { Feather } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[var(--header-height)] bg-primary flex items-center px-6 shadow-md">
      <div className="flex items-center gap-3">
        <Feather className="h-6 w-6 text-accent" />
        <h1 className="text-xl font-display font-bold text-primary-foreground tracking-wide">
          Espécies de Galinhas
        </h1>
      </div>
      <nav className="ml-auto">
        <ul className="flex gap-6 text-sm font-body text-primary-foreground/80">
          <li><a href="#home" className="hover:text-accent transition-colors">Início</a></li>
          <li><a href="#breeds" className="hover:text-accent transition-colors">Espécies</a></li>
          <li><a href="#about" className="hover:text-accent transition-colors">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
