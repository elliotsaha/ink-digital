import React from "react"
import Layout from "../../components/layout"
import PanelOne from "../../components/services/subpages/searchEngineOptimization/PanelOne"
import PanelTwo from "../../components/services/subpages/searchEngineOptimization/PanelTwo"
import PanelThree from "../../components/services/subpages/searchEngineOptimization/PanelThree"
export default function searchEngineOptimization() {
  return (
    <Layout>
      <PanelOne />
      <PanelTwo />
      <PanelThree />
    </Layout>
  )
}
