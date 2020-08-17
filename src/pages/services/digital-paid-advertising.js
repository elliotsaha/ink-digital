import React from "react"
import Layout from "../../components/layout"
import PanelOne from "../../components/services/subpages/digitalPaidAdvertising/PanelOne"
import PanelTwo from "../../components/services/subpages/digitalPaidAdvertising/PanelTwo"
import PanelThree from "../../components/services/subpages/digitalPaidAdvertising/PanelThree"

export default function digitalPaidAdvertising() {
  return (
    <Layout>
      <PanelOne />
      <PanelTwo />
      <PanelThree />
    </Layout>
  )
}
