import React from "react"
import Layout from "../components/layout"
import PanelOne from '../components/about/PanelOne'
import PanelTwo from '../components/about/PanelTwo'
import PanelThree from '../components/about/PanelThree'
export default function about() {
  return (
    <Layout>
      <div>
        <PanelOne />
        <PanelTwo />
        <PanelThree />
      </div>
    </Layout>
  )
}
