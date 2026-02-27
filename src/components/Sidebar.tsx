import { Bird, Egg, Heart, Info } from "lucide-react";

interface SidebarProps {
  onNavigate: (id: string) => void;
}

const menuItems = [
  { id: "home", label: "Início", icon: Bird },
  { id: "silkie", label: "Sedosa do Japão", icon: Heart },
  { id: "onagadori", label: "Onagadori", icon: Egg },
  { id: "polonesa", label: "Polonesa", icon: Bird },
  { id: "about", label: "Sobre", icon: Info },
];

const Sidebar = ({ onNavigate }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-[var(--header-height)] bottom-0 w-[var(--sidebar-width)] bg-sidebar overflow-y-auto z-40">
      <nav className="py-6">
        <p className="px-5 mb-4 text-xs font-body font-semibold uppercase tracking-widest text-sidebar-foreground/50">
          Navegação
        </p>
        <ul className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className="w-full flex items-center gap-3 px-5 py-3 text-sm font-body text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors text-left"
              >
                <item.icon className="h-4 w-4 text-sidebar-primary" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground/40 font-body">
          © 2026 Galinhas Ornamentais
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
