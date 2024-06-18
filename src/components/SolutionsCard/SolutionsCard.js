import React from "react"
import "./style.css"

const SolutionsCard = ({ children, title, text }) => {
  return (
    <div className="solutions-card">
      <div className="solution-image">{children}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default SolutionsCard
