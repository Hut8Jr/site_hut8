import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import "../styles/404.css"
const Error = () => {
  return (
    <Layout>
      <Seo title="Erro 404" />
      <div className="error-404">
        <h1>ERRO 404</h1>
      </div>
    </Layout>
  )
}

export default Error
