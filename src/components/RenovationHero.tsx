import * as React from "react";
import { HeroText } from "./Herotext";
import { HeroImage } from "./HeroImage";

export const RenovationHero: React.FC = () => {
  const heroContent = {
    title: "L'AGENCE DE\nRÉNOVATION",
    subtitle: "ÉCOUTE  – QUALITÉ –  CONFIANCE",
    description: [
      "REMAKE est une agence de conception et coordination de travaux",
      "de rénovation de l'habitat. Nous nous positionnons en maître d'ouvrage et",
      "maître d'œuvre de vos projets de rénovation. Nous portons la charge mentale de vos",
      "projets et sécurisons leur réalisation avec bon goût, dans les règles de l'art, la maîtrise des",
      "délais et du budget."
    ],
    ctaText: "DÉCOUVREZ NOS RÉALISATIONS"
  };

  const imageProps = {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/78947f240173575b5674661b8a3c10b6303dfd6fd181cef509cd9a731bef361a?placeholderIfAbsent=true&apiKey=8e3eec33f1de45b4aa64d6845394587e",
    alt: "Renovation project showcase"
  };

  return (
    <main className="relative w-full bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex gap-8 items-center max-lg:flex-col">
          <div className="flex flex-col w-full lg:w-[45%]">
            <HeroText {...heroContent} />
          </div>
          <div className="flex flex-col w-full lg:w-[55%]">
            <HeroImage {...imageProps} />
          </div>
        </div>
      </div>
    </main>
  );
};
