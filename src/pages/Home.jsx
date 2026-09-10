import React from "react";
import HomeHero from "../sections/Home/Hero.jsx";
import HomeStats from "../sections/Home/Stats.jsx";
import HomeAbout from "../sections/Home/About.jsx";
import HomePortfolio from "../sections/Home/Features/Portfolio.jsx";
import HomeContact from "../sections/Home/Contact.jsx";
import { useNavegacao } from "../components/ServicosCards/useNavegacao.js";

export default function HomePage() {
  const { navegarParaServico } = useNavegacao();

  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <HomePortfolio navegarParaServico={navegarParaServico} />
      <HomeContact />
    </>
  );
}
