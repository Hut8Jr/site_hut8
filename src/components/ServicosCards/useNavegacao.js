import { useNavigate } from "react-router-dom";

export const useNavegacao = () => {
  const navigate = useNavigate();

  const navegarParaServico = (idAlvo) => {
    navigate(`/servicos#${idAlvo}`);
    setTimeout(() => {
      const elemento = document.getElementById(idAlvo);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return { navegarParaServico };
};