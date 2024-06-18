import React from "react"
import MemberCard from "../MembersCard/MemberCard"
import "./style.css"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allContentfulMember {
      nodes {
        name
        role
        board
        area
        icon {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`
const MemberDisplay = ({ memberRole }) => {
  const {
    allContentfulMember: { nodes: data },
  } = useStaticQuery(query)
  const filteredData = data.filter(member => member.role === memberRole)

  const sorted = filteredData.sort((a, b) => {
    if (memberRole === "Associado" || memberRole === "Professor elo") {
      return a.name.localeCompare(b.name)
    } else {
      return a.board.localeCompare(b.board)
    }
  })

  return (
    <div className="display snaps-inline">
      {sorted?.map(content => (
        <MemberCard content={content} />
      ))}
      <span className="display-spacer"></span>
    </div>
  )
}

export default MemberDisplay
