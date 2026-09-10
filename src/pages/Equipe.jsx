import React from "react";
import Bg2 from "../components/Backgrounds/Bg2.jsx";
import EquipeHero from "../sections/Equipe/Hero.jsx";
import EquipeMembers from "../sections/Equipe/Members.jsx";
import EquipeGallery from "../sections/Equipe/Gallery.jsx";

export default function EquipePage() {
  return (
    <Bg2>
      <EquipeHero />
      <EquipeMembers />
      <EquipeGallery />
    </Bg2>
  );
}
