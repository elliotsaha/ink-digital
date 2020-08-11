import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Card from "./misc/Card"
import blueAndYellowInk from "../../images/blot1.mp4"

import google from "../../images/google.jpg"
import facebook from "../../images/facebook.jpg"
import microsoft from "../../images/microsoft.jpg"
import apple from "../../images/apple.jpg"

import Button from "@material-ui/core/Button"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: "transparent",
      position: "relative",
      paddingBottom: "12rem",
      paddingTop: "8rem",
      overflow: "auto",
      marginBottom: '-2px',
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
      fontSize: '1.7rem',
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
        height: '20rem',
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
      boxShadow: "inset 0 0 0 0 #DD2854",
      "-webkit-transition": "all ease 0.8s",
      "moz-transition": "all ease 0.8s",
      transition: "all ease 0.3s",
      opacity: "95%",
      "& > div": {
        opacity: 0,
        transition: "all ease 1s",
      },
      "&:hover": {
        boxShadow: "inset 30rem 0 0 0 #DD2854",
        opacity: "95%",
        "& > div": {
          opacity: 1,
          transition: "all ease 2.6s",
        },
      },
    },
    moreCaseStudiesButton: {
      zIndex: 3,
      color: "white",
      backgroundColor: "#DD2854",
      textTransform: "none",
      fontFamily: "Lato, sans-serif",
      fontWeight: "bold",
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
      fontFamily: "Lato, sans-serif",
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
              <div className={classes.overlay}>
                <div className={classes.hoverText}>
                  <div className={classes.hoverTextInner}>
                    <div className={classes.hoverTextSmall}>
                      Profesional Services
                    </div>
                    <div className={classes.hoverTextMain}>
                      Unique branding is key when competing in a crowded marketspace
                    </div>
                    <div className={classes.hoverTextSmall}>Google Inc.</div>
                  </div>
                </div>
              </div>

              <img src={google} className={classes.imageLeft} />
            </div>
          </div>

          <div className={classes.cardContainerWithShift}>
            <div className={classes.card}>
              <div className={classes.overlay}>
                <div className={classes.hoverText}>
                  <div className={classes.hoverTextInner}>
                    <div className={classes.hoverTextSmall}>
                      Profesional Services
                    </div>
                    <div className={classes.hoverTextMain}>
                      Reaching new audiences with targeted digital marketing
                      campaigns
                    </div>
                    <div className={classes.hoverTextSmall}>Microsoft Inc.</div>
                  </div>
                </div>
              </div>
              <img src={microsoft} className={classes.image} />
            </div>

            <div className={classes.card}>
              <div className={classes.overlay}>
                <div className={classes.hoverText}>
                  <div className={classes.hoverTextInner}>
                    <div className={classes.hoverTextSmall}>
                      Profesional Services
                    </div>
                    <div className={classes.hoverTextMain}>
                      Expanding the tech market by bringing in unique and elegant products
                    </div>
                    <div className={classes.hoverTextSmall}>Apple Inc.</div>
                  </div>
                </div>
              </div>
              <img src={apple} className={classes.image} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button className={classes.moreCaseStudiesButton}>
          More Case Studies
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
