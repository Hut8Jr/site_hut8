import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import "../../styles/global.css"
import "./style.css"

const MemberCard = ({ content }) => {
  const image = getImage(content.icon)

  return (
    <div className="container">
      <div className="card">
        <GatsbyImage image={image} alt={content.name} />
        <div className="memberCard-content">
          <div className="memberCard-desc">
            <h3>{content.name}</h3>
            <p>{content.area}</p>
          </div>
          <h4>{content.board}</h4>
        </div>
      </div>
    </div>
  )
}

export default MemberCard
