import React from "react"
import Layout from "../../components/layout"
import PanelOne from "../../components/services/subpages/automatedSalesFunnels/PanelOne"
import PanelTwo from "../../components/services/subpages/automatedSalesFunnels/PanelTwo"
import PanelThree from "../../components/services/subpages/automatedSalesFunnels/PanelThree"

export default function automatedSalesFunnels() {
  return (
    <Layout>
      <PanelOne />
      <PanelTwo />
      <PanelThree />
    </Layout>
  )
}
