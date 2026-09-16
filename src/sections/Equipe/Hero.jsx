import TypewriterCodeCard from "../../components/TypewriterCodeCard.jsx";
import sunsetImg from "../../assets/EquipeMembers/sunset.webp";

export default function EquipeSection1() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20 px-4 sm:px-6 max-w-full">   

        <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto">
          
        {/* PARTE SUPERIOR: TEXTO E IMAGEM */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}
          <div className="w-full lg:w-1/2 min-w-0">
                      

            <h1 className="font-heading tracking-tight text-preto-hut8 font-extrabold text-3xl sm:text-5xl xl:text-[60px] leading-tight xl:leading-[60px] break-words">
              Nossa Equipe e{" "}
              <span className="bg-gradient-to-r from-[#6C109D] to-[#A854F6] bg-clip-text text-transparent">Professores Orientadores</span> - UFPel
            </h1>

            <p className="text-preto-hut8 text-[18px] sm:text-[20px] max-w-[60ch] mt-6 leading-[1.5]">
              Nosso time de jovens universitários apaixonados por tecnologia, empreendedorismo e inovação.
            </p>
          </div>

          {/* LADO DIREITO */}
          <div className="relative w-full max-w-[520px] mx-auto lg:max-w-none lg:mx-0 lg:w-1/2 mt-10 lg:mt-0 mb-16 lg:mb-0">
          {/* aspect-video força a proporção 16:9 (widescreen), abrindo a imagem */}
            <img
              src={sunsetImg}
              alt="Membros da equipe da Hut8 reunidos"
              width={576}
              height={324}
              loading="eager"
              fetchPriority="high"
              decoding="async"
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
