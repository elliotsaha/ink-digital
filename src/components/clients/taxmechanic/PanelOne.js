import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import taxMechanicCS from "../../../images/taxMechanicCS.png"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#1F3B4E",
      paddingTop: "5rem",
      overflow: 'hidden',
    },
    mainTitle: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "bolder",
      color: "white",
      fontSize: "5rem",
      lineHeight: "6.5rem",
      paddingBottom: "2rem",
      [theme.breakpoints.down(970)]: {
        fontSize: "3rem",
        lineHeight: "4rem",
      },
      [theme.breakpoints.down(750)]: {
        fontSize: "2.3rem",
        lineHeight: "3rem",
      },
    },
    image: {
      width: "100%",
      objectFit: "cover",
      margin: 0,
    },
    imageContainer: {
      backgroundColor: "#3C3C41",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontFamily: "Poppins, sans-serif",
      color: "white",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "2rem",
      [theme.breakpoints.down(981)]: {
        paddingLeft: "1rem",
      },
    },
    subTitles: {
      paddingBottom: "0.5rem",
      textTransform: "uppercase",
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    para: {
      maxWidth: "60rem",
      paddingBottom: "2rem",
      [theme.breakpoints.down(750)]: {
        fontSize: "0.9rem",
      },
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  })
)
export default function PanelOne() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <div className={classes.text}>
          <div className={classes.mainTitle}>
            Tax Mechanic.
          </div>
          <div>
            <div className={classes.subTitles}>Who Are They</div>
            <div className={classes.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus, dolor et semper malesuada, velit ex imperdiet ante, at
              fringilla ipsum arcu sed dui. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed tempus, dolor et semper
              malesuada, velit ex imperdiet ante, at fringilla ipsum arcu sed
              dui.
            </div>
          </div>
          <div>
            <div className={classes.subTitles}>The Struggle</div>
            <div className={classes.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus, dolor et semper malesuada, velit ex imperdiet ante, at
              fringilla ipsum arcu sed dui. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed tempus, dolor et semper
              malesuada, velit ex imperdiet ante, at fringilla ipsum arcu sed
              dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus, dolor et semper malesuada, velit ex imperdiet ante, at
              fringilla ipsum arcu sed dui.
            </div>
          </div>
        </div>
      </div>

      <div className={classes.imageContainer}>
        <img src={taxMechanicCS} className={classes.image} />
      </div>
    </div>
  )
}
