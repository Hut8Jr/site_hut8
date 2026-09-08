import TypewriterCodeCard from "../../components/TypewriterCodeCard.jsx";

export default function EquipeSection1() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20 px-6">   

        <div className="relative z-500 max-w-6xl mx-auto">
          
        {/* PARTE SUPERIOR: TEXTO E IMAGEM */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}
          <div className="flex-1 w-full lg:w-1/2">
                      
            <div className="inline-flex items-center bg-[#6B0F9C1A] gap-2 px-3 py-1 rounded-full border-1 border-[#6B0F9C33]">
              <div className="w-2 h-2 bg-[#A4DE02] rounded-full"></div>
              <span className="text-[#6B0F9C] font-semibold text-[14px] leading-[20px] bg-[]">A empresa júnior da Computação</span>
            </div>

            <h1 className="text-[#1F2937] font-extrabold text-[60px] lg:leading-[60px] tracking-[0.7px] mt-4">
              Conheça nossa{" "}
              <span className="bg-gradient-to-r from-[#6C109D] to-[#A854F6] bg-clip-text text-transparent">Equipe</span>
            </h1>

            <p className="text-[#4B5563] text-[20px] leading-[28px]  mt-6">
              Nosso time de jovens universitários apaixonados por tecnologia, empreendedorismo e inovação.
            </p>
          </div>

          {/* LADO DIREITO */}
          <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0 mb-16 lg:mb-0">
          {/* aspect-video força a proporção 16:9 (widescreen), abrindo a imagem */}
            <img
              src="/src/assets/EquipeMembers/sunset.png"
              alt="Equipe"
              className="w-full aspect-video object-cover rounded-3xl shadow-lg"
            />

            {/* Centralização: left-1/2 joga o card para o meio, -translate-x-1/2 recua metade do próprio tamanho do card para alinhar perfeitamente ao centro */}
            <TypewriterCodeCard
              className="absolute -bottom-15 left-1/2 z-20 w-[90%] -translate-x-1/2 sm:w-[380px]"
              variant="floating"
            />
          </div>
        </div>        
      </div>
    </section>
  );
}
