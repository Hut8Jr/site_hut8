import { IoLink, IoSchoolSharp, IoPersonCircleOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

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
                      className="hover:text-[#6B0F9C] transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={pessoa.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#6B0F9C] transition-colors"
                    >
                      <CiLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PARTE INFERIOR: PROFESSORES ELO */}
        <div className="mt-32">
          {/* Título com linha divisória lateral */}
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-[#6b0f9c] text-3xl font-extrabold whitespace-nowrap">
              Professores Elo
            </h2>
            <div className="h-px bg-gray-200 w-full"></div>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 items-start">
              {/* Fotos */}
              <div className="w-32 h-32 bg-gray-300 rounded-xl shrink-0 overflow-hidden">
                <img
                  src={professoresImages["Dr. Marcos Silva"]}
                  alt="Foto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-900 font-bold text-xl">
                  Dr. Marcos Silva
                </h3>
                <span className="text-[#6B0F9C] text-sm font-semibold mt-1">
                  Coordenador de Inovação
                </span>
                <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                  Especialista em Inteligência Artificial com mais de 15 anos de
                  atuação acadêmica e industrial. Lidera a visão tecnológica da
                  Hut8.
                </p>
                <div className="flex gap-4 mt-4 text-gray-400">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#6B0F9C] transition-colors"
                  >
                    <IoLink size={20} />
                  </a>

                  {/* Link 2 (Ex: Currículo Lattes) */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#6B0F9C] transition-colors"
                  >
                    <IoSchoolSharp size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 items-start">
              {/* Fotos */}
              <div className="w-32 h-32 bg-gray-300 rounded-xl shrink-0 overflow-hidden">
                <img
                  src={professoresImages["Dra. Helena Costa"]}
                  alt="Foto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-900 font-bold text-xl">
                  Dr. Helena Costa
                </h3>
                <span className="text-[#6B0F9C] text-sm font-semibold mt-1">
                  Mentora de Engenharia
                </span>
                <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                  Ph.D em Engenharia de Software, foca em escalabilidade e
                  arquiteturas robustas para produtos de alto impacto.
                </p>
                <div className="flex gap-4 mt-4 text-gray-400">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#6B0F9C] transition-colors"
                  >
                    <IoLink size={20} />
                  </a>

                  {/* Link 2 (Ex: Currículo Lattes) */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#6B0F9C] transition-colors"
                  >
                    <IoSchoolSharp size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
