import { Feather, Heart, Globe, Users } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background pt-[var(--header-height)]">
      <main id="main-content" className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        <header className="space-y-3">
          <h1 className="text-3xl font-display font-bold text-foreground">
            Sobre Nós
          </h1>
          <p className="text-base font-body text-muted-foreground max-w-2xl">
            Somos apaixonados por galinhas ornamentais e queremos compartilhar essa paixão com o mundo.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Valores e missão">
          {[
            {
              icon: Heart,
              title: "Nossa Missão",
              text: "Promover o conhecimento e a preservação das raças de galinhas ornamentais, valorizando a biodiversidade avícola e incentivando a criação responsável.",
            },
            {
              icon: Globe,
              title: "Alcance Global",
              text: "Reunimos informações sobre raças de todos os continentes, desde a Ayam Cemani da Indonésia até a Araucana do Chile, conectando criadores do mundo inteiro.",
            },
            {
              icon: Users,
              title: "Comunidade",
              text: "Fazemos parte de uma comunidade global de criadores, veterinários e entusiastas que compartilham conhecimento para o bem-estar dessas aves extraordinárias.",
            },
          ].map((item) => (
            <article key={item.title} className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">{item.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="bg-card border border-border rounded-lg p-8 space-y-4" aria-label="Nossa história">
          <div className="flex items-center gap-3 mb-2">
            <Feather className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="text-2xl font-display font-bold text-foreground">Nossa História</h2>
          </div>
          <p className="text-sm font-body text-muted-foreground leading-relaxed">
            O projeto Galinhas Ornamentais nasceu da fascinação por essas aves incríveis que, ao longo de séculos, foram selecionadas não apenas por sua utilidade, mas também por sua beleza extraordinária. Cada raça conta uma história — de culturas antigas, de criadores dedicados e de uma conexão profunda entre o ser humano e a natureza.
          </p>
          <p className="text-sm font-body text-muted-foreground leading-relaxed">
            Nosso objetivo é criar o maior catálogo online de raças ornamentais em língua portuguesa, oferecendo informações detalhadas, fotos de qualidade e orientações para criadores iniciantes e experientes. Acreditamos que conhecer essas raças é o primeiro passo para preservá-las.
          </p>
        </section>

        <section className="text-center py-8 space-y-4" aria-label="Informações de contato">
          <h2 className="text-2xl font-display font-bold text-foreground">Entre em Contato</h2>
          <p className="text-sm font-body text-muted-foreground">
            Tem dúvidas, sugestões ou quer contribuir com o projeto?
          </p>
          <p className="text-sm font-body text-accent font-semibold">
            <a href="mailto:contato@galinhasornamentais.com">contato@galinhasornamentais.com</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Sobre;
