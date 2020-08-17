import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import mockup1 from "../../images/mockup1.png"
import mockup2 from "../../images/mockup2.png"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import rightArrow from "../../images/icons/rightArrow.svg"

import LocalAtmIcon from "@material-ui/icons/LocalAtm"
import PageviewOutlinedIcon from "@material-ui/icons/PageviewOutlined"
import DonutSmallOutlined from "@material-ui/icons/DonutSmallOutlined"
import DevicesIcon from "@material-ui/icons/Devices"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: "#F1F2E4",
      position: "relative",
      paddingTop: "3rem",
      overflow: "hidden",
      fontFamily: "Poppins, sans-serif",
    },
    title: {
      fontWeight: 700,
      fontSize: "2.3rem",
      lineHeight: "2.8rem",
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
      fontWeight: 500,
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
      paddingBottom: "3rem",
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
      gridTemplateRows: "100% 100%",
      [theme.breakpoints.down(900)]: {
        gridTemplateRows: "100% 1fr 100% 1fr",
        gridTemplateColumns: "1fr",
      },
    },
    mockup1: {
      width: "40rem",
      margin: 0,
      padding: 0,
      paddingBottom: "3rem",
   
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
      paddingTop: "2rem",
      marginTop: "auto",
      marginBottom: "auto",
      paddingBottom: "4rem",
      [theme.breakpoints.down(900)]: {
        paddingBottom: 0,
      },
    },
    serviceBody2: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "2rem",
      marginTop: "auto",
      marginBottom: "auto",
      paddingBottom: "4rem",
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
            <div>
              <PageviewOutlinedIcon className={classes.icon} />
            </div>
            <div className={classes.title}>Search Engine Optimization</div>
            <div className={classes.paragraph}>
              Using keyword optimization and content output to build domain
              authority, we will build or redesign your website to bring you to
              the first page of Google search so clients can find you.
            </div>
            <Button className={classes.button}>
              <Link
                to="/services/search-engine-optimization"
                className={classes.readMoreLink}
              >
                <div className={classes.readMoreContainer}>
                  <div className={classes.readMoreText}>Read More</div>
                  <img src={rightArrow} className={classes.arrowImage} />
                </div>
              </Link>
            </Button>
          </div>
          <div className={classes.serviceContainer1}>
            <div>
              <LocalAtmIcon className={classes.icon} />
            </div>
            <div className={classes.title}>Digital Paid Advertising</div>
            <div className={classes.paragraph}>
              We create custom-made ads to run on Google and Facebook to drive
              leads to your business. All the benefits of traditional
              advertising - at a fraction of the cost and twice the return on
              investment.
            </div>
            <Button className={classes.button}>
              <Link
                to="/services/digital-paid-advertising"
                className={classes.readMoreLink}
              >
                <div className={classes.readMoreContainer}>
                  <div className={classes.readMoreText}>Read More</div>
                  <img src={rightArrow} className={classes.arrowImage} />
                </div>
              </Link>
            </Button>
          </div>
        </div>
        <div className={classes.mockup1Container}>
          <img src={mockup1} className={classes.mockup1} />
        </div>
        <div className={classes.mockup2Container}>
          <img src={mockup2} className={classes.mockup1} />
        </div>
        <div className={classes.serviceBody2}>
          <div className={classes.serviceContainer1}>
            <div>
              <DonutSmallOutlined className={classes.icon} />
            </div>
            <div className={classes.title}>Automated Sales funnels</div>
            <div className={classes.paragraph}>
              Don't spend hours priming potential clients to buy your products
              or services. Let the system do that for you with email marketing
              and Facebook Messenger funnels.
            </div>
            <Button className={classes.button}>
              <Link
                to="/services/automated-sales-funnels"
                className={classes.readMoreLink}
              >
                <div className={classes.readMoreContainer}>
                  <div className={classes.readMoreText}>Read More</div>
                  <img src={rightArrow} className={classes.arrowImage} />
                </div>
              </Link>
            </Button>
          </div>
          <div className={classes.serviceContainer1}>
            <div>
              <DevicesIcon className={classes.icon} />
            </div>
            <div className={classes.title}>Social Media Management</div>
            <div className={classes.paragraph}>
              Facebook and Instagram are the new New York Times. Get the
              exposure you want with personalized viral content to build brand
              awareness.
            </div>
            <Button className={classes.button}>
            <Link to="/services/social-media-management" className={classes.readMoreLink}>
              <div className={classes.readMoreContainer}>
                <div className={classes.readMoreText}>Read More</div>
                <img src={rightArrow} className={classes.arrowImage} />
              </div>
            </Link>
              
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
