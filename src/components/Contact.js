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
        <h4>Rafael Mattia - Diretor de Projetos</h4>
        <a
          href='https://api.whatsapp.com/send?phone=5553991639085'
          target='_blank'
        >
          (51) 9296-3600
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

