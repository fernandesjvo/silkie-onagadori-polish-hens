import BreedCard from "@/components/BreedCard";

import silkieImg from "@/assets/silkie.jpg";
import onagadoriImg from "@/assets/onagadori.jpg";
import polonesaImg from "@/assets/polonesa.jpg";
import brahmaImg from "@/assets/brahma.jpg";
import cochinImg from "@/assets/cochin.jpg";
import ayamCemaniImg from "@/assets/ayam-cemani.jpg";
import sebrightImg from "@/assets/sebright.jpg";
import araucanaImg from "@/assets/araucana.jpg";
import faverollesImg from "@/assets/faverolles.jpg";

const allBreeds = [
  {
    id: "silkie",
    name: "Sedosa do Japão",
    subtitle: "Silkie • Gallus gallus domesticus",
    imageSrc: silkieImg,
    imageAlt: "Galinha Sedosa do Japão com plumagem branca e felpuda",
    description: "Conhecida por sua plumagem sedosa que lembra pelos ao invés de penas, a Sedosa do Japão é uma das raças mais antigas e dóceis do mundo.",
    buyAriaLabel: "Comprar galinha Sedosa do Japão",
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
    description: "A Onagadori é uma lendária raça japonesa cuja cauda pode atingir comprimentos impressionantes de até 10 metros. Monumento Natural do Japão desde 1952.",
    buyAriaLabel: "Comprar galinha onagadori",
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
    description: "A Polonesa é famosa por sua crista espetacular em forma de coroa. Apesar do nome, acredita-se que tenha origem na Holanda.",
    buyAriaLabel: "Comprar galinha Polonesa",
    details: [
      { question: "Origem e História", answer: "Apesar do nome, suas origens mais prováveis são a Holanda e a Europa Oriental. Aparece em pinturas holandesas do século XVI e foi popular entre a nobreza europeia." },
      { question: "Características Físicas", answer: "Crista proeminente em forma de V coberta por penas longas e volumosas. Disponível em diversas cores: branco, preto, dourado, prateado. Peso de 2 a 2,7 kg." },
      { question: "Temperamento e Criação", answer: "Geralmente dócil, porém pode ser nervosa devido à visão limitada pela crista. Recomenda-se aparar as penas da crista para melhor visibilidade." },
    ],
  },
  {
    id: "brahma",
    name: "Brahma",
    subtitle: "Gigante Asiática • Rainha das Galinhas",
    imageSrc: brahmaImg,
    imageAlt: "Galinha Brahma com porte majestoso e penas nos pés",
    description: "A Brahma é uma das maiores raças de galinhas do mundo, conhecida como a 'Rainha das Galinhas' por seu porte imponente e temperamento calmo.",
    buyAriaLabel: "Comprar galinha Brahma",
    details: [
      { question: "Origem e História", answer: "Desenvolvida nos Estados Unidos a partir de aves importadas da China no século XIX. Foi a principal raça de corte nos EUA de 1850 a 1930." },
      { question: "Características Físicas", answer: "Pode pesar até 5,5 kg. Possui crista em ervilha, penas abundantes nos tarsos e dedos, e corpo largo e profundo. Cores: claro, escuro e fulvo." },
      { question: "Temperamento", answer: "Extremamente dócil e amigável. Adapta-se bem ao confinamento e é resistente ao frio graças à plumagem densa. Boa produtora de ovos marrons." },
    ],
  },
  {
    id: "cochin",
    name: "Cochin",
    subtitle: "Cochinchinesa • Bola de Penas",
    imageSrc: cochinImg,
    imageAlt: "Galinha Cochin com corpo redondo e extremamente felpudo",
    description: "A Cochin é uma raça gigante e extremamente felpuda, originária da China. Sua aparência arredondada e dócil a torna uma das favoritas entre criadores.",
    buyAriaLabel: "Comprar galinha Cochin",
    details: [
      { question: "Origem e História", answer: "Originária da região de Cochinchina (atual Vietnã/China). Foi apresentada na Inglaterra em 1843 e causou a chamada 'Febre das Galinhas' na era vitoriana." },
      { question: "Características Físicas", answer: "Corpo grande e arredondado, coberto por plumagem abundante que se estende até os dedos. Peso de 3,5 a 5 kg. Disponível em diversas cores." },
      { question: "Temperamento", answer: "Muito calma e amigável, considerada uma das raças mais dóceis. Excelente mãe e boa chocadeira. Adapta-se bem ao confinamento." },
    ],
  },
  {
    id: "ayam-cemani",
    name: "Ayam Cemani",
    subtitle: "Galinha Negra Total • Indonésia",
    imageSrc: ayamCemaniImg,
    imageAlt: "Galinha Ayam Cemani completamente preta com brilho iridescente",
    description: "A Ayam Cemani é uma das raças mais raras e exóticas do mundo. Completamente preta — penas, pele, ossos, carne e órgãos — devido à fibromelanose.",
    buyAriaLabel: "Comprar galinha Ayam Cemani",
    details: [
      { question: "Origem e História", answer: "Originária de Java, na Indonésia. O nome significa 'galinha completamente preta' em javanês. Considerada sagrada em algumas culturas e usada em cerimônias rituais." },
      { question: "Características Físicas", answer: "Fibromelanose causa hiperpigmentação total: penas, pele, bico, língua, crista, ossos e carne são pretos. Penas com brilho iridescente verde-azulado." },
      { question: "Raridade e Valor", answer: "Uma das raças mais caras do mundo, podendo custar milhares de dólares por exemplar. Produz ovos de cor creme (não pretos, como o mito popular)." },
    ],
  },
  {
    id: "sebright",
    name: "Sebright",
    subtitle: "Bantam Inglesa • Plumagem Rendada",
    imageSrc: sebrightImg,
    imageAlt: "Galinha Sebright com plumagem dourada e bordas pretas",
    description: "A Sebright é uma elegante raça bantam criada por Sir John Sebright no século XIX, famosa por suas penas com bordas nítidas que criam um efeito rendado.",
    buyAriaLabel: "Comprar galinha Sebright",
    details: [
      { question: "Origem e História", answer: "Criada na Inglaterra por Sir John Saunders Sebright por volta de 1800. Foi uma das primeiras raças bantam verdadeiras, desenvolvida exclusivamente como ave ornamental." },
      { question: "Características Físicas", answer: "Pequena (500-600g), com plumagem dourada ou prateada com bordas pretas distintas. Crista rosa, cauda em leque. Machos e fêmeas têm plumagem similar." },
      { question: "Criação", answer: "Requer cuidados especiais por ser sensível ao frio e umidade. Produção de ovos baixa. Valorizada principalmente por sua beleza ornamental." },
    ],
  },
  {
    id: "araucana",
    name: "Araucana",
    subtitle: "Galinha Mapuche • Ovos Azuis",
    imageSrc: araucanaImg,
    imageAlt: "Galinha Araucana com tufos auriculares e ovos azuis",
    description: "A Araucana é uma raça sul-americana famosa por botar ovos azul-esverdeados. Originária do Chile, foi criada pelos povos Mapuche há séculos.",
    buyAriaLabel: "Comprar galinha Araucana",
    details: [
      { question: "Origem e História", answer: "Originária do sul do Chile, criada pelos povos Mapuche (Araucanos). Descrita cientificamente pela primeira vez em 1914. Resultado do cruzamento de raças Collonca e Quetro." },
      { question: "Características Físicas", answer: "Possui tufos auriculares (penas que saem próximas às orelhas) e pode ser sem cauda (rumpless). Peso médio de 2 a 2,5 kg. Plumagem variada." },
      { question: "Ovos Azuis", answer: "Sua principal fama: bota ovos de casca azul-esverdeada devido ao pigmento biliverdina. Produz cerca de 150-200 ovos por ano." },
    ],
  },
  {
    id: "faverolles",
    name: "Faverolles",
    subtitle: "Francesa Barbuda • Cinco Dedos",
    imageSrc: faverollesImg,
    imageAlt: "Galinha Faverolles cor salmão com barba e penas nos pés",
    description: "A Faverolles é uma raça francesa encantadora, conhecida por sua barba felpuda, cinco dedos e temperamento extremamente dócil e curioso.",
    buyAriaLabel: "Comprar galinha Faverolles",
    details: [
      { question: "Origem e História", answer: "Desenvolvida na vila de Faverolles, norte da França, no século XIX. Cruzamento entre Houdan, Brahma, Cochin e Dorking para criar uma raça de dupla aptidão." },
      { question: "Características Físicas", answer: "Barba e topete proeminentes, cinco dedos, pernas emplumadas. A cor mais popular é salmão: fêmeas creme-rosado, machos com peito preto e dorso palha. Peso de 3 a 4 kg." },
      { question: "Temperamento", answer: "Extremamente dócil, curiosa e brincalhona. Considerada uma das raças mais amigáveis. Excelente para famílias e se dá bem com crianças." },
    ],
  },
];

const Especies = () => {
  return (
    <div className="min-h-screen bg-background pt-[var(--header-height)]">
      <main id="main-content" className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-display font-bold text-foreground">
            Todas as Espécies
          </h1>
          <p className="text-base font-body text-muted-foreground max-w-2xl">
            Explore nossa coleção completa de raças de galinhas ornamentais — das mais raras às mais populares do mundo.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Catálogo de raças ornamentais">
          {allBreeds.map((breed) => (
            <BreedCard key={breed.id} {...breed} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Especies;
