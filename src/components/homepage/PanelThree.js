import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Card from "./misc/Card"
import blueAndYellowInk from "../../images/blot1.mp4"
import { Link } from "gatsby"
import taxMechanic from "../../images/taxMechanic.png"
import rajahMaggay from "../../images/rajahMaggay.png"
import angelaLarson from "../../images/angelaLarson.png"

import Button from "@material-ui/core/Button"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: "transparent",
      position: "relative",
      paddingBottom: "12rem",
      paddingTop: "8rem",
      overflow: "auto",
      marginBottom: "-2px",
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      paddingRight: "0.25rem",
      [theme.breakpoints.down(768)]: {
        paddingRight: 0,
      },
    },
    cardBody: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down(768)]: {
        flexDirection: "column",
      },
    },
    card: {
      position: "relative",
      width: "100%",
      height: "100%",
      marginBottom: "0.9rem",
    },
    cardContainerWithShift: {
      paddingTop: "2.95rem",
      display: "flex",
      flexDirection: "column",
      paddingLeft: "0.7rem",
      [theme.breakpoints.down(768)]: {
        paddingLeft: 0,
        paddingTop: 0,
      },
    },
    rootInner: {
      display: "flex",
      justifyContent: "center",
    },
    videoContainer: {
      overflow: "auto",
    },
    video: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
      filter: "brightness(40%)",
    },
    caseStudiesTitle: {
      textTransform: "uppercase",
      color: "white",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 800,
      fontSize: "1.7rem",
      paddingBottom: "1.5rem",
    },
    image: {
      width: "30rem",
      height: "20rem",
      margin: 0,
      padding: 0,
      display: "block",
      objectFit: "cover",
    },
    imageLeft: {
      width: "30rem",
      height: "40.87rem",
      margin: 0,
      padding: 0,
      display: "block",
      objectFit: "cover",
      [theme.breakpoints.down(768)]: {
        height: "20rem",
      },
    },
    buttonContainer: {
      textAlign: "center",
      paddingTop: "1.5rem",
    },
    hoverText: {
      color: "white",
      fontSize: "20px",
      position: "absolute",
      textAlign: "center",
      zIndex: 3,
    },
    overlay: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      boxShadow: "inset 0 0 0 0.1px #DD2854",
      transition: "all ease 0.35s",
      opacity: "95%",
      "& > div": {
        opacity: 0,
        transition: "all ease 0.3s",
      },
      "&:hover": {
        boxShadow: "inset 30rem 0 0 0 #DD2854",
        opacity: "90%",
        "& > div": {
          opacity: 1,
          transition: "all ease 1s",
        },
      },
    },
    moreCaseStudiesButton: {
      zIndex: 3,
      color: "white",
      backgroundColor: "#DD2854",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      padding: "0.7rem",
      transition: "all 0.4s ease",
      "&:hover": {
        backgroundColor: "#DD2854",
        opacity: "85%",
      },
    },
    hoverTextInner: {
      textAlign: "left",
      paddingLeft: "1.5rem",
    },
    hoverTextSmall: {
      textTransform: "uppercase",
      color: "white",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 900,
      fontSize: "0.95rem",
    },
    hoverTextMain: {
      color: "white",
      fontSize: "2rem",
      lineHeight: "2.6rem",
      paddingTop: "2rem",
      paddingBottom: "2rem",
      fontFamily: "Poppins, sans-serif",
      paddingRight: "1rem",
      [theme.breakpoints.down(990)]: {
        fontSize: "1.3rem",
        lineHeight: "2rem",
      },
    },
  })
)
export default function PanelTwo() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.rootInner}>
        <div className={classes.cardBody}>
          <div className={classes.cardContainer}>
            <div className={classes.caseStudiesTitle}>Case Studies</div>

            <div className={classes.card}>
              <Link to="/ourwork/taxmechanic">
                <div className={classes.overlay}>
                  <span></span>
                  <div className={classes.hoverText}>
                    <div className={classes.hoverTextInner}>
                      <div className={classes.hoverTextSmall}>
                        Tax Consultation
                      </div>
                      <div className={classes.hoverTextMain}>
                        We’ll find out information about your tax issues to find
                        the best tax solution for you!
                      </div>
                      <div className={classes.hoverTextSmall}>Tax Mechanic</div>
                    </div>
                  </div>
                </div>

                <img src={taxMechanic} className={classes.imageLeft} />
              </Link>
            </div>
          </div>

          <div className={classes.cardContainerWithShift}>
            <div className={classes.card}>
              <Link to="/ourwork/rajahmaggay">
                <div className={classes.overlay}>
                  <div className={classes.hoverText}>
                    <div className={classes.hoverTextInner}>
                      <div className={classes.hoverTextSmall}>Politics</div>
                      <div className={classes.hoverTextMain}>
                        Research & Policy Advisor in YEG, Currently Running For
                        Edmonton City Council.
                      </div>
                      <div className={classes.hoverTextSmall}>Rajah Maggay</div>
                    </div>
                  </div>
                </div>
                <img src={rajahMaggay} className={classes.image} />
              </Link>
            </div>

            <div className={classes.card}>
              <Link to="/ourwork/angelalarson">
                <div className={classes.overlay}>
                  <div className={classes.hoverText}>
                    <div className={classes.hoverTextInner}>
                      <div className={classes.hoverTextSmall}>Real Estate</div>
                      <div className={classes.hoverTextMain}>
                        Angela Larson is a top producing real estate agent in
                        the Twin Cities metro area.
                      </div>
                      <div className={classes.hoverTextSmall}>
                        Angela Larson
                      </div>
                    </div>
                  </div>
                </div>
                <img src={angelaLarson} className={classes.image} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button className={classes.moreCaseStudiesButton}>
          View Case Studies
        </Button>
      </div>
      <div className={classes.videoContainer}>
        <video
          autoPlay
          disablePictureInPicture
          muted
          loop="loop"
          className={classes.video}
        >
          <source src={blueAndYellowInk} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
