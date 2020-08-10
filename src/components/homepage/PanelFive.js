import React, { useState } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import blueAndYellowInk from "../../images/cityScenes.mp4"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
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
    textField: {
      paddingBottom: "1.5rem",
      "& label.Mui-focused": {
        color: "white",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& label": {
        color: "white",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "white",
      },
      "& .MuiOutlinedInput-root": {
        width: "29rem",
        [theme.breakpoints.down(600)]: {
          width: "20rem",
        },
        "& fieldset": {
          borderColor: "white",
          borderWidth: "0.2rem",
        },
        "&:hover fieldset": {
          borderColor: "white",
          borderWidth: "0.2rem",
        },
        "&.Mui-focused fieldset": {
          borderColor: "white",
          borderWidth: "0.2rem",
        },
      },
    },

    moreCaseStudiesButton: {
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
      zIndex: 3,
      color: "white",
      backgroundColor: "#DD2854",
      textTransform: "none",
      fontFamily: "Lato, sans-serif",
      fontWeight: "bold",
      padding: "0.7rem",
      transition: "all 0.4s ease",
      "&:hover": {
        backgroundColor: "#DD2854",
        opacity: "85%",
      },
    },
  })
)
export default function PanelFour() {
  const classes = useStyles()

  // States for form fields and error handling
  const [name, setName] = useState("")
  const [isNameError, setIsNameError] = useState(false)
  const [nameError, setNameError] = useState("")

  const [email, setEmail] = useState("")
  const [isEmailError, setIsEmailError] = useState(false)
  const [emailError, setEmailError] = useState("")

  const [paragraph, setParagraph] = useState("")
  const [isParagraphError, setIsParagraphError] = useState(false)
  const [paragraphError, setParagraphError] = useState("")

  // Setting the form field to state
  const onNameChange = event => {
    setName(event.target.value)
  }

  const onEmailChange = event => {
    setEmail(event.target.value)
  }

  const onParagraphChange = event => {
    setParagraph(event.target.value)
  }

  // On submit function function for error handling
  const onSubmit = e => {
    setIsEmailError(false)
    setIsNameError(false)
    setIsParagraphError(false)
    if (name === "") {
      e.preventDefault()
      setIsNameError(true)
      setNameError("Required Field")
    }
    // Regex expression to know if email is invalid
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) !== true
    ) {
      e.preventDefault()
      setIsEmailError(true)
      setEmailError("Invalid Email")
    }
    if (paragraph === "") {
      e.preventDefault()
      setIsParagraphError(true)
      setParagraphError("Required Field")
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <div className={classes.title}>Contact Us </div>
        <div className={classes.formContainer}>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thankyou"
          >
            <input type="hidden" name="bot-field" />{" "}
            {/*Hidden Input for bot detection*/}
            {/*Text field for Name*/}
            <TextField
              InputProps={{
                style: {
                  fontFamily: "Gilroy, sans-serif",
                  fontWeight: "bold",
                  color: "black",
                },
              }}
              FormHelperTextProps={{
                className: classes.helperText,
              }}
              className={classes.textField}
              name="Name"
              label="Name"
              value={name}
              onChange={onNameChange}
              helperText={nameError}
              error={isNameError}
              variant="outlined"
              color="secondary"
            />
            {/*Text field for Email*/}
            <TextField
              InputProps={{
                style: {
                  fontFamily: "Gilroy, sans-serif",
                  fontWeight: "bold",
                  color: "black",
                },
              }}
              FormHelperTextProps={{
                className: classes.helperText,
              }}
              className={classes.textField}
              name="Email"
              label="Email"
              value={email}
              onChange={onEmailChange}
              helperText={emailError}
              error={isEmailError}
              variant="outlined"
            />
            {/*Text field for Message*/}
            <TextField
              InputProps={{
                style: {
                  fontFamily: "Gilroy, sans-serif",
                  fontWeight: "bold",
                  color: "black",
                },
              }}
              FormHelperTextProps={{
                className: classes.helperText,
              }}
              multiline
              rows={10}
              className={classes.textField}
              name="Message"
              label="Message"
              value={paragraph}
              onChange={onParagraphChange}
              helperText={paragraphError}
              error={isParagraphError}
              variant="outlined"
            />
            <div>
              {/*Submit Button*/}
              <Button
                type="submit"
                className={classes.moreCaseStudiesButton}
                onClick={onSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
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
