import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../assets/Logo.svg"
import "../styles/navbar.css"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brandLogo">
        <Logo />
      </Link>
      <div className="nav-btn" onClick={() => setShow(!show)}>
        <span className="bar-one"></span>
        <span className="bar-two"></span>
        <span className="bar-three"></span>
      </div>
      <nav className={show ? "nav-links show-links" : "nav-links"}>
        <Link
          to="/"
          className="nav-link"
          activeClassName="active-link"
          onClick={() => setShow(false)}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="nav-link"
          activeClassName="active-link"
          onClick={() => setShow(false)}
        >
          Projetos
        </Link>
        <Link
          to="/team"
          className="nav-link"
          activeClassName="active-link"
          onClick={() => setShow(false)}
        >
          Nossa Equipe
        </Link>
        <div className="nav-link contact-link">
          <a
            href="https://www.instagram.com/hut8_jr/"
            className="btn"
            target="_blank"
            rel="noreferrer"
            onClick={() => setShow(false)}
          >
            Entre para a Hut!
          </a>
        </div>
      </nav>
    </nav>
  )
}

export default Navbar
