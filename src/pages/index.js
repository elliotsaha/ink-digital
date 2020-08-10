import React from "react"
import Layout from "../components/layout"
import PanelOne from "../components/homepage/PanelOne"
import PanelTwo from "../components/homepage/PanelTwo"
import PanelThree from "../components/homepage/PanelThree"
import PanelFour from '../components/homepage/PanelFour'
import PanelFive from '../components/homepage/PanelFive'
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
      <div className="child">
        <PanelFour />
      </div>
      <div className="child">
        <PanelFive />
      </div>
    </Layout>
  )
}

export default IndexPage
