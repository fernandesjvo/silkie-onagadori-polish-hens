import { useState } from "react";
import slide1 from "@/assets/slideshow-1.jpg";
import slide2 from "@/assets/slideshow-2.jpg";
import slide3 from "@/assets/slideshow-3.jpg";

const slides = [
  { src: slide1, alt: "Galinhas em pasto verde ao pôr do sol" },
  { src: slide2, alt: "Galinhas ornamentais com plumagem vibrante" },
  { src: slide3, alt: "Galinhas em fazenda rústica ao amanhecer" },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section
      id="home"
      className="relative w-full h-[420px] rounded-lg overflow-hidden shadow-lg"
      role="region"
      aria-roledescription="Carrossel de imagens"
      aria-label="Destaques — Cocoricó Collections"
    >
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className="slideshow-image"
          style={{ opacity: i === current ? 1 : 0 }}
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i !== current}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 right-6">
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {`Slide ${current + 1} de ${slides.length}: ${slides[current].alt}`}
        </p>
        <h2 className="text-3xl font-display font-bold text-primary-foreground mb-2">
          Conheça as Raças Mais Fascinantes
        </h2>
        <p className="text-sm font-body text-primary-foreground/80">
          Descubra a beleza e a história por trás dessas aves extraordinárias
        </p>
      </div>
      <div className="absolute bottom-6 right-6 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-accent scale-125" : "bg-primary-foreground/40"
              }`}
            aria-label={`Ir para slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Slideshow;

