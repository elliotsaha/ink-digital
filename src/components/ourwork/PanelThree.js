import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import code from "../../images/icons/code.svg"
import idea from "../../images/icons/idea.svg"
import seo from "../../images/icons/seo.svg"
import market from "../../images/icons/market.svg"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#F1F2E4",
      paddingTop: "5rem",
      overflow: "auto",
    },
    container: {
      maxWidth: "67rem",
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
    },
    textContainer: {
      textAlign: "center",
    },
    mainTitle: {
      fontFamily: "Poppins, sans-serif",
      color: "#00447B",
      fontSize: "4rem",
      fontWeight: 900,
      paddingBottom: "2.5rem",
      lineHeight: '4.5rem',
    },
    valueContainer: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
    },
    valueInner: {
      color: "#00447B",
    },
    subPara: {
      paddingBottom: "6rem",
      fontFamily: "Poppins, sans-serif",
      paddingLeft: "15rem",
      paddingRight: "15rem",
      textAlign: "center",
      [theme.breakpoints.down(1200)]: {
        paddingRight: "14rem",
        paddingLeft: "14rem",
      },
      [theme.breakpoints.down(876)]: {
        paddingRight: "8rem",
        paddingLeft: "8rem",
      },
      [theme.breakpoints.down(640)]: {
        paddingRight: "1.5rem",
        paddingLeft: "1.5rem",
      },
    },
    subTitle: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "1.7rem",
      fontWeight: 700,
      paddingBottom: "0.75rem",
    },
    icon: {
      width: '5rem',
    },
  })
)
export default function PanelThree() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <div className={classes.mainTitle}>Our Process</div>
          <div className={classes.valueContainer}>
            <div className={classes.valueInner}>
              <img src={idea} className={classes.icon} />
              <div className={classes.subTitle}>Planning and Designing</div>
              <div className={classes.subPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
              </div>
            </div>
            <div className={classes.valueInner}>
              <img src={code} className={classes.icon} />
              <div className={classes.subTitle}>Coding</div>
              <div className={classes.subPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
              </div>
            </div>
            <div className={classes.valueInner}>
              <img src={seo} className={classes.icon} />
              <div className={classes.subTitle}>Search Engine Optimization</div>
              <div className={classes.subPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
              </div>
            </div>
            <div className={classes.valueInner}>
              <img src={market} className={classes.icon} />
              <div className={classes.subTitle}>Digital Marketing</div>
              <div className={classes.subPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu mauris leo. Ut vitae lorem a diam dictum luctus eget vel ex.
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
