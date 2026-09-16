import TypewriterCodeCard from "../../components/TypewriterCodeCard.jsx";
import hologramaImg from "../../assets/ProjetosHero/holograma.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20 px-4 sm:px-6 max-w-full">      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">

        {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}
        <div className="flex-1 w-full lg:w-1/2">
                    
          <div className="inline-flex items-center bg-[#6B0F9C1A] gap-2 px-3 py-1 rounded-full border border-[#6B0F9C33]">
            <div className="w-2 h-2 bg-verde-hut8 rounded-full"></div>
            <span className="text-roxo-hut8 font-semibold text-[14px] leading-[20px]">A empresa júnior da Computação</span>
          </div>

          <h1 className="font-heading tracking-tight text-preto-hut8 font-extrabold text-3xl sm:text-5xl lg:text-[60px] leading-tight lg:leading-[60px] break-words mt-4">
            Portfólio de{" "}
            <span className="bg-gradient-to-r from-[#6C109D] to-[#A854F6] bg-clip-text text-transparent">Projetos e Soluções Tecnológicas</span>
          </h1>

          <p className="text-preto-hut8 text-[18px] sm:text-[20px] mt-6 leading-[1.5]">
            Combinamos nossa excelência técnica e visão estratégica para transformar
            desafios complexos em produtos digitais de alta performance.
            Conheça nossa trajetória de inovação.
          </p>
        </div>

        {/* LADO DIREITO: IMAGEM E CARD SOBREPOSTO */}
        <div className="relative w-full lg:w-1/2 max-w-[504px] aspect-square overflow-hidden sm:overflow-visible">

          {/* BOLAS DESFOCADAS ATRÁS DA IMAGEM */}
          <div className="pointer-events-none absolute -bottom-15 -left-30 h-40 w-40 rounded-full bg-verde-hut8 opacity-25 blur-md"></div>
          <div className="pointer-events-none absolute -bottom-1 -top-1 -right-12 h-32 w-32 rounded-full bg-verde-hut8 opacity-25 blur-md"></div>
          
          <img
            src={hologramaImg}
            alt="Projetos e soluções tecnológicas desenvolvidas pela Hut8"
            width={504}
            height={504}
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
