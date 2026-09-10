import TypewriterCodeCard from "../../components/TypewriterCodeCard.jsx";
import servicosHeaderImg from "../../assets/ServicosCards/servicosHeader.webp";

function HeroServicos() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20 px-4 sm:px-6 max-w-full">

        {/* ESFERAS DESFOCADAS NO BACKGROUND */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-72 w-72 rounded-full bg-[#6B0F9C] opacity-20 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-[#A4DE02] opacity-20 blur-3xl"></div>
      
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            
        {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}
        <div className="flex-1">
                    
          <div className="inline-flex items-center bg-[#6B0F9C1A] gap-2 px-3 py-1 rounded-full border border-[#6B0F9C33]">
            <div className="w-2 h-2 bg-[#A4DE02] rounded-full"></div>
            <span className="text-[#6B0F9C] font-semibold text-[14px] leading-[20px]">A empresa júnior da Computação</span>
          </div>

          <h1 className="text-[#1F2937] font-extrabold text-3xl sm:text-5xl lg:text-[60px] leading-tight lg:leading-[60px] tracking-[0.7px] break-words mt-3">
            Serviços Especializados em{" "}
            <span className="bg-gradient-to-r from-[#6C109D] to-[#A854F6] bg-clip-text text-transparent">Tecnologia e Software</span>
          </h1>

          <p className="text-[#4B5563] text-[18px] sm:text-[20px] leading-[28px] mt-6">
           Criamos sites, sistemas, aplicativos e soluções personalizadas para ajudar empresas e projetos a resolver problemas reais com tecnologia, inovação e excelente custo-benefício.  
          </p>
        </div>

        {/* LADO DIREITO: IMAGEM E CARD SOBREPOSTO */}
        <div className="relative w-full max-w-[582px] aspect-square overflow-hidden sm:overflow-visible">

          {/* BOLAS DESFOCADAS ATRÁS DA IMAGEM */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#A4DE02] opacity-25 blur-md"></div>
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#6B0F9C] opacity-25 blur-md"></div>
          
          <img
            src={servicosHeaderImg}
            alt="Desenvolvimento de serviços e soluções digitais pela Hut 8 Jr."
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
export default HeroServicos;
