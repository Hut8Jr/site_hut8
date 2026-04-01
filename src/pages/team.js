import React from "react"
import Layout from "../components/Layout"
import MemberDisplay from "../components/MemberDisplay/MemberDisplay"
import MemberCard from "../components/MembersCard/MemberCard"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import "../styles/team.css"
import Seo from "../components/Seo"
const Team = () => {
  const { teamBanner } = useStaticQuery(
    graphql`
      query {
        teamBanner: file(relativePath: { eq: "membersBanner.jpg" }) {
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
  const firstImage = getImage(teamBanner)
  return (
    <Layout>
      <Seo title="Equipe" />
      <div className="team-page">
        <BgImage image={firstImage} className="team-banner">
          <div className="team-banner-text">
            <h2>Conheça a nossa equipe</h2>
            <h3>
              Nosso time de jovens universitários apaixonados por tecnologia,
              empreendedorismo e inovação.
            </h3>
          </div>
        </BgImage>
        <div className="team-page_allSections">
          <div className="team-page_section">
            <h2>Professores elo</h2>
            <p>
              Responsáveis pela relação legal da empresa com a faculdade.
              Realizam um acompanhamento a distância do projeto.
            </p>
            <MemberDisplay memberRole="Professor elo" />
          </div>

          <div className="team-page_section">
            <h2>Diretores</h2>
            <p>
              Planejam e desenvolvem atividades de acordo a respectiva área da
              diretoria. Cargo eletivo em modelo anual.
            </p>
            <MemberDisplay memberRole="Diretor" />
          </div>
          {/* <div className="team-page_section">
            <h2>Conselheiros</h2>
            <p>
              Auxiliam os diretores no desenvolvimento das tarefas de gestão da
              empresa. Cargo eletivo em modelo semestral.
            </p>
            <MemberDisplay memberRole="Conselheiro" />
          </div> */}
          {/* <div className="team-page_section">
            <h2>Associados</h2>
            <p>
              Atuam nos projetos técnicos e recebem horas de ensino e extensão.
            </p>
            <MemberDisplay memberRole="Associado" />
          </div> */}
        </div>
      </div>
    </Layout>
  )
}
export default Team
