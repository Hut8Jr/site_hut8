import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./style.css"
import TwitterIcon from "../../assets/twitter.svg"
import FacebookIcon from "../../assets/facebook.svg"
import InstagramIcon from "../../assets/instagram.svg"
import LinkedinIcon from "../../assets/linkedin.svg"

const Footer = ({ urlpath }) => {
  const url = urlpath === "/" ? "home" : "other"

  return (
    <footer className="page-footer">
      <div className={`bottom-menu ${url}`}>
        <div className="footer-logo">
          <Link to="/">
            <StaticImage src="../../assets/images/hut8_logo.png" width={110} />
          </Link>
        </div>
        <nav className={`footer-links ${url}`}>
          <Link to="/">Home</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/team">Nossa equipe</Link>
        </nav>
        <div className={`footer-address ${url} `}>
          <a
            href="https://goo.gl/maps/BkRpd2Ur1aRjKQXD9"
            target="_blank"
            rel="noreferrer"
          >
            <p>Rua Gomes Carneiro, nº 1</p>
            <p>Centro - CEP: 96010-610</p>
            <p>Pelotas, RS - Brasil</p>
          </a>
        </div>
        <div className="footer-network">
          <div className={`find-us ${url}`}>
            <p>Encontre a gente nas redes!</p>
          </div>
          <div className={`network-logos ${url}`}>
            <a
              href="https://twitter.com/huteight"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://facebook.com/hutEight/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/hut8_jr/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/hut8"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-rights">Todos os direitos reservados. &copy;</div>
    </footer>
  )
}

export default Footer
