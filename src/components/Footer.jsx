import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../data/footerData";
import logoHut from "../assets/Footer/logoHut.svg";
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const Footer = () => {
  const [activeModal, setActiveModal] = React.useState(null);
  const modalRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  const openModal = (type, triggerElem) => {
    triggerRef.current = triggerElem;
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  React.useEffect(() => {
    if (!activeModal) return;

    // Move focus inside the modal on open
    const focusable = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length > 0) {
      focusable[0].focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key === "Tab" && modalRef.current) {
        const elements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!elements || elements.length === 0) return;
        const first = elements[0];
        const last = elements[elements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  return (
    <footer className="bg-[#F9FAFB] w-full pt-16 pb-8 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Grid Principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Logo e Sobre */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-3 w-fit" aria-label="Hut8 - Página Inicial">
              <div className="bg-[#A4DE02] rounded-full p-2">
                <img
                  src={logoHut}
                  alt="Hut 8 Jr. Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-[#6B0F9C] font-bold text-2xl">Hut8</span>
            </Link>
            <div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empresa Júnior de Computação da UFPel. Projetando o futuro com
                tecnologia e inovação.
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/hutEight"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Hut 8 Jr."
                className="text-gray-600 hover:text-purple-800 transition-colors p-1"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/hut8_jr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Hut 8 Jr."
                className="text-gray-600 hover:text-purple-800 transition-colors p-1"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/hut8/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Hut 8 Jr."
                className="text-gray-600 hover:text-purple-800 transition-colors p-1"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[#1F2937] text-lg font-bold">
                Links Rápidos
              </h3>
            </div>
            <nav aria-label="Links Rápidos do Rodapé">
              <ul className="flex flex-col gap-2">
                {footerLinks.linksRapidos.map((link, index) => {
                  const to = link.secao === "home" ? "/" : `/${link.secao}`;
                  return (
                    <li key={index}>
                      <Link
                        to={to}
                        className="text-left text-gray-600 hover:text-purple-800 transition-colors text-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[#1F2937] text-lg font-bold">Serviços</h3>
            </div>
            <nav aria-label="Serviços do Rodapé">
              <ul className="flex flex-col gap-2">
                {footerLinks.servicos.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={`/servicos#${link.targetId}`}
                      className="text-left text-gray-600 hover:text-purple-800 transition-colors text-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coluna 4: Contato */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[#1F2937] text-lg font-bold">Contato</h3>
            </div>
            <div>
              <ul className="flex flex-col gap-5">
                {footerLinks.contato.map((item, index) => {
                  let Icon;
                  let iconSize = 16;
                  if (index === 0) {
                    Icon = FiMapPin;
                    iconSize = 30;
                  } else if (index === 1) Icon = FiMail;
                  else if (index === 2) Icon = FiPhone;
                  return (
                    <li key={index}>
                      <a
                        href={item.url}
                        className="flex items-center gap-2 text-gray-600 hover:text-purple-800 transition-colors focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none"
                      >
                        <Icon size={iconSize} className="text-[#3f6212] shrink-0" />
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Barra Inferior (Copyright e Termos) */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Hut8 Empresa Júnior. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              type="button"
              onClick={(e) => openModal("privacidade", e.currentTarget)}
              className="text-gray-500 hover:text-purple-800 transition-colors cursor-pointer underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none rounded px-1"
            >
              Política de Privacidade
            </button>
            <button
              type="button"
              onClick={(e) => openModal("termos", e.currentTarget)}
              className="text-gray-500 hover:text-purple-800 transition-colors cursor-pointer underline-offset-2 hover:underline focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none rounded px-1"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>

      {/* Modal Acessível de Privacidade / Termos */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            aria-hidden="true"
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />
          <div
            ref={modalRef}
            className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-200"
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <h3 id="footer-modal-title" className="text-lg font-bold text-[#6B0F9C]">
                {activeModal === "privacidade"
                  ? "Política de Privacidade (LGPD)"
                  : "Termos de Uso Institucional"}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fechar janela"
                className="flex items-center justify-center min-w-[32px] min-h-[32px] rounded-full p-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              {activeModal === "privacidade" ? (
                <>
                  <p className="mb-3">
                    A <strong>Hut 8 Jr.</strong>, Empresa Júnior do Curso de Ciência da Computação da Universidade Federal de Pelotas (UFPel), preza pela transparência e privacidade dos seus dados em conformidade com a <strong>LGPD (Lei nº 13.709/2018)</strong>.
                  </p>
                  <p className="mb-3">
                    Não coletamos dados pessoais sem seu expresso consentimento. Qualquer dado fornecido por meio de nossos canais de contato (WhatsApp ou e-mail institucional) é utilizado exclusivamente para atendimento ao cliente e elaboração de propostas comerciais de serviços.
                  </p>
                  <p>
                    Nenhum dado é comercializado ou repassado a terceiros. Para dúvidas ou exclusão de dados, contate nosso DPO institucional em <em>hut8@inf.ufpel.edu.br</em>.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-3">
                    O website da <strong>Hut 8 Jr.</strong> destina-se à divulgação institucional dos serviços e projetos desenvolvidos por discentes da Universidade Federal de Pelotas sob mentoria de professores orientadores do CDTec/UFPel.
                  </p>
                  <p className="mb-3">
                    Todo o conteúdo, marcas, logotipos e códigos apresentados são de propriedade intelectual da Hut 8 Jr. ou de seus respectivos parceiros e clientes conveniados.
                  </p>
                  <p>
                    As soluções e orçamentos apresentados obedecem ao modelo estatutário de empresa júnior sem fins lucrativos, visando o aprendizado prático e o impacto na comunidade regional.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="bg-[#6B0F9C] hover:bg-[#520a77] text-white font-medium text-sm px-5 py-2.5 rounded-xl cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none"
              >
                Entendi e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
