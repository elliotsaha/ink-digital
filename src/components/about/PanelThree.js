import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#F1F2E4",
      paddingTop: "5rem",
    },
    container: {
      maxWidth: "90rem",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
    },
    textContainer: {
      paddingLeft: "2.5rem",
      [theme.breakpoints.down(640)]: {
        padding: 0,
        textAlign: "center",
      },
    },
    mainTitle: {
      fontFamily: "Poppins, sans-serif",
      color: "#00447B",
      fontSize: "3rem",
      fontWeight: 900,
      textTransform: "uppercase",
      paddingBottom: "2.5rem",
    },
    valueContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      [theme.breakpoints.down(640)]: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr',
      },
    },
    valueInner: {
      color: "#00447B",
    },
    subPara: {
      paddingBottom: "2rem",
      paddingRight: "10rem",
      [theme.breakpoints.down(998)]: {
        paddingRight: '4rem',
      },
      fontFamily: "Poppins, sans-serif",
      [theme.breakpoints.down(640)]: {
        paddingRight: '2rem',
        paddingLeft:  '2rem',
        textAlign: "center",
      },
    },
    subTitle: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "1.7rem",
      fontWeight: 700,
      textTransform: "uppercase",
      paddingBottom: "0.75rem",
    },
  })
)
export default function PanelThree() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <div className={classes.mainTitle}>Our Values</div>
          <div className={classes.valueContainer}>
            <div className={classes.valueInner}>
              <div className={classes.subTitle}>Lorem Ipsum</div>
              <div className={classes.subPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
              </div>
            </div>
            <div className={classes.valueInner}>
              <div className={classes.subTitle}>Lorem Ipsum</div>
              <div className={classes.subPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
              </div>
            </div>
            <div className={classes.valueInner}>
              <div className={classes.subTitle}>Lorem Ipsum</div>
              <div className={classes.subPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
              </div>
            </div>
            <div className={classes.valueInner}>
              <div className={classes.subTitle}>Lorem Ipsum</div>
              <div className={classes.subPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
