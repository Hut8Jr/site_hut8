import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoHut from '../assets/Header/hut.svg';

export default function Header({ setShowForm }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const hamburgerBtnRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const isFirstMount = useRef(true);

    // Gerencia foco e tecla Escape para acessibilidade WCAG 2.1.2 / 2.4.3
    useEffect(() => {
        if (isFirstMount.current) {
            isFirstMount.current = false;
            return;
        }
        if (isMenuOpen) {
            setTimeout(() => {
                const firstLink = mobileMenuRef.current?.querySelector('a, button');
                firstLink?.focus();
            }, 50);
        } else {
            hamburgerBtnRef.current?.focus();
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isMenuOpen) return;

            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }

            if (e.key === 'Tab' && mobileMenuRef.current) {
                const focusableElements = mobileMenuRef.current.querySelectorAll(
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
    }, [isMenuOpen]);

    const navLinkClass = ({ isActive }) =>
        `font-medium transition-colors cursor-pointer ${
            isActive ? 'text-purple-800 font-bold' : 'text-gray-600 hover:text-purple-800'
        }`;

    const mobileNavLinkClass = ({ isActive }) =>
        `text-xl font-medium w-full text-left transition-colors cursor-pointer ${
            isActive ? 'text-purple-800 font-bold' : 'text-gray-600 hover:text-purple-800'
        }`;

    // Quando o menu mobile está aberto, esconde o botão flutuante do WhatsApp
    // para ele nunca aparecer por cima do painel lateral (bug de z-index)
    useEffect(() => {
        document.body.classList.toggle('menu-aberto', isMenuOpen);
        return () => document.body.classList.remove('menu-aberto');
    }, [isMenuOpen]);
    return (
        <header className="border-b border-gray-200 w-full bg-white sticky top-0 z-50">
            {/* Skip link para acessibilidade */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:p-3 focus:bg-[#6B0F9C] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none font-semibold text-sm"
            >
                Pular para o conteúdo principal
            </a>

            <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center gap-4">
                <Link to="/" className="flex items-center group" aria-label="Hut8 - Página Inicial">
                    <img 
                        src={logoHut} 
                        alt="Hut 8 Jr. Logo" 
                        width="60"
                        height="60"
                        className="w-15 h-15 drop-shadow-[0_5px_7px_rgba(132,204,22,0.3)]"
                    />
                    <span className="text-purple-800 text-2xl font-bold">Hut8</span>
                </Link>
                
                {/* Botão Mobile (Hambúrguer) visível apenas em telas menores */}
                <button 
                    ref={hamburgerBtnRef}
                    type="button"
                    className="md:hidden p-2 text-gray-600 focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none rounded-lg cursor-pointer"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Abrir menu de navegação"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Navegação Desktop (Escondida no mobile) */}
                <nav aria-label="Navegação Principal" className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-6">
                        <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                        <li><NavLink to="/projetos" className={navLinkClass}>Projetos</NavLink></li>
                        <li><NavLink to="/servicos" className={navLinkClass}>Serviços</NavLink></li>
                        <li><NavLink to="/equipe" className={navLinkClass}>Nossa Equipe</NavLink></li>
                    </ul>
                    <button 
                        type="button"
                        onClick={() => { setShowForm(true); setIsMenuOpen(false); }} 
                        className="bg-purple-800 text-white font-medium px-6 py-2 rounded-full shadow-lg shadow-purple-800/40 hover:bg-purple-900 focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none transition-colors cursor-pointer"
                    >
                        Fale Conosco
                    </button>
                </nav>
            </div>

            {/* Fundo escurecido ao abrir o menu lateral (não focável) */}
            {isMenuOpen && (
                <div 
                    aria-hidden="true"
                    className="fixed inset-0 bg-black/50 z-[150] md:hidden cursor-default" 
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
            
            {/* Menu Lateral Mobile com Focus Trap */}
            <div 
                ref={mobileMenuRef}
                id="mobile-menu"
                role="dialog" 
                aria-modal="true" 
                aria-label="Menu de navegação mobile"
                aria-hidden={!isMenuOpen}
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-[200] transform transition-all duration-300 ease-in-out md:hidden ${
                    isMenuOpen ? 'translate-x-0 opacity-100 pointer-events-auto visible' : 'translate-x-full opacity-0 pointer-events-none invisible'
                }`}
            >
                {/* Botão de Fechar */}
                <div className="flex justify-end p-6">
                    <button 
                        type="button"
                        onClick={() => setIsMenuOpen(false)} 
                        className="text-gray-600 cursor-pointer p-1 rounded-lg focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none"
                        aria-label="Fechar menu de navegação"
                    >
                        <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Links Mobile */}
                <ul className="flex flex-col gap-6 px-6">
                    <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/projetos" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClass}>Projetos</NavLink></li>
                    <li><NavLink to="/servicos" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClass}>Serviços</NavLink></li>
                    <li><NavLink to="/equipe" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClass}>Nossa Equipe</NavLink></li>
                    <li className="mt-4">
                        <button 
                            type="button"
                            onClick={() => { setShowForm(true); setIsMenuOpen(false); }} 
                            className="bg-purple-800 text-white font-medium w-full py-3 rounded-full shadow-lg hover:bg-purple-900 focus-visible:ring-2 focus-visible:ring-[#6B0F9C] focus-visible:outline-none transition-colors cursor-pointer"
                        >
                            Fale Conosco
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}