import React from "react";
import Button from "./Button";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className='contact-area'>
      <div className='contact-text'>
        <h3>Contato</h3>
        <p>Entre em contato conosco</p>
        <p>para futuros projetos</p>
      </div>
      <div className='contact-text'>
        <h4>Augusto Menchaca - Diretor de Projetos</h4>
        <a
          href='https://api.whatsapp.com/send?phone=5553999011310'
          target='_blank'
        >
          (53) 999011310
        </a>
      </div>
      <div className='contact-text'>
        <h4>E-mail</h4>
        <a href='mailto:hut8@inf.ufpel.edu.br'>hut8@inf.ufpel.edu.br</a>
      </div>
    </div>
  );
};

export default Contact;

