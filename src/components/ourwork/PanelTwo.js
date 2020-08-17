import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import taxMechanic from "../../images/taxMechanic.png"
import rajahMaggay from "../../images/rajahMaggay.png"
import angelaLarson from "../../images/angelaLarson.png"
import { Link } from "gatsby"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: "#F1F2E4",
      position: "relative",
      paddingBottom: "2.5rem",
      paddingTop: "4rem",
      overflow: "hidden",
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
    caseStudiesTitle: {
      fontFamily: "Poppins, sans-serif",
      color: "#00447B",
      fontSize: "4rem",
      fontWeight: 900,
      lineHeight: "4.5rem",
      textAlign: "center",
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
      marginTop: "2.95rem",
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
    overlayLeft: {
      [theme.breakpoints.down(768)]: {
        height: "20rem",
      },
      marginTop: "2.95rem",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "93.3%",
      width: "100%",
      boxShadow: "inset 0 0 0 0.1px #00447B",
      transition: "all ease 0.35s",
      opacity: "95%",
      "& > div": {
        opacity: 0,
        transition: "all ease 0.3s",
      },
      "&:hover": {
        boxShadow: "inset 30rem 0 0 0 #00447B",
        opacity: "90%",
        "& > div": {
          opacity: 1,
          transition: "all ease 1s",
        },
      },
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
      boxShadow: "inset 0 0 0 0.1px #00447B",
      transition: "all ease 0.35s",
      opacity: "95%",
      "& > div": {
        opacity: 0,
        transition: "all ease 0.3s",
      },
      "&:hover": {
        boxShadow: "inset 30rem 0 0 0 #00447B",
        opacity: "90%",
        "& > div": {
          opacity: 1,
          transition: "all ease 1s",
        },
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
      <div className={classes.caseStudiesTitle}>Case Studies</div>
      <div className={classes.rootInner}>
        <div className={classes.cardBody}>
          <div className={classes.cardContainer}>
            <div className={classes.card}>
              <Link to="/taxmechanic">
                <div className={classes.overlayLeft}>
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
              <Link to="/rajahmaggay">
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
              <Link to="/angelalarson">
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
    </div>
  )
}
