import React from "react";
import { footerLinks } from "../data/footerData";
import logoHut from "../assets/Footer/logoHut.svg";
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const Footer = ({ setSecaoAtiva }) => {
  const handleQuickLinkClick = (secao) => {
    if (!setSecaoAtiva) return;

    setSecaoAtiva(secao);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceLinkClick = (targetId) => {
    if (!setSecaoAtiva) return;

    setSecaoAtiva("servicos");

    setTimeout(() => {
      const elemento = document.getElementById(targetId);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#F9FAFB] w-full pt-16 pb-8 max-w-6xl mx-auto px-6 lg:px-8 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Grid Principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Logo e Sobre */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#A4DE02] rounded-full p-2">
                <img
                  src={logoHut}
                  alt="Hut Design Logo"
                  className="w-6 h-auto"
                />
              </div>
              <div className="text-[#6B0F9C] font-bold text-2xl">Hut8</div>
            </div>
            <div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Empresa Júnior de Computação da UFPel. Projetando o futuro com
                tecnologia e inovação.
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/hutEight"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-purple-600 transition-colors"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/hut8_jr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-purple-600 transition-colors"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/hut8/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-purple-600 transition-colors"
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
            <div>
              <ul className="flex flex-col gap-2">
                {footerLinks.linksRapidos.map((link, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => handleQuickLinkClick(link.secao)}
                      className="text-left text-[#9CA3AF] hover:text-purple-600 transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[#1F2937] text-lg font-bold">Serviços</h3>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                {footerLinks.serviços.map((link, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => handleServiceLinkClick(link.targetId)}
                      className="text-left text-[#9CA3AF] hover:text-purple-600 transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
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
                        className="flex items-center gap-2 text-[#9CA3AF] hover:text-purple-600 transition-colors"
                      >
                        <Icon size={iconSize} className="text-[#A4DE02]" />
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
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Hut8 Empresa Júnior. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gray-600">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
