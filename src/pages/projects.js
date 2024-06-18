import React from "react"
import Layout from "../components/Layout"
import ProjectsDisplay from "../components/ProjectsDisplay"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import "../styles/projects.css"
import Seo from "../components/Seo"

const Projects = () => {
  const { projectsbannerQuery } = useStaticQuery(
    graphql`
      query {
        projectsbannerQuery: file(relativePath: { eq: "projectsbanner.jpg" }) {
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

  const projectsbannerImage = getImage(projectsbannerQuery)

  return (
    <Layout>
      <Seo title="Projetos" />
      <div className="projects-page">
        <BgImage image={projectsbannerImage} className="projects-banner">
          <div className="projects-banner-text">
            <h2>Conheça alguns de nossos</h2>
            <h2>projetos desenvolvidos</h2>
            <h3>Projetos desenvolvidos em Pelotas e região.</h3>
          </div>
        </BgImage>
        <h1>Nossos projetos</h1>
        <ProjectsDisplay />
      </div>
    </Layout>
  )
}

export default Projects
