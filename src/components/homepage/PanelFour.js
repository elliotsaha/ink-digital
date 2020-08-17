import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import blueAndYellowInk from "../../images/blueAndYellowInk.mp4"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: "transparent",
      position: "relative",
      paddingBottom: "5rem",
      paddingTop: "5rem",
      overflow: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      lineHeight: 0,
      marginTop: "-1px",
      marginBottom: "-1px",
    },
    videoContainer: {
      overflow: "auto",
    },
    text: {
      width: "30rem",
      textAlign: "center",
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
      filter: "grayscale(1)",
      "webkit-filter": "grayscale(1)",
      filter: "brightness(20%)",
    },
    title: {
      color: "white",
      fontSize: "3rem",
      lineHeight: "2.6rem",
      fontFamily: "Poppins, sans-serif",
      paddingBottom: "2rem",
    },
    para: {
      color: "white",
      fontSize: "1rem",
      lineHeight: "1.7rem",
      fontFamily: "Poppins, sans-serif",
      marginRight: "2rem",
      marginLeft: "2rem",
    },
    buttonContainer: {
      textAlign: "center",
      paddingTop: "1.5rem",
    },
    moreCaseStudiesButton: {
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
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
    buttonLink: {
      textDecoration: "none",
      color: "white",
    },
  })
)
export default function PanelFour() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <div className={classes.title}>Our Mission </div>
        <div className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
          ligula tortor. Nullam mattis justo ut pharetra hendrerit. Nulla
          gravida mauris id ligula dignissim, bibendum aliquet nulla
          condimentum. Praesent tempor blandit sagittis. Maecenas ac porttitor
          risus. Vestibulum semper porttitor urna, sit amet condimentum ante
          hendrerit et. Cras tempus ultricies odio, finibus convallis diam
          elementum ut. Vivamus nec sodales lacus, id commodo nisi.
        </div>
        <div className={classes.buttonContainer}>
          <Button className={classes.moreCaseStudiesButton}>
            <Link to="/about" className={classes.buttonLink}>
              Read More
            </Link>
          </Button>
        </div>
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
