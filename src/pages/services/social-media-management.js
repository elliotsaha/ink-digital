import React from "react"
import Layout from "../../components/layout"
import PanelOne from "../../components/services/subpages/socialMediaManagement/PanelOne"
import PanelTwo from "../../components/services/subpages/socialMediaManagement/PanelTwo"
import PanelThree from "../../components/services/subpages/socialMediaManagement/PanelThree"

export default function socialMediaManagement() {
  return (
    <Layout>
      <PanelOne />
      <PanelTwo />
      <PanelThree />
    </Layout>
  )
}
