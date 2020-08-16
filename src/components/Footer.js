import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

//Images
import Instagram from "../images/icons/instagram.svg"
import LinkedIn from "../images/icons/linkedIn.svg"
import Twitter from "../images/icons/twitter.svg"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: "2.5rem",
      paddingBottom: "2rem",
      overflow: "hidden",
      backgroundColor: "black",
      position: "relative",
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
    },
    icons: {
      paddingLeft: "3rem",
      paddingRight: "3rem",
      textDecoration: "none",
      border: 0,
      boxShadow: "none",
      "&:visited": {
        border: 0,
      },
      "&:hover": {
        border: 0,
      },
      "&:link": {
        border: 0,
      },
      "&:active": {
        border: 0,
      },
      [theme.breakpoints.down(520)]: {
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      },
    },
    copyright: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "bolder",
      background:  "#DD2854",
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      textAlign: "center",
      paddingRight: "1.2rem",
      paddingLeft: "1.2rem",
    },
    iconInner: {
      width: "5rem",
    },
  })
)
export default function PanelEight() {
  const classes = useStyles()

  return (
    // Defining Ref for intersection observer
    <div className={classes.root}>
      <div className={classes.iconContainer}>
        {/*Social Media Icons*/}
        <div>
          <a
            href="https://github.com/HerilS"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.icons}
          >
            <img src={LinkedIn} alt="LinkedIn" className={classes.iconInner} />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/herilsaha"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.icons}
          >
            <img src={Twitter} alt="Twitter" className={classes.iconInner} />
          </a>
        </div>
        <div>
          <a
            href="https://ca.linkedin.com/in/herilsaha"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.icons}
          >
            <img
              src={Instagram}
              alt="Instagram"
              className={classes.iconInner}
            />
          </a>
        </div>
      </div>
      <div>
        <div className={classes.copyright}>
          {/*Copy right Notice*/}
          <span>
            Copyright {new Date().getFullYear()} Ink Digital. All rights
            reserved.
          </span>
        </div>
      </div>
    </div>
  )
}
