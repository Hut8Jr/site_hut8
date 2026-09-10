import React from "react";

export function FeaturedCardPlante({ titulo, descricao, imagem, tag, metrica }) {
  return (
    <div 
      className="relative flex-grow flex-shrink-0 basis-full md:basis-[450px] h-[498px] rounded-[32px] overflow-hidden flex flex-col justify-end p-6 md:p-10 transition-all duration-500 hover:scale-[1.01] transform-gpu group cursor-pointer border border-white/10"
    >
      {/* Imagem real com acessibilidade e performance */}
      <img
        src={imagem}
        alt={`Case de sucesso ${titulo} - Solução Agrotech de IA`}
        width={450}
        height={498}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradiente escuro garantindo contraste mínimo de 5.5:1 para os textos */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-purple-950/70 to-slate-950/95 z-0" 
      />

      <div className="relative z-10 flex flex-col gap-4 mt-auto">
        {/* Tag */}
        {tag && (
          <span className="bg-[#D4FF37] text-[#344E00] text-[12px] font-bold h-[24px] px-[12px] flex items-center justify-center rounded-full uppercase font-['Inter'] w-fit shrink-0 border-none whitespace-nowrap">
            {tag}
          </span>
        )}

        {/* Título e Descrição */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-[24px] font-bold leading-tight font-['Inter']">
            {titulo}
          </h2>
          <p className="text-white text-[16px] leading-[24px] font-medium font-['Inter'] max-w-[380px] drop-shadow-sm">
            {descricao}
          </p>
        </div>

        {/* Rodapé */}
        <div className="flex justify-between items-end mt-4">
          <span className="text-[#CAFF6F] font-bold text-[16px] leading-[24px] font-['Inter']">
            {metrica}
          </span>
          <div 
            aria-hidden="true"
            className="w-[40px] h-[40px] bg-[#D4FF37] rounded-full flex items-center justify-center shadow-lg transition-transform hover:rotate-45"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#344E00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}