import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import rightArrow from "../../../images/icons/rightArrow.svg"
import { Link } from "gatsby"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      overflow: "auto",
      borderStyle: "solid",
      border: "0.2rem",
      color: "white",
      borderColor: "white",
      maxWidth: "20rem",
      padding: "2rem",
      borderRadius: "0.5rem",
    },
    cardTitle: {
      fontFamily: "Poppins, sans-serif",
      lineHeight: "2.3rem",
      fontWeight: "900",
      fontSize: "2rem",
    },
    image: {
      margin: 0,
      width: "5rem",
    },
    paragraphContainer: {
      height: "15rem",
      paddingTop: "1.2rem",
      fontFamily: "Poppins, sans-serif",
      paddingBottom: "0.9rem",
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

export default function Card({ title, paragraph, link }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <span className={classes.cardTitle}>{title}</span>
      </div>
      <div className={classes.paragraphContainer}>{paragraph}</div>
      <Button className={classes.button}>
        <Link
          to={link}
          className={classes.readMoreLink}
        >
          <div className={classes.readMoreContainer}>
            <div className={classes.readMoreText}>Read More</div>
            <img src={rightArrow} className={classes.arrowImage} />
          </div>
        </Link>
      </Button>
    </div>
  )
}
