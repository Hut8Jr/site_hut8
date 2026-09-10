import React from "react";
import { getWhatsAppLink } from "../data/contactConfig.js";

export default function SectionCTA({
  titlePrefix = "Pronto para tirar sua",
  titleHighlight = "ideia do papel?",
  orcamentoMsg = "Olá! Gostaria de solicitar um orçamento para os serviços da Hut 8.",
  consultorMsg = "Olá! Gostaria de falar com um consultor da Hut 8.",
}) {
  return (
    <section className="px-6 sm:px-10 mt-6 mb-40">
      <div className="max-w-[1700px] mx-auto relative py-20 px-6 overflow-hidden bg-[#0E0E12E5] rounded-[24px]">
        {/* Esferas decorativas */}
        <div aria-hidden="true" className="absolute top-5 right-5 h-60 w-60 rounded-full bg-[#813BBE33] blur-2xl pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-5 left-5 h-60 w-60 rounded-full bg-[#CAFF6F1A] blur-2xl pointer-events-none" />

        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-white font-bold text-3xl md:text-5xl">
            {titlePrefix}{" "}
            <span className="whitespace-nowrap">{titleHighlight}</span>
          </h2>

          <p className="mt-6 mx-auto text-lg text-[#FFFFFF99]">
            Seja você uma startup em crescimento ou uma empresa consolidada buscando inovação, 
            nossa equipe está pronta para construir o futuro com você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <a 
              href={getWhatsAppLink(orcamentoMsg)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-[#CAFF70] px-10 py-4 rounded-[24px] text-lg text-[#344E00] font-bold shadow-[0_20px_25px_-5px_#CAFF6F33] hover:bg-[#A0CC5A] focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:outline-none transition-colors duration-200 cursor-pointer"
            >
              Solicitar Orçamento
            </a>

            <a 
              href={getWhatsAppLink(consultorMsg)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-[#FFFFFF0D] px-14 py-4 rounded-[24px] text-lg text-white font-semibold border border-[#FFFFFF1A] hover:bg-[#FFFFFF26] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none transition-colors duration-200 cursor-pointer"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
