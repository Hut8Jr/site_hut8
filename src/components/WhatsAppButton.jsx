import React, { useRef, useEffect } from 'react';
import whatsAppIcon from '../assets/WhatsAppButton/whatsAppIcon.svg';
import { getWhatsAppLink } from '../data/contactConfig.js';

const WhatsAppButton = ({ showForm, setShowForm }) => {
  const triggerBtnRef = useRef(null);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const isFirstMount = useRef(true);

  // Fecha com tecla Escape e gerencia foco acessível
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (showForm) {
      // Foca o primeiro input quando o modal abre
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
    } else {
      // Devolve foco ao botão de abertura quando fecha
      triggerBtnRef.current?.focus();
    }
  }, [showForm]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showForm) return;

      if (e.key === 'Escape') {
        setShowForm(false);
      }

      // Focus trap simples para WCAG 2.1.2
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElem = focusableElements[0];
        const lastElem = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElem) {
          lastElem.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElem) {
          firstElem.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showForm, setShowForm]);

  // Impede o navegador de recarregar a página e envia mensagem segura
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const nome = (formData.get('nomeUsuario') || '').toString().trim();
    const empresa = (formData.get('nomeEmpresa') || 'Não informada').toString().trim();
    const motivo = (formData.get('motivoContato') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const mensagem = (formData.get('mensagem') || '').toString().trim();

    const linhasMensagem = [
      `*Nome:* ${nome}`,
      `*Empresa:* ${empresa}`,
      `*E-mail:* ${email}`,
      '',
      `*Motivo do Contato:* ${motivo}`,
      `*Mensagem:* ${mensagem}`
    ].join('\n');

    const urlFinal = getWhatsAppLink(linhasMensagem);
    
    window.open(urlFinal, '_blank', 'noopener,noreferrer'); 
    setShowForm(false);
  };

  return (
    <>
      {showForm && (
        <div 
          aria-hidden="true"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[250] animate-in fade-in duration-300"
          onClick={() => setShowForm(false)}
        />
      )}

      {/* Container acima do backdrop (z-[250]) para o blur/escurecimento
          nunca cobrir o botão nem o formulário ao abrir pelo "Fale Conosco" */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[300]">
        
        {/* BOTÃO PRINCIPAL COM CONTRASTE AAA (#075E54 = 7.67:1 sobre #FFFFFF / 7.34:1 sobre #F9FAFB) */}
        <button
          ref={triggerBtnRef}
          onClick={() => setShowForm(!showForm)}
          className={`h-14 bg-[#075E54] rounded-full shadow-2xl flex items-center 
                    transition-all duration-300 ease-in-out overflow-hidden border-none cursor-pointer group
                    ${showForm ? 'w-44' : 'w-14 hover:w-44'}
                    focus-visible:ring-4 focus-visible:ring-[#075E54]/40 focus-visible:outline-none`}
          aria-label="Conversar no WhatsApp"
          aria-expanded={showForm}
          aria-controls="modal-contato"
        >
          <div className="min-w-[56px] h-14 flex items-center justify-center">
            <img src={whatsAppIcon} alt="" aria-hidden="true" width={32} height={32} className="w-8 h-8 object-contain" />
          </div>

          <span className={`transition-opacity duration-300 pr-6 font-bold text-white whitespace-nowrap
                          ${showForm ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            Fale conosco
          </span>
        </button>

        {/* Formulário Modal com Focus Trap */}
        {showForm && (
<<<<<<< HEAD
          <div className="absolute top-full mt-4 right-0 bg-white w-80 [@media(max-height:700px)]:w-[600px] rounded-2xl shadow-2xl p-6 max-h-[42vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent animate-in fade-in zoom-in slide-in-from-top-2 duration-300 origin-top-right z-[260]">
=======
          <div 
            ref={modalRef}
            id="modal-contato"
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="modal-contato-titulo"
            className="absolute top-full mt-4 right-0 bg-white w-80 [@media(max-height:700px)]:w-[450px] rounded-2xl shadow-2xl p-6 max-h-[85vh] overflow-y-auto origin-top-right z-[210] border border-gray-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 id="modal-contato-titulo" className="font-bold text-gray-800 text-lg">Contato Hut 8 Jr.</h3>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                aria-label="Fechar diálogo de contato"
                className="text-gray-600 hover:text-gray-900 cursor-pointer p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-[#075E54] focus-visible:outline-none"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
>>>>>>> 371b80a (feat: complete 10/10 production refactor (webfonts, wcag a11y, geo schema, seo prerender, vercel cache))

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-2.5">
              <div>
                <label htmlFor="nomeUsuario" className="block text-xs font-semibold text-gray-700 mb-1">Seu Nome *</label>
                <input 
                  ref={firstInputRef}
                  id="nomeUsuario"
                  name="nomeUsuario"
                  required
                  placeholder="Ex: Ana Silva"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#075E54] text-gray-900 placeholder:text-gray-600 text-sm"
                />
              </div>
              <div>
                <label htmlFor="nomeEmpresa" className="block text-xs font-semibold text-gray-700 mb-1">Sua Empresa</label>
                <input 
                  id="nomeEmpresa"
                  name="nomeEmpresa"
                  placeholder="Ex: Minha Empresa Ltda."
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#075E54] text-gray-900 placeholder:text-gray-600 text-sm"
                />
              </div>
              <div>
                <label htmlFor="motivoContato" className="block text-xs font-semibold text-gray-700 mb-1">Motivo do Contato *</label>
                <input 
                  id="motivoContato"
                  name="motivoContato"
                  required
                  placeholder="Ex: Orçamento de Site ou App"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#075E54] text-gray-900 placeholder:text-gray-600 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">Seu E-mail *</label>
                <input 
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Ex: contato@empresa.com"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#075E54] text-gray-900 placeholder:text-gray-600 text-sm"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-xs font-semibold text-gray-700 mb-1">Mensagem *</label>
                <textarea 
                  id="mensagem"
                  name="mensagem"
                  required
                  placeholder="Descreva seu projeto ou objetivo..."
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl h-20 resize-none outline-none focus:ring-2 focus:ring-[#075E54] text-gray-900 placeholder:text-gray-600 text-sm"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#075E54] text-white font-bold py-2.5 rounded-xl hover:bg-[#054c44] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#075E54] focus-visible:outline-none shadow-md mt-1 text-sm"
              >
                Enviar mensagem via WhatsApp
              </button>
              <p className="text-[11px] text-gray-500 text-center mt-1">
                Seus dados são protegidos e utilizados exclusivamente para retorno de contato comercial (LGPD).
              </p>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppButton;