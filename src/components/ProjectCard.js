import React from "react"
import styled from "styled-components"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCard = ({ content }) => {
  const image = getImage(content.icon)

  return (
    <Wrapper>
      <GatsbyImage image={image} alt={content.name} />
      <div className="project-content">
        <div className="project-description">
          <h1>{content.name}</h1>
          <p>{content.description.description}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    border-radius: 16px;
  }
  .project-description h1 {
    margin: 20px;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: black;
  }
  .project-description p {
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #6f6f6f;
  }
  .project-content {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    max-width: 384px;
  }
`
export default ProjectCard
