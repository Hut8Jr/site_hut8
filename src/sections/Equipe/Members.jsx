import { IoPersonCircleOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";

const presidenceModules = import.meta.glob("../../assets/EquipeGallery/*.png", {
  eager: true,
  import: "default",
});
const galleryImages = Object.fromEntries(
  Object.entries(presidenceModules).map(([path, url]) => {
    const filename = path.split("/").pop().replace(".png", "");
    return [filename, url];
  }),
);

const professoresModules = import.meta.glob(
  "../../assets/EquipeMembers/Professores/*.png",
  { eager: true, import: "default" },
);
const professoresImages = Object.fromEntries(
  Object.entries(professoresModules).map(([path, url]) => {
    const filename = path.split("/").pop().replace(".png", "");
    return [filename, url];
  }),
);

const presidencia = [
  {
    name: "Samuel Lettnin",
    role: "Presidente",
    description:
      "Responsável pela representação institucional da empresa júnior e pela condução estratégica da diretoria.",
    image: "SamuelLettnin",
    github: "https://github.com/Lettnin",
    linkedin: "https://www.linkedin.com/in/samuellettnin/",
  },
  {
    name: "Augusto Menchaca",
    role: "Gestor de Projetos",
    description:
      "Responsável por gerenciar os projetos da empresa júnior, garantindo que sejam entregues no prazo e com qualidade.",
    image: "AugustoMenchaca",
    github: "https://github.com/AugustoMenchaca",
    linkedin: "https://www.linkedin.com/in/augusto-menchaca-078469330/",
  },
  {
    name: "Inácio Teixeira",
    role: "Gestor de Pessoas",
    description:
      "Responsável por gerenciar a equipe da empresa júnior, promovendo um ambiente de trabalho saudável e motivador.",
    image: "InacioTeixeira",
    github: "https://github.com/inaciortx",
    linkedin:
      "https://www.linkedin.com/in/in%C3%A1cio-da-rosa-teixeira-b7415b375/",
  },
  {
    name: "Hiago Muniz",
    role: "Gestor Comercial",
    description:
      "Responsável por gerenciar as relações comerciais da empresa júnior, buscando novas oportunidades de negócios e parcerias.",
    image: "HiagoMuniz",
    github: "https://github.com/HiagoMuniz",
    linkedin: "https://www.linkedin.com/in/hiago-muniz-b2672b21a/",
  },
  {
    name: "Gabriel Martins",
    role: "Gestor Financeiro",
    description:
      "Responsável por gerenciar as finanças da empresa júnior, garantindo a sustentabilidade financeira e o cumprimento das obrigações legais.",
    image: "GabrielMartins",
    github: "https://github.com/GabrielMartins105",
    linkedin: "https://www.linkedin.com/in/gabriel-martins-7a786926a/",
  },
  {
    name: "Amanda Vieira",
    role: "Gestora de Marketing",
    description:
      "Responsável por gerenciar as estratégias de marketing da empresa júnior, fortalecendo sua identidade, comunicação e presença no mercado.",
    image: "AmandaVieira",
    github: "https://github.com/Amandamvieira",
    linkedin: "https://www.linkedin.com/in/amandajmvieira",
  },
];

const professores = [
  {
    name: "Prof. Dr. Tobias Mulling",
    role: "Professor",
    description:
      "Doutor em Interação Humano-Computador pela University of Brighton e Mestre pela UFSC. É professor Adjunto na UFPel, ex-designer corporativo e especialista em design de interação, interfaces gestuais e conversacionais.",
    image: "Dr. TobiasMulling",
    cnpq: "http://lattes.cnpq.br/9327981374409781",
  },
  {
    name: "Prof. Dra. Larissa Astrogildo",
    role: "Professora",
    description:
      "Doutora e mestra em Ciência da Computação pela PUCRS com foco em Inteligência Computacional (PLN, ontologias e análise de sentimento), graduada em Engenharia de Computação pela FURG e técnica em Informática pelo IFRS Rio Grande.",
    image: "Dra. LarissaAstrogildo",
    cnpq: "http://lattes.cnpq.br/3941460073542194",
  },
];

export default function EquipeSection2() {
  return (
    <section className="relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* PARTE SUPERIOR: PRESIDÊNCIA */}
        <div>
          {/* Título com linha divisória lateral */}
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-[#6b0f9c] text-3xl font-extrabold whitespace-nowrap">
              Presidência
            </h2>
            <div className="h-px bg-gray-200 w-full"></div>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {presidencia.map((pessoa) => (
              <div
                key={pessoa.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Foto */}
                <div className="w-32 h-32 bg-gray-300 rounded-xl shrink-0 overflow-hidden flex items-center justify-center">
                  {pessoa.image ? (
                    <img
                      src={galleryImages[pessoa.image]}
                      alt={pessoa.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <IoPersonCircleOutline
                      size={64}
                      className="text-gray-400"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-gray-900 font-bold text-xl">
                    {pessoa.name}
                  </h3>
                  <span className="text-[#6B0F9C] text-sm font-semibold mt-1">
                    {pessoa.role}
                  </span>
                  <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                    {pessoa.description}
                  </p>
                  <div className="flex gap-4 mt-4 text-gray-400">
                    <a
                      href={pessoa.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub de ${pessoa.name}`}
                      className="group/github flex h-6 items-center gap-0 overflow-hidden rounded-full bg-slate-100 pl-1.5 pr-1.5 text-slate-500 transition-all duration-300 ease-out hover:gap-1.5 hover:bg-violet-100 hover:pr-3 hover:text-violet-700"
                    >
                      <FiGithub
                        size={20}
                        strokeWidth={1.5}
                        className="shrink-0"
                      />
                      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-semibold opacity-0 transition-all duration-300 ease-out group-hover/github:max-w-[3.5rem] group-hover/github:opacity-100">
                        GitHub
                      </span>
                    </a>
                    <a
                      href={pessoa.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Linkedin de ${pessoa.name}`}
                      className="group/linkedin flex h-6 items-center gap-0 overflow-hidden rounded-full bg-slate-100 pl-1.5 pr-1.5 text-slate-500 transition-all duration-300 ease-out hover:gap-1.5 hover:bg-violet-100 hover:pr-3 hover:text-violet-700"
                    >
                      <CiLinkedin
                        size={20}
                        strokeWidth={0.5}
                        className="shrink-0"
                      />
                      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-semibold opacity-0 transition-all duration-300 ease-out group-hover/linkedin:max-w-[3.5rem] group-hover/linkedin:opacity-100">
                        LinkedIn
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PARTE INFERIOR: PROFESSORES */}
        <div className="mt-32">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-[#6b0f9c] text-3xl font-extrabold whitespace-nowrap">
              Professores
            </h2>
            <div className="h-px bg-gray-200 w-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {professores.map((professor) => (
              <div
                key={professor.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-32 h-32 bg-gray-300 rounded-xl shrink-0 overflow-hidden flex items-center justify-center">
                  {professor.image ? (
                    <img
                      src={professoresImages[professor.image]}
                      alt={professor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <IoPersonCircleOutline
                      size={64}
                      className="text-gray-400"
                    />
                  )}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-gray-900 font-bold text-xl">
                    {professor.name}
                  </h3>
                  <span className="text-[#6B0F9C] text-sm font-semibold mt-1">
                    {professor.role}
                  </span>
                  <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                    {professor.description}
                  </p>

                  <div className="flex gap-4 mt-4 text-gray-400">
                    {professor.cnpq && (
                      <a
                        href={professor.cnpq}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`CNPq de ${professor.name}`}
                        className="group/cnpq flex h-7 items-center gap-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100 pl-1.5 pr-1.5 text-slate-500 transition-all duration-300 ease-out hover:gap-1.5 hover:border-violet-200 hover:bg-violet-100 hover:pr-3 hover:text-violet-700"
                      >
                        <FaLink
                          size={16}
                          strokeWidth={1.5}
                          className="shrink-0"
                        />
                        <span className="max-w-0 overflow-hidden whitespace-nowrap text-[11px] font-semibold opacity-0 transition-all duration-300 ease-out group-hover/cnpq:max-w-14 group-hover/cnpq:opacity-100">
                          CNPq
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
