import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const imageModules = import.meta.glob("../../assets/EquipeGallery/*.png", {
  eager: true,
  import: "default",
});

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => {
    const filename = path.split("/").pop().replace(".png", "");
    return [filename, url];
  }),
);

const team = [
  {
    name: "Tomás Mendes",
    role: "Designer",
    image: "TomasMendes",
    imagePosition: "object-[center_30%]",
    linkedin: "https://www.linkedin.com/in/tomás-vitorino-mendes-696606380",
  },
  {
    name: "Ruan da Silva Rodrigues",
    role: "Designer",
    image: "RuanRodrigues",
    imagePosition: "object-[center_35%]",
    linkedin: "https://www.linkedin.com/in/ruanrodrigs",
  },
  {
    name: "Diego Ruas",
    role: "Designer",
    image: "DiegoRuas",
    imagePosition: "object-[center_10%]",
    github: "https://github.com/diego-ruas",
    linkedin: "https://www.linkedin.com/in/diegoruas/",
  },
  {
    name: "Amanda Schiller",
    role: "Designer",
    image: "AmandaSchiller",
    imagePosition: "object-[center_30%]",
    linkedin: "https://www.linkedin.com/in/amndasch",
  },
  {
    name: "Victor Reis",
    role: "Desenvolvedor",
    image: "VictorReis",
    imagePosition: "object-[center_15%]",
    github: "https://github.com/VictorReis18",
    linkedin: "https://www.linkedin.com/in/victor-reis-a4618523a",
  },
  {
    name: "Rodrigo Anchieta",
    role: "Desenvolvedor",
    image: "RodrigoAnchieta",
    imagePosition: "object-[center_90%]",
    github: "https://github.com/Rodrigo-AP-1",
    linkedin: "https://www.linkedin.com/in/rodrigo-prates-a91568385",
  },
  {
    name: "Pedro Mota",
    role: "Desenvolvedor",
    image: "PedroMota",
    imagePosition: "object-[center_50%]",
    github: "https://github.com/PMota173",
    linkedin: "https://www.linkedin.com/in/pedro-mota173",
  },
  {
    name: "Pedro Izkovitz",
    role: "Desenvolvedor",
    image: "PedroIzkovitz",
    imagePosition: "object-[center_50%]",
    github: "https://github.com/pedroizk",
    linkedin: "https://www.linkedin.com/in/pedro-izkovitz-89453b264/",
  },
  {
    name: "Pedro Mognon",
    role: "Desenvolvedor",
    image: "PedroMognon",
    imagePosition: "object-[center_50%]",
    github: "https://github.com/PedroMBortoli",
    linkedin: "https://www.linkedin.com/in/pedrombortoli",
  },
  {
    name: "Matheus Persch",
    role: "Desenvolvedor",
    image: "MatheusPersch",
    imagePosition: "object-[center_30%]",
    github: "https://github.com/DevTheusP",
    linkedin: "https://www.linkedin.com/in/matheus-persch/",
  },
  {
    name: "Mariana Ferreira Tica",
    role: "Desenvolvedor",
    image: "MarianaTica",
    imagePosition: "object-[center_50%]",
    github: "",
    linkedin: "",
  },
  {
    name: "Kenzo Takahashi",
    role: "Desenvolvedor",
    image: "KenzoTakahashi",
    imagePosition: "object-[center_20%]",
    github: "https://github.com/KenzoTakas",
    linkedin: "https://www.linkedin.com/in/kenzo-da-silva-takahashi-920284426/",
  },
  {
    name: "João Duarte",
    role: "Desenvolvedor",
    image: "JoaoDuarte",
    imagePosition: "object-[center_80%]",
    github: "https://github.com/joaoMarceloBitar",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-marcelo-bitar-88a470319",
  },
  {
    name: "Gustavo Brendler",
    role: "Desenvolvedor",
    image: "GustavoBrendler",
    imagePosition: "object-[center_30%]",
    github: "https://github.com/Brendler17",
    linkedin: "https://www.linkedin.com/in/gustavo-brendler/",
  },
  {
    name: "Enzo Giacomini",
    role: "Desenvolvedor",
    image: "EnzoGiacomini",
    imagePosition: "object-[center_60%]",
    github: "https://github.com/EnzoGiacomini",
    linkedin: "https://www.linkedin.com/in/enzogiacomini",
  },
  {
    name: "Cassiano Pessoa",
    role: "Desenvolvedor",
    image: "CassianoPessoa",
    imagePosition: "object-[center_40%]",
    github: "https://github.com/Caspessoa",
    linkedin: "https://www.linkedin.com/in/cassiano-pessoa/",
  },
  {
    name: "Augusto Molina",
    role: "Desenvolvedor",
    image: "AugustoMolina",
    imagePosition: "object-[center_50%]",
    github: "https://github.com/gutormolina",
    linkedin: "https://www.linkedin.com/in/augusto-molina",
  },
  {
    name: "Alan Farias",
    role: "Desenvolvedor",
    image: "AlanFarias",
    imagePosition: "object-[center_30%]",
    github: "https://github.com/AlanF4rias",
    linkedin: "https://www.linkedin.com/in/alan-farias-19a028209",
  },
  {
    name: "Manoela Viera",
    role: "Desenvolvedor",
    image: "ManoelaViera",
    imagePosition: "object-[center_50%]",
    github: "https://github.com/ManoelaV",
    linkedin: "https://www.linkedin.com/in/manoela-moura-17b332319/",
  },
];

function Cards({ pessoa }) {
  return (
    <article className="group w-full rounded-md bg-white p-3 shadow-[0_8px_24px_rgba(25,25,50,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(25,25,50,0.10)]">
      <div className="overflow-hidden rounded-sm bg-slate-100">
        <img
          src={images[pessoa.image]}
          alt={pessoa.name}
          className={`h-32 w-full object-cover ${pessoa.imagePosition} transition duration-300 group-hover:scale-105`}
        />
      </div>

      <div className="pt-3">
        <h3 className="text-[11px] font-bold leading-tight text-slate-900">
          {pessoa.name}
        </h3>
        <p className="mt-1 text-[8px] font-medium text-slate-400">
          {pessoa.role}
        </p>

        <div className="mt-4 flex items-center gap-2">
          {pessoa.github && (
            <a
              href={pessoa.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${pessoa.name}`}
              className="group/github flex h-5 items-center gap-0 overflow-hidden rounded-full bg-slate-100 pl-1 pr-1 text-slate-500 transition-all duration-300 ease-out hover:gap-1.5 hover:bg-violet-100 hover:pr-3 hover:text-violet-700"
            >
              <FiGithub size={12} strokeWidth={2.5} className="shrink-0" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-semibold opacity-0 transition-all duration-300 ease-out group-hover/github:max-w-[3.5rem] group-hover/github:opacity-100">
                GitHub
              </span>
            </a>
          )}
          {pessoa.linkedin && (
            <a
              href={pessoa.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${pessoa.name}`}
              className="group/linkedin flex h-5 items-center gap-0 overflow-hidden rounded-full bg-slate-100 pl-1 pr-1 text-slate-500 transition-all duration-300 ease-out hover:gap-1.5 hover:bg-violet-100 hover:pr-3 hover:text-violet-700"
            >
              <CiLinkedin size={12} strokeWidth={1.0} className="shrink-0" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-semibold opacity-0 transition-all duration-300 ease-out group-hover/linkedin:max-w-[4rem] group-hover/linkedin:opacity-100">
                LinkedIn
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function DevsDesignersSection() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f7f9] px-6 py-10 font-sans text-slate-900">
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-lime-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-8 h-56 w-56 rounded-full bg-violet-100/50 blur-3xl" />

      <section className="relative mx-auto max-w-6xl">
        <header className="flex items-center gap-6 mb-10">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-violet-700 sm:text-3xl">
              Desenvolvedores & Designers
            </h1>
            <p className="mt-1 text-[10px] font-medium text-slate-400 sm:text-xs">
              A força criativa por trás de cada linha de código.
            </p>
          </div>
          <div className="h-px bg-gray-200 w-full"></div>
        </header>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {team.map((pessoa, index) => (
            <Cards key={`${pessoa.name}-${index}`} pessoa={pessoa} />
          ))}
        </div>
      </section>
    </main>
  );
}
