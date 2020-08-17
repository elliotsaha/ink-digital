import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import cityScenes from '../../images/cityScenes.mp4'
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      overflow: "auto",
    },
    videoContainer: {
      overflow: "auto",
    },
    video: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "45%",
      height: "91%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
      filter: "brightness(40%)",
    },
    text: {
      textAlign: "center",
      width: "100%",
      height: "90vh",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "bolder",
      fontSize: "5rem",
      lineHeight: '5rem',
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "auto",
      [theme.breakpoints.down(400)]: {
        fontSize: '3rem',
        lineHeight: "4rem",
    }
    },
  })
)
export default function PanelOne() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.videoContainer}>
        <video autoPlay muted loop="loop" className={classes.video}>
          <source src={cityScenes} type="video/mp4" />
        </video>
      </div>
      <div className={classes.text}>
        Our Services
      </div>
    </div>
  )
}
