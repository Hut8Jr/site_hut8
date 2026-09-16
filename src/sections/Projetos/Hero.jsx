import TypewriterCodeCard from "../../components/TypewriterCodeCard.jsx";
import hologramaImg from "../../assets/ProjetosHero/holograma.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent py-12 lg:py-20 px-4 sm:px-6 max-w-full">      
      <div className="max-w-6xl xl:max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">

        {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}
        <div className="w-full lg:w-1/2 min-w-0">
                    

          <h1 className="font-heading tracking-tight text-preto-hut8 font-extrabold text-3xl sm:text-5xl xl:text-[60px] leading-tight xl:leading-[60px] break-words">
            Portfólio de{" "}
            <span className="bg-gradient-to-r from-[#6C109D] to-[#A854F6] bg-clip-text text-transparent">Projetos e Soluções Tecnológicas</span>
          </h1>

          <p className="text-preto-hut8 text-[18px] sm:text-[20px] max-w-[60ch] mt-6 leading-[1.5]">
            Combinamos nossa excelência técnica e visão estratégica para transformar
            desafios complexos em produtos digitais de alta performance.
            Conheça nossa trajetória de inovação.
          </p>
        </div>

        {/* LADO DIREITO: IMAGEM E CARD SOBREPOSTO */}
        <div className="relative w-full max-w-[520px] mx-auto lg:max-w-none lg:mx-0 lg:w-1/2 aspect-square sm:aspect-[4/3] min-w-0 overflow-hidden sm:overflow-visible">

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
