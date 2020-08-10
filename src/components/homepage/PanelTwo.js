import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Card from "./misc/Card"
import blueInkUp from "../../images/blueInkUp.mp4"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: "transparent",
      position: "relative",
      paddingBottom: "5rem",
      paddingTop: "5rem",
      overflow: "auto",
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
    cardBody: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down(768)]: {
        flexDirection: "column",
      },
    },
    card: {
      paddingBottom: "1.5rem",
      paddingTop: "1.5rem",
    },
    cardShifter: {
      marginTop: "3rem",
      [theme.breakpoints.down(768)]: {
        marginTop: 0,
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
    servicesTitle: {
      textTransform: "uppercase",
      color: "white",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 800,
      fontSize: '1.7rem',
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
          <div className={classes.servicesTitle}>Services</div>
            <div className={classes.card}>
              <Card
                title="Search Engine Optimization"
                paragraph="Using keyword optimization and content output to build domain authority, we will build or redesign your website to bring you to the first page of Google search so clients can find you."
              />
            </div>

            <div className={classes.card}>
              <Card
                title="Automated Sales funnels"
                paragraph="Don't spend hours priming potential clients to buy your products or services. Let the system do that for you with email marketing and Facebook Messenger funnels."
              />
            </div>
          </div>
          <div className={classes.cardContainer}>
            <div className={classes.cardShifter}>
              <div className={classes.card}>
                <Card
                  title="Digital Paid Advertising"
                  paragraph="We create custom-made ads to run on Google and Facebook to drive leads to your business. All the benefits of traditional advertising - at a fraction of the cost and twice the return on investment."
                />
              </div>

              <div className={classes.card}>
                <Card
                  title="Social Media Management"
                  paragraph="Facebook and Instagram are the new New York Times. Get the exposure you want with personalized viral content to build brand awareness."
                />
              </div>
            </div>
          </div>
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
          <source src={blueInkUp} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
