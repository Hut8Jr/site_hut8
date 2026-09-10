import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServicosHero from "../sections/Servicos/Hero.jsx";
import ServicosCards from "../sections/Servicos/Cards.jsx";
import ServicosCTA from "../sections/Servicos/CTA.jsx";

export default function ServicosPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <ServicosHero />
      <ServicosCards />
      <ServicosCTA />
    </>
  );
}
