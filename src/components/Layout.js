import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer/Footer"
import WhatsappButton from "./WhatsappButton/WhatsappButton"
import "normalize.css"
import "../styles/global.css"

const Layout = ({ children, urlpath }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <Footer urlpath={urlpath} />
      <WhatsappButton />
    </div>
  )
}

export default Layout
