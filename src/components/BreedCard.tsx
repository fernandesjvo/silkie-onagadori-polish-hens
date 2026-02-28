import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface BreedInfo {
  question: string;
  answer: string;
}

interface BreedCardProps {
  id: string;
  name: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  details: BreedInfo[];
  buyAriaLabel?: string;
}

const BreedCard = ({ id, name, subtitle, imageSrc, imageAlt, description, details, buyAriaLabel }: BreedCardProps) => {
  const headingId = `breed-heading-${id}`;

  return (
    <article id={id} className="breed-card animate-fade-in" aria-labelledby={headingId}>
      <div className="aspect-square overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 id={headingId} className="text-xl font-display font-bold text-foreground">{name}</h3>
        <p className="text-xs font-body text-accent font-semibold uppercase tracking-wider mt-1 mb-3">
          {subtitle}
        </p>
        <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <Accordion type="single" collapsible className="w-full">
          {details.map((detail, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-sm font-body font-medium text-foreground hover:text-accent py-3">
                {detail.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-body text-muted-foreground leading-relaxed">
                {detail.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold" aria-label={buyAriaLabel} >
          <ShoppingCart className="h-4 w-4 mr-2" aria-hidden="true" />
          Comprar
        </Button>
      </div>
    </article>
  );
};

export default BreedCard;
