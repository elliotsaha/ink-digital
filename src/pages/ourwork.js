import React from "react"
import PanelOne from "../components/ourwork/PanelOne"
import PanelTwo from "../components/ourwork/PanelTwo"
import PanelThree from '../components/ourwork/PanelThree'
import Layout from "../components/layout"
export default function ourwork() {
  return (
    <Layout>
      <PanelOne />
      <PanelTwo />
      <PanelThree />
    </Layout>
  )
}
