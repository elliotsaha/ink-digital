import React from "react"
import Layout from "../components/layout"
import PanelOne from "../components/homepage/PanelOne"
import PanelTwo from "../components/homepage/PanelTwo"
import SEO from "../components/seo"

import "../index.css"
const IndexPage = () => {

  return (
    <Layout>
      <div className="child">
        <PanelOne />
      </div>
      <div className="child">
        <PanelTwo />
      </div>
    </Layout>
  )
}

export default IndexPage
