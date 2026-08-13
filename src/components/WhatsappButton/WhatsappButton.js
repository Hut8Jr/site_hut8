import React from "react"
import WhatsappIcon from "../../assets/whatsapp.svg"
import "./style.css"

const WhatsappButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5551997467149"
      className="whatsapp-float"
      target="_blank"
    >
      <WhatsappIcon />
    </a>
  )
}

export default WhatsappButton
