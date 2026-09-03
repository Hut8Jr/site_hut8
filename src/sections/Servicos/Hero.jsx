import TypewriterCodeCard from "../../components/TypewriterCodeCard.jsx";

function HeroServicos() {
  return (
    <section className="relative bg-transparent py-20 px-6">

        {/* ESFERAS DESFOCADAS NO BACKGROUND */}
        <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-[#6B0F9C] opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-[#A4DE02] opacity-20 blur-3xl"></div>
      
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            
        {/* LADO ESQUERDO: HEADER, DESCRIÇÃO E BOTÕES */}
        <div className="flex-1">
                    
          <div className="inline-flex items-center bg-[#6B0F9C1A] gap-2 px-3 py-1 rounded-full border border-[#6B0F9C33]">
            <div className="w-2 h-2 bg-[#A4DE02] rounded-full"></div>
            <span className="text-[#6B0F9C] font-semibold text-[14px] leading-[20px]">A empresa júnior da Computação</span>
          </div>

          <h1 className="text-[#1F2937] font-extrabold text-[60px] leading-[60px] tracking-[0.7px]">
            Nossos{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-[#6C109D] to-[#A854F6] bg-clip-text text-transparent">Serviços</span>
          </h1>

          <p className="text-[#4B5563] text-[20px] leading-[28px] mt-6">
           Criamos sites, sistemas, aplicativos e soluções personalizadas para ajudar empresas e projetos a resolver problemas reais com tecnologia, inovação e excelente custo-benefício.  
          </p>
        </div>

        {/* LADO DIREITO: IMAGEM E CARD SOBREPOSTO */}
        <div className="relative w-full max-w-[582px] aspect-square">

          {/* BOLAS DESFOCADAS ATRÁS DA IMAGEM */}
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#A4DE02] opacity-25 blur-md"></div>
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#6B0F9C] opacity-25 blur-md"></div>
          
          <img
            src="src/assets/ServicosCards/servicosHeader.png"
            alt="Equipe trabalhando"
            className="relative w-full h-full object-cover rounded-lg shadow-lg"
          />

          <TypewriterCodeCard className="absolute bottom-6 left-6 right-6" />
        </div>
      </div>
    </section>
  );
}
export default HeroServicos;
