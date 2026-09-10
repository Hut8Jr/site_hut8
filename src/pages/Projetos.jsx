import React from "react";
import Bg1 from "../components/Backgrounds/Bg1.jsx";
import ProjetosHero from "../sections/Projetos/Hero.jsx";
import ProjetosPortfolio from "../sections/Projetos/Portfolio.jsx";
import ProjetosCTA from "../sections/Projetos/CTA.jsx";

export default function ProjetosPage() {
  return (
    <Bg1>
      <ProjetosHero />
      <ProjetosPortfolio />
      <ProjetosCTA />
    </Bg1>
  );
}
