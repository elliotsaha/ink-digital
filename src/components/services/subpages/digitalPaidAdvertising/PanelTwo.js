import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      paddingTop: "4.5rem",
      background: "#F1F2E4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Poppins, sans-serif",
      color: "#00447B",
      flexDirection: "column",
      overflow: "hidden",
      paddingBottom: "4rem",
    },
    title: {
      fontWeight: 700,
      fontSize: "3.5rem",
      textAlign: "center",
      lineHeight: "4rem",
      paddingBottom: "0.5rem",
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
    paragraph: {
      fontSize: "1.3rem",
      lineHeight: "1.7rem",
      textAlign: "center",
      maxWidth: "35rem",
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
  })
)
export default function PanelTwo() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.title}>Digital Paid Advertising</div>
      <div className={classes.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
        risus in tellus sodales, in luctus lorem molestie. Integer viverra odio
        leo, quis suscipit urna vehicula nec. Sed a libero mi. In ultrices quam
        ac auctor egestas. Nulla et ex vel felis lobortis eleifend non eu diam.
        Sed at enim risus.
      </div>
    </div>
  )
}
