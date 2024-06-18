import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import "../styles/home.css"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Button from "../components/Button"
import SolutionsCard from "../components/SolutionsCard/SolutionsCard"
import Seo from "../components/Seo"

const Home = ({ location }) => {
  const { homebanner1Query, homebanner2Query } = useStaticQuery(
    graphql`
      query {
        homebanner1Query: file(relativePath: { eq: "homebanner1.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
        homebanner2Query: file(relativePath: { eq: "homebanner2.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const homebanner1Image = getImage(homebanner1Query)
  const homebanner2Image = getImage(homebanner2Query)

  return (
    <Layout urlpath={location.pathname}>
      <Seo title="Home" />
      <div className="home-page">
        <BgImage image={homebanner1Image} className="home-block1">
          <div className="home-banner1-content">
            <h1>Empresa Júnior da Computação - UFPel</h1>
            <h2>
              Desenvolvemos soluções tecnológicas personalizadas e inovadoras
              por um melhor custo benefício, aproximando jovens universitários
              do mercado de trabalho.
            </h2>
            <a
              href="https://www.instagram.com/hut8_jr/"
              target="_blank"
              rel="noreferrer"
            >
              <Button primary>Entre para a Hut!</Button>
            </a>
          </div>
        </BgImage>
        <div className="home-block2">
          <div className="block2-left">
            <h2>
              Trazemos o mercado de trabalho para dentro do meio acadêmico
            </h2>
            <p>
              Fundada em maio de 2014, a Hut8 é a empresa júnior dos cursos de
              Ciência e Engenharia da Computação, vinculada a Universidade
              Federal de Pelotas.
            </p>
            <p>
              Sem fins lucrativos, somos constituídos por uma equipe de jovens
              universitários que buscam obter conhecimento e experiência de
              mercado além das grades curriculares, dentro da área da tecnologia
              da informação.
            </p>
            <p>
              Por meio do uso de tecnologias modernas para o desenvolvimento de
              aplicações reais, oferecemos para nossos clientes produtos de
              qualidade por um melhor custo benefício.
            </p>
          </div>
          <div className="block2-right">
            <StaticImage
              src="../assets/images/homeimage1.png"
              alt="Pessoas reunidas no trabalho"
              placeholder="blurred"
              layout="constrained"
              width={640}
            />
          </div>
        </div>
        <BgImage image={homebanner2Image} className="home-block3">
          <div className="home-banner2-filter">
            <div className="home-banner2-content">
              <h2>
                Temos a solução e as ferramentas perfeitas a sua necessidade
              </h2>
              <p>
                A Hut8 conta com uma equipe de universitários prontos para
                atender você. Desde a definição do projeto até o desenvolvimento
                da sua aplicação, estaremos presentes para oferecer a você a
                melhor experiência.
              </p>
              <Link to="/projects">
                <Button primary>Acesse nosso portfólio</Button>
              </Link>
            </div>
          </div>
        </BgImage>
        <div className="home-block4">
          <div className="block4-card">
            <SolutionsCard
              children={
                <StaticImage
                  src="../assets/images/homeimage2.png"
                  alt="Plataformas web"
                  placeholder="blurred"
                  layout="constrained"
                  width={400}
                />
              }
              title="Plataformas web"
              text="Desenvolvimento de sites, sistemas e lojas virtuais, com as tecnologias
      mais modernas do mercado"
            />
          </div>
          <div className="block4-card">
            <SolutionsCard
              children={
                <StaticImage
                  src="../assets/images/homeimage3.png"
                  alt="Aplicativos mobile"
                  placeholder="blurred"
                  layout="constrained"
                  width={400}
                />
              }
              title="Aplicativos mobile"
              text="Leve sua empresa para o digital e esteja mais perto de seus clientes por
      meio de aplicativos para iOS ou Android"
            />
          </div>
          <div className="block4-card">
            <SolutionsCard
              children={
                <StaticImage
                  src="../assets/images/homeimage4.png"
                  alt="Soluções personalizadas"
                  placeholder="blurred"
                  layout="constrained"
                  width={400}
                />
              }
              title="Soluções personalizadas"
              text="Seja para desenvolver uma solução para seu negócio ou tirar uma ideia do
      papel, estamos prontos para lhe ajudar"
            />
          </div>
        </div>
        <Contact />
      </div>
    </Layout>
  )
}

export default Home
