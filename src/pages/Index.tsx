import SiteHeader from "@/components/SiteHeader";
import Slideshow from "@/components/Slideshow";
import BreedCard from "@/components/BreedCard";

import silkieImg from "@/assets/silkie.jpg";
import onagadoriImg from "@/assets/onagadori.jpg";
import polonesaImg from "@/assets/polonesa.jpg";

const breeds = [
  {
    id: "silkie",
    name: "Sedosa do Japão",
    subtitle: "Silkie • Gallus gallus domesticus",
    imageSrc: silkieImg,
    imageAlt: "Galinha Sedosa do Japão com plumagem branca e felpuda",
    description:
      "Conhecida por sua plumagem sedosa que lembra pelos ao invés de penas, a Sedosa do Japão é uma das raças mais antigas e dóceis do mundo. Possui pele e ossos escuros, além de cinco dedos em cada pé.",
    details: [
      { question: "Origem e História", answer: "Originária da China, a Sedosa é mencionada por Marco Polo em suas viagens no século XIII. Foi introduzida na Europa e Japão onde se tornou extremamente popular como ave ornamental e de companhia." },
      { question: "Características Físicas", answer: "Plumagem sedosa sem barbicelas, pele azul-escura/preta, crista em noz, cinco dedos, plumagem abundante nos tarsos. Peso médio de 1,3 a 1,8 kg." },
      { question: "Temperamento", answer: "Extremamente dócil e amigável, sendo excelente para famílias com crianças. São ótimas mães e frequentemente usadas para chocar ovos de outras espécies." },
    ],
  },
  {
    id: "onagadori",
    name: "Onagadori",
    subtitle: "尾長鶏 • Cauda Longa Japonesa",
    imageSrc: onagadoriImg,
    imageAlt: "Galo Onagadori com cauda extremamente longa e colorida",
    description:
      "A Onagadori é uma lendária raça japonesa cuja cauda pode atingir comprimentos impressionantes de até 10 metros. É considerada Monumento Natural do Japão desde 1952.",
    details: [
      { question: "Origem e História", answer: "Desenvolvida na província de Kōchi, Japão, durante o período Edo. Criadores selecionaram cuidadosamente aves com o gene de cauda que não muda, permitindo crescimento contínuo por anos." },
      { question: "Características Físicas", answer: "As penas da cauda crescem continuamente sem muda, podendo ultrapassar 10 metros. Plumagem rica em tons de vermelho, dourado e preto. Porte elegante e altivo." },
      { question: "Cuidados Especiais", answer: "Requer poleiros altos e caixas especiais para proteger a cauda. Necessita de alimentação balanceada rica em proteínas para o crescimento saudável das penas." },
    ],
  },
  {
    id: "polonesa",
    name: "Polonesa",
    subtitle: "Polish Chicken • Crista em Coroa",
    imageSrc: polonesaImg,
    imageAlt: "Galinha Polonesa com crista exuberante em forma de coroa",
    description:
      "A Polonesa é famosa por sua crista espetacular em forma de coroa. Apesar do nome, acredita-se que tenha origem na Holanda. É uma das aves ornamentais mais reconhecíveis do mundo.",
    details: [
      { question: "Origem e História", answer: "Apesar do nome, suas origens mais prováveis são a Holanda e a Europa Oriental. Aparece em pinturas holandesas do século XVI e foi popular entre a nobreza europeia." },
      { question: "Características Físicas", answer: "Crista proeminente em forma de V coberta por penas longas e volumosas. Disponível em diversas cores: branco, preto, dourado, prateado e combinações com bordas. Peso de 2 a 2,7 kg." },
      { question: "Temperamento e Criação", answer: "Geralmente dócil, porém pode ser nervosa devido à visão limitada pela crista. Recomenda-se aparar as penas da crista para melhor visibilidade. Boa produção de ovos brancos." },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-[var(--header-height)]" role="main">
        <div className="p-6 max-w-5xl mx-auto space-y-10">
          <Slideshow />

          <section id="breeds" className="space-y-3">
            <h2 className="text-2xl font-display font-bold text-foreground">
              Espécies em Destaque
            </h2>
            <p className="text-sm font-body text-muted-foreground">
              Explore três das raças de galinhas ornamentais mais fascinantes do mundo.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breeds.map((breed) => (
              <BreedCard key={breed.id} {...breed} />
            ))}
          </div>

          <footer id="about" className="bg-primary text-primary-foreground -mx-6 px-6 py-12 mt-16 rounded-t-2xl">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-display font-bold mb-3">Galinhas Ornamentais</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  Descubra a beleza e a história por trás das raças de galinhas mais fascinantes do mundo.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-body font-semibold uppercase tracking-wider mb-3 text-accent">Sitemap</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#home" className="text-primary-foreground/70 hover:text-accent transition-colors">Início</a></li>
                  <li><a href="#breeds" className="text-primary-foreground/70 hover:text-accent transition-colors">Espécies em Destaque</a></li>
                  <li><a href="#silkie" className="text-primary-foreground/70 hover:text-accent transition-colors">Sedosa do Japão</a></li>
                  <li><a href="#onagadori" className="text-primary-foreground/70 hover:text-accent transition-colors">Onagadori</a></li>
                  <li><a href="#polonesa" className="text-primary-foreground/70 hover:text-accent transition-colors">Polonesa</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-body font-semibold uppercase tracking-wider mb-3 text-accent">Contato</h4>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  contato@galinhasornamentais.com
                </p>
              </div>
            </div>
            <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-primary-foreground/15 text-center">
              <p className="text-xs text-primary-foreground/50">
                © 2026 Galinhas Ornamentais — Feito com 🐔
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
