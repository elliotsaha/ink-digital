import React from "react"
import PanelOne from "../components/homepage/PanelOne"
import PanelTwo from "../components/homepage/PanelTwo"
import PanelThree from "../components/homepage/PanelThree"
import PanelFour from "../components/homepage/PanelFour"
import PanelFive from "../components/homepage/PanelFive"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Helmet } from "react-helmet"
import "../index.css"
const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
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
      <div className="child">
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default IndexPage
