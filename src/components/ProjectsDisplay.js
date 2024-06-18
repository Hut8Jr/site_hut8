import React from "react"
import styled from "styled-components"
import ProjectCard from "./ProjectCard"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allContentfulProject {
      nodes {
        name
        description {
          description
        }
        icon {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

const ProjectsDisplay = () => {
  const {
    allContentfulProject: { nodes: data },
  } = useStaticQuery(query)

  return (
    <ProjectDisplay>
      {data?.map(content => (
        <ProjectCard content={content} />
      ))}
    </ProjectDisplay>
  )
}

const ProjectDisplay = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 32px;
  row-gap: 50px;
`
export default ProjectsDisplay
