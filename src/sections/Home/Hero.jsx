import React from "react";
import { Link } from "react-router-dom";
import TypewriterCodeCard from "../../components/TypewriterCodeCard.jsx";
import estudantesImg from "../../assets/HomeHero/estudantes.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9FAFB] py-20 px-4 sm:px-6 max-w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* BOLAS DESFOCADAS NO BACKGROUND */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-[#6B0F9C] opacity-20 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-[#A4DE02] opacity-20 blur-3xl"></div>

        {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}
        <div className="flex-1 w-full lg:w-1/2">
          <div className="inline-flex items-center bg-[#6B0F9C1A] gap-2 px-3 py-1 rounded-full border border-[#6B0F9C33]">
            <div className="w-2 h-2 bg-[#A4DE02] rounded-full"></div>
            <span className="text-[#6B0F9C] font-semibold text-[14px] leading-[20px]">Inovação em Tecnologia</span>
          </div>

          <h1 className="text-[#1F2937] font-extrabold text-3xl sm:text-5xl lg:text-[60px] leading-tight lg:leading-[60px] tracking-[0.7px] break-words mt-3">
            Empresa Júnior de{" "}
            <span className="text-[#6B0F9C]">Computação</span> - UFPel
          </h1>

          <p className="mt-6 text-[#4B5563] text-[18px] sm:text-[20px] leading-[28px] max-w-[500px]">
            Desenvolvemos soluções tecnológicas personalizadas e inovadoras
            por um melhor custo-benefício, aproximando jovens universitários
            do mercado de trabalho.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("contato");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-[#A4DE02] px-6 py-3 rounded-lg font-bold hover:bg-[#8CC800] focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none transition-colors cursor-pointer"
            >
              <span className="text-[#6B0F9C]">Entre para a Hut ➜</span>
            </button>

            <Link 
              to="/projetos" 
              className="inline-flex items-center justify-center border border-[#D1D5DB] px-6 py-3 rounded-lg hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none transition-colors cursor-pointer"
            >
              <span className="text-[#1F2937] text-[16px] leading-[24px] font-medium">Ver Portfólio</span> 
            </Link>
          </div>
        </div>

        {/* LADO DIREITO: IMAGEM E CARD SOBREPOSTO */}
        <div className="relative w-full max-w-[582px] aspect-square flex-shrink-1 overflow-hidden sm:overflow-visible">
          {/* BOLAS DESFOCADAS ATRÁS DA IMAGEM */}
          <div className="pointer-events-none absolute -top-6 -right-6 sm:-top-10 sm:-right-10 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-[#A4DE02] opacity-25 blur-md"></div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-[#6B0F9C] opacity-25 blur-md"></div>
          
          <img
            src={estudantesImg}
            alt="Estudantes da Hut 8 Jr. em ambiente de desenvolvimento de software"
            width={582}
            height={582}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="relative w-full h-full object-cover rounded-lg shadow-lg"
          />

          <TypewriterCodeCard className="absolute bottom-2 left-2 right-2 sm:bottom-6 sm:left-6 sm:right-6" />
        </div>
      </div>
    </section>
  );
}
