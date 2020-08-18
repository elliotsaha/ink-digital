import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Contact from "./Contact"
import mockup3 from "../../../../images/mockup3.png"
import mockup4 from "../../../../images/mockup4.png"
import mockup5 from "../../../../images/mockup5.png"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import rightArrow from "../../../../images/icons/rightArrow.svg"

import LocalAtmIcon from "@material-ui/icons/LocalAtm"
import PageviewOutlinedIcon from "@material-ui/icons/PageviewOutlined"
import DonutSmallOutlined from "@material-ui/icons/DonutSmallOutlined"
import DevicesIcon from "@material-ui/icons/Devices"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: "#F1F2E4",
      position: "relative",
      paddingTop: "1.5rem",
      overflow: "auto",
      fontFamily: "Poppins, sans-serif",
      [theme.breakpoints.down(900)]: {
        paddingBottom: '5rem',
      },
    },
    title: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: "3rem",
      paddingBottom: "0.5rem",
      color: "#00447B",
      [theme.breakpoints.down(1350)]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.down(950)]: {
        fontSize: "1.7rem",
        lineHeight: "2rem",
      },
      [theme.breakpoints.down(900)]: {
        fontSize: "2.3rem",
        lineHeight: "2.8rem",
      },
      [theme.breakpoints.down(400)]: {
        fontSize: "1.7rem",
        lineHeight: "2.2rem",
      },
    },
    paragraph: {
      maxWidth: "28rem",
      color: "#00447B",
      fontSize: "1.2rem",
      lineHeight: "2rem",
      [theme.breakpoints.down(1350)]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down(900)]: {
        fontSize: "1.1rem",
      },
    },
    icon: {
      color: "#00447B",
      fontSize: "4rem",
      margin: 0,
    },
    serviceContainer1: {
      paddingLeft: "2rem",

      paddingRight: "3rem",
    },
    serviceBody1: {
      display: "flex",
      flexDirection: "column",
      marginTop: "auto",
      marginBottom: "auto",
    },
    containerTop: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr",
      [theme.breakpoints.down(900)]: {
        gridRowGap: '3rem',
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr",
      },
    },
    mockup1: {
      width: "40rem",
      margin: 0,
      padding: 0,
    },
    mockup1Container: {
      marginLeft: "auto",
      marginTop: "auto",
      marginBottom: "auto",
      [theme.breakpoints.down(900)]: {
        gridRowStart: 1,
      },
    },

    mockup2Container: {
      marginRight: "auto",

      marginTop: "auto",
      marginBottom: "auto",
      paddingBottom: "1rem",
      [theme.breakpoints.down(900)]: {
        paddingBottom: 0,
 
      },
    },
    mockup3Container: {
      marginLeft: "auto",
      marginTop: "auto",
      marginBottom: "auto",
      paddingBottom: '5rem',
      [theme.breakpoints.down(900)]: {
        gridRowStart: 5,
        paddingBottom: 0,
      },
    },
    contactContainer: {
      marginTop: "auto",
      marginBottom: "auto",
      paddingLeft: "2rem",
      paddingRight: "3rem",
      paddingBottom: '5rem',
      [theme.breakpoints.down(900)]: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: '0rem',
      },
    },
    serviceBody2: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down(900)]: {
        paddingTop: "0rem",
      },
      marginTop: "auto",
      marginBottom: "auto",
    },
    arrowImage: {
      margin: 0,
    },
    readMoreContainer: {
      display: "flex",
      alignItems: "center",
    },
    readMoreText: {
      color: "#DD2854",
      fontFamily: "Poppins, sans-serif",
      textTransform: "uppercase",
      fontSize: "0.85rem",
      fontWeight: 900,
    },
    button: {
      marginLeft: 0,
      paddingLeft: 0,
    },
    readMoreLink: {
      textDecoration: "none",
    },
  })
)
export default function PanelTwo() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.containerTop}>
        <div className={classes.serviceBody1}>
          <div className={classes.serviceContainer1}>
            <div className={classes.title}>Why Advertising is important</div>
            <div className={classes.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus risus in tellus sodales, in luctus lorem molestie. Integer
              viverra odio leo, quis suscipit urna vehicula nec. Sed a libero
              mi. In ultrices quam ac auctor egestas. Nulla et ex vel felis
              lobortis eleifend non eu diam. Sed at enim risus. Morbi porttitor
              arcu eget mollis pretium. Aenean imperdiet nisl sed sem facilisis,
              quis ultrices magna tristique. Integer a eros quis eros
              condimentum sollicitudin.
            </div>
          </div>
        </div>
        <div className={classes.mockup1Container}>
          <img src={mockup3} className={classes.mockup1} />
        </div>
        <div className={classes.mockup2Container}>
          <img src={mockup4} className={classes.mockup1} />
        </div>
        <div className={classes.serviceBody2}>
          <div className={classes.serviceContainer1}>
            <div className={classes.title}>
              How Advertising Can Affect Your Business
            </div>
            <div className={classes.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus risus in tellus sodales, in luctus lorem molestie. Integer
              viverra odio leo, quis suscipit urna vehicula nec. Sed a libero
              mi. In ultrices quam ac auctor egestas. Nulla et ex vel felis
              lobortis eleifend non eu diam. Sed at enim risus. Morbi porttitor
              arcu eget mollis pretium.
            </div>
          </div>
        </div>

        <div className={classes.contactContainer}>
          <Contact />
        </div>

        <div className={classes.mockup3Container}>
          <img src={mockup5} className={classes.mockup1} />
        </div>
      </div>
    </div>
  )
}
