import React from "react"
import Layout from "../components/layout"
import PanelOne from "../components/homepage/PanelOne"
import PanelTwo from "../components/homepage/PanelTwo"
import PanelThree from "../components/homepage/PanelThree"
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
      <div className="child">
        <PanelThree />
      </div>
    </Layout>
  )
}

export default IndexPage
