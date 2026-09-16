import React from 'react';
import './card.css';

export function Card({ icone, titulo, descricao, corFundoIcone, aoClicar}) {
  return (
    <div className="estilo-cards">
      
      <div className={`estilo-icones ${corFundoIcone}`}>
        <img src={icone} alt="" aria-hidden="true" width={32} height={32} />
      </div>

      <h3 className="font-heading tracking-tight estilo-titulo-card">{titulo}</h3>

      <p className="estilo-texto-card leading-[1.5]">
        {descricao}
      </p>

      <button onClick={aoClicar} className="link-saiba-mais">
        <span className="linha-animada">Saiba mais</span>
        <span className="seta">→</span>
      </button>
    </div>
  );
}