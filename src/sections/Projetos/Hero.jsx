import TypewriterCodeCard from "../../components/TypewriterCodeCard.jsx";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20 px-6">      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">

        {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}
        <div className="flex-1 w-full lg:w-1/2">
                    
          <div className="inline-flex items-center bg-[#6B0F9C1A] gap-2 px-3 py-1 rounded-full border-1 border-[#6B0F9C33]">
            <div className="w-2 h-2 bg-[#A4DE02] rounded-full"></div>
            <span className="text-[#6B0F9C] font-semibold text-[14px] leading-[20px] bg-[]">A empresa júnior da Computação</span>
          </div>

          <h1 className="text-[#1F2937] font-extrabold text-[60px] lg:leading-[60px] tracking-[0.7px] mt-4">
            Nossos{" "}
            <span className="bg-gradient-to-r from-[#6C109D] to-[#A854F6] bg-clip-text text-transparent">Projetos</span>
          </h1>

          <p className="text-[#4B5563] text-[20px] leading-[28px]  mt-6">
            Combinamos nossa excelência técnica e visão estratégica para transformar
            desafios complexos em produtos digitais de alta performance.
            Conheça nossa trajetória de inovação.
          </p>
        </div>

        {/* LADO DIREITO: IMAGEM E CARD SOBREPOSTO */}
        <div className="relative w-full lg:w-1/2 max-w-[504px] aspect-square">

          {/* BOLAS DESFOCADAS ATRÁS DA IMAGEM */}
          <div class="absolute -bottom-15 -left-30 h-40 w-40 rounded-full bg-[#A4DE02] opacity-25 blur-md"></div>
          <div class="absolute -bottom-1 -top-1 -right-12 h-32 w-32 rounded-full bg-[#A4DE02] opacity-25 blur-md"></div>
          
          <img
            src="/src/assets/ProjetosHero/holograma.png"
            alt="Equipe"
            className="relative w-full h-full object-cover rounded-lg shadow-lg"
          />

          <TypewriterCodeCard className="absolute bottom-6 left-6 right-6" />
        </div>
      </div>
    </section>
  );
}
