import { useLocation } from "react-router-dom";

/**
 * Anima a entrada de cada rota. A key pelo pathname remonta o conteudo a cada
 * navegacao, o que redispara a animacao CSS sem precisar de biblioteca.
 *
 * Só a entrada e animada, de proposito: o usuario percebe o que chega, nao o
 * que sai, e animar a saida exigiria segurar a pagina antiga em memoria.
 */
export default function RouteTransition({ children }) {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="transicao-pagina">
      {children}
    </div>
  );
}
