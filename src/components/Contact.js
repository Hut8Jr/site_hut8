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
        <h4>Hiago Muniz - Diretor Comercial</h4>
        <a
          href='https://api.whatsapp.com/send?phone=5551997467149'
          target='_blank'
        >
          (51) 99746-7149
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

