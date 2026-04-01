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
        icon {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`
const ordemDiretorias = {
    "Presidência": 1,
    "Projetos": 2,
    "Gestão de Pessoas": 3,
    "Marketing": 4,
    "Administrativo e Financeiro": 5
  };

const MemberDisplay = ({ memberRole }) => {
  const {
    allContentfulMember: { nodes: data },
  } = useStaticQuery(query)
  const filteredData = data.filter(member => member.role === memberRole)

  const sorted = filteredData.sort((a, b) => {
    if (memberRole === "Associado" || memberRole === "Professor elo") {
      return a.name.localeCompare(b.name)
    } else {
      // Pega o número da prioridade. Se a pessoa não tiver diretoria, joga pro final (peso 99)
      const pesoA = ordemDiretorias[a.board] || 99;
      const pesoB = ordemDiretorias[b.board] || 99;

      return pesoA - pesoB;
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
