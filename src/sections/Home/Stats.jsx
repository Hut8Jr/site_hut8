import { NumeroAnimado } from "./Effects/NumeroAnimado";

const INDICADORES = [
  { alvo: 10,  sufixo: "+", rotulo: "ANOS DE HISTÓRIA" },
  { alvo: 50,  sufixo: "+", rotulo: "PROJETOS ENTREGUES" },
  { alvo: 100, sufixo: "+", rotulo: "MEMBROS IMPACTADOS" },
];

export default function Stats() {
  return (
    <section className="flex flex-wrap justify-center items-center py-8 w-full border-t border-b border-gray-200 bg-white gap-8">
      {INDICADORES.map(({ alvo, sufixo, rotulo }) => (
        // A borda separa colunas vizinhas, entao so existe quando ha colunas:
        // empilhado no mobile ela sumiria boiando no meio da tela.
        <div
          key={rotulo}
          className="flex flex-col items-center px-6 md:px-10 border-gray-200 border-r-0 sm:border-r sm:last:border-r-0"
        >
          <NumeroAnimado alvo={alvo} sufixo={sufixo} />
          <span className="text-cinza-texto font-label font-normal uppercase text-[14px] mt-2 tracking-[0.12em]">
            {rotulo}
          </span>
        </div>
      ))}
    </section>
  );
}
