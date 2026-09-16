import TypewriterCodeCard from "../../components/TypewriterCodeCard.jsx";
import servicosHeaderImg from "../../assets/ServicosCards/servicosHeader.webp";

function HeroServicos() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20 px-4 sm:px-6 max-w-full">

        {/* ESFERAS DESFOCADAS NO BACKGROUND */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-72 w-72 rounded-full bg-roxo-hut8 opacity-20 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-verde-hut8 opacity-20 blur-3xl"></div>
      
        <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
            
        {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}
        <div className="w-full lg:w-1/2 min-w-0">
                    

          <h1 className="font-heading tracking-tight text-preto-hut8 font-extrabold text-3xl sm:text-5xl xl:text-[60px] leading-tight xl:leading-[60px] break-words">
            Serviços Especializados em{" "}
            <span className="bg-gradient-to-r from-[#6C109D] to-[#A854F6] bg-clip-text text-transparent">Tecnologia e Software</span>
          </h1>

          <p className="text-preto-hut8 text-[18px] sm:text-[20px] max-w-[60ch] mt-6 leading-[1.5]">
           Criamos sites, sistemas, aplicativos e soluções personalizadas para ajudar empresas e projetos a resolver problemas reais com tecnologia, inovação e excelente custo-benefício.  
          </p>
        </div>

        {/* LADO DIREITO: IMAGEM E CARD SOBREPOSTO */}
        <div className="relative w-full max-w-[520px] mx-auto lg:max-w-none lg:mx-0 lg:w-1/2 aspect-square min-w-0 overflow-hidden sm:overflow-visible">

          {/* BOLAS DESFOCADAS ATRÁS DA IMAGEM */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-verde-hut8 opacity-25 blur-md"></div>
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-roxo-hut8 opacity-25 blur-md"></div>
          
          <img
            src={servicosHeaderImg}
            alt="Desenvolvimento de serviços e soluções digitais pela Hut8"
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
