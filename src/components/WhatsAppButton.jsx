import React, { useRef, useEffect } from 'react';
import whatsAppIcon from '../assets/WhatsAppButton/whatsAppIcon.svg';
import { getWhatsAppLink } from '../data/contactConfig.js';

const WhatsAppButton = ({ showForm, setShowForm }) => {
  const abridorRef = useRef(null);   // quem abriu o modal: devolve o foco a ele
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
      abridorRef.current = document.activeElement;
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
    } else {
      abridorRef.current?.focus?.();
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
      {/* Botao flutuante: link DIRETO para o WhatsApp, sem formulario.
          Canto inferior direito, discreto (48px, sem expansao no hover).
          #075E54 = 7,67:1 sobre branco. */}
      <div className="fixed bottom-6 right-6 z-[240]">
        <a
          href={getWhatsAppLink("Ola! Vim pelo site da Hut8 e gostaria de falar com voces.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#075E54] shadow-lg
                     transition hover:bg-[#054c44] hover:scale-105
                     focus-visible:ring-2 focus-visible:ring-[#075E54] focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <img src={whatsAppIcon} alt="" aria-hidden="true" width={24} height={24} className="h-6 w-6 object-contain" />
        </a>
      </div>

        {/* Formulario do "Fale Conosco" do header. Overlay centrado: cabe em
          qualquer altura de viewport sem depender de ancoragem. */}
      {showForm && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          />
          <div 
            ref={modalRef}
            id="modal-contato"
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="modal-contato-titulo"
            className="relative z-10 w-full max-w-sm max-h-[85svh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 id="modal-contato-titulo" className="font-heading tracking-tight font-bold text-preto-hut8 text-lg">Contato Hut8</h3>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                aria-label="Fechar diálogo de contato"
                className="text-preto-hut8 hover:bg-gray-100 cursor-pointer p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-[#075E54] focus-visible:outline-none"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-2.5">
              <div>
                <label htmlFor="nomeUsuario" className="block text-xs font-semibold text-gray-700 mb-1">Seu Nome *</label>
                <input 
                  ref={firstInputRef}
                  id="nomeUsuario"
                  name="nomeUsuario"
                  required
                  placeholder="Ex: Ana Silva"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#075E54] text-preto-hut8 placeholder:text-[#595959] text-sm"
                />
              </div>
              <div>
                <label htmlFor="nomeEmpresa" className="block text-xs font-semibold text-gray-700 mb-1">Sua Empresa</label>
                <input 
                  id="nomeEmpresa"
                  name="nomeEmpresa"
                  placeholder="Ex: Minha Empresa Ltda."
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#075E54] text-preto-hut8 placeholder:text-[#595959] text-sm"
                />
              </div>
              <div>
                <label htmlFor="motivoContato" className="block text-xs font-semibold text-gray-700 mb-1">Motivo do Contato *</label>
                <input 
                  id="motivoContato"
                  name="motivoContato"
                  required
                  placeholder="Ex: Orçamento de Site ou App"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#075E54] text-preto-hut8 placeholder:text-[#595959] text-sm"
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
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#075E54] text-preto-hut8 placeholder:text-[#595959] text-sm"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-xs font-semibold text-gray-700 mb-1">Mensagem *</label>
                <textarea 
                  id="mensagem"
                  name="mensagem"
                  required
                  placeholder="Descreva seu projeto ou objetivo..."
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl h-20 resize-none outline-none focus:ring-2 focus:ring-[#075E54] text-preto-hut8 placeholder:text-[#595959] text-sm"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#075E54] text-white font-bold py-2.5 rounded-xl hover:bg-[#054c44] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#075E54] focus-visible:outline-none shadow-md mt-1 text-sm"
              >
                Enviar mensagem via WhatsApp
              </button>
              <p className="text-[11px] text-preto-hut8 text-center mt-1 leading-[1.5]">
                Seus dados são protegidos e utilizados exclusivamente para retorno de contato comercial (LGPD).
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;