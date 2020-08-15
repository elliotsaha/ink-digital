/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
