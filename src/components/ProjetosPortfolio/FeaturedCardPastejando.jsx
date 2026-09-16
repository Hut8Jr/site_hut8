export function FeaturedCardPastejando({ titulo, descricao, imagem, tag, tecnologias, icone}) {
  return (
    <a
    href = "#contato" 
    className="flex-1 min-w-0 w-full sm:min-w-[350px] min-h-[494px] h-auto bg-white rounded-[24px] flex flex-col overflow-hidden border border-[#B2B1BA33] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-[1.01] transform-gpu">
      
      {/* Wrapper da Imagem - Mantém a altura fixa para não achatar */}
      <div className="w-full h-[256px] min-h-[256px] overflow-hidden">
        <img 
          src={imagem} 
          alt={`Case de sucesso do projeto ${titulo}`} 
          width={480}
          height={256}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-[center_32%]" 
        />
      </div>

      {/* Conteúdo Branco - O flex-grow garante que ele ocupe o resto do card */}
      <div className="p-8 flex flex-col justify-between flex-grow bg-white">
        
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h2 className="font-heading tracking-tight font-bold text-2xl text-preto-hut8 leading-8 m-0">
              {titulo}
            </h2>
            <span className="text-cinza-texto font-label font-bold uppercase tracking-[0.12em] text-[14px] sm:text-[18px]">
              {tag}
            </span>
          </div>

          {icone && (
            <img 
              src={icone} 
              alt="" 
              aria-hidden="true"
              width={32}
              height={32}
              className="w-[32px] h-[32px] object-contain" 
            />
          )}
        </div>

        {/* Descrição com a quebra controlada que você gosta */}
        <p className="max-w-[400px] font-body text-[16px] text-preto-hut8 my-4 leading-[1.5]">
          {descricao}
        </p>

        {/* Linha de Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {tecnologias && tecnologias.map((tech) => (
            <span 
              key={tech} 
              className="font-body font-medium text-[12px] text-[#5F5E67] bg-zinc-100 px-3 py-1 rounded-lg whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}