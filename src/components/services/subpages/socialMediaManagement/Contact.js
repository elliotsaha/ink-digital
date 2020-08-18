import React, { useState } from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  createMuiTheme,
} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Error from "@material-ui/icons/Error"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: "#F1F2E4",
      position: "relative",
      overflow: "auto",
      lineHeight: 0,
    },
    text: {
      width: "auto",
      [theme.breakpoints.down(900)]: {
        textAlign: "center",
      },
      [theme.breakpoints.down(380)]: {
        width: "auto",
      },
    },
    title: {
      color: "#00447B",
      fontSize: "3rem",
      lineHeight: "2.6rem",
      fontFamily: "Poppins, sans-serif",
      paddingBottom: "2rem",
      fontWeight: 700,
    },
    para: {
      color: "#00447B",
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
    helperText: {
      fontFamily: "Poppins, sans-serif",
    },
    textField: {
      paddingBottom: "1.5rem",
      "& label.Mui-focused": {
        color: "#00447B",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "bold",
      },
      "& label": {
        color: "#00447B",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 600,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#00447B",
      },
      "& .MuiOutlinedInput-root": {
        width: "30rem",
        [theme.breakpoints.down(1100)]: {
          width: "20rem",
        },
        [theme.breakpoints.down(900)]: {
          width: "25rem",
        },
        [theme.breakpoints.down(440)]: {
          width: "20rem",
        },
        [theme.breakpoints.down(360)]: {
          width: "16rem",
        },
        "& fieldset": {
          borderColor: "#00447B",
          borderWidth: "0.2rem",
          color: "#00447B",
        },
        "&:hover fieldset": {
          borderColor: "#00447B",
          borderWidth: "0.2rem",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#00447B",
          borderWidth: "0.2rem",
        },
      },
    },
    textFieldError: {
      paddingBottom: "1.5rem",
      "& label.Mui-focused": {
        color: "#00447B",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "bold",
      },
      "& label": {
        color: "#00447B",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 600,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#00447B",
      },
      "& .MuiOutlinedInput-root": {
        width: "25rem",
        [theme.breakpoints.down(1100)]: {
          width: "20rem",
        },
        [theme.breakpoints.down(900)]: {
          width: "25rem",
        },
        "& fieldset": {
          borderColor: "#00447B",
          borderWidth: "0.2rem",
          color: "#00447B",
        },
        "&:focus fieldset": {
          borderColor: "#00447B",
          borderWidth: "0.2rem",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#00447B",
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
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      padding: "0.7rem",
      transition: "all 0.4s ease",
      "&:hover": {
        backgroundColor: "#DD2854",
        opacity: "85%",
      },
    },
    error: {
      verticalAlign: "middle",
      width: "1rem",
      marginRight: "0.5rem",
      marginLeft: "-0.8rem",
    },
  })
)
export default function Contact() {
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
      setNameError(
        <div>
          <Error className={classes.error} />
          <span>Required Field</span>
        </div>
      )
    }
    // Regex expression to know if email is invalid
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) !== true
    ) {
      e.preventDefault()
      setIsEmailError(true)
      setEmailError(
        <div>
          <Error className={classes.error} />
          <span>Invalid Email</span>
        </div>
      )
    }
    if (paragraph === "") {
      e.preventDefault()
      setIsParagraphError(true)
      setParagraphError(
        <div>
          <Error className={classes.error} />
          <span>Required Field</span>
        </div>
      )
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <div className={classes.title}>Contact Us</div>
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
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  color: "#00447B",
                },
              }}
              FormHelperTextProps={{
                className: classes.helperText,
              }}
              className={
                isNameError ? classes.textFieldError : classes.textField
              }
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
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  color: "#00447B",
                },
              }}
              FormHelperTextProps={{
                className: classes.helperText,
              }}
              className={
                isEmailError ? classes.textFieldError : classes.textField
              }
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
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  color: "#00447B",
                },
              }}
              FormHelperTextProps={{
                className: classes.helperText,
              }}
              multiline
              rows={8}
              className={
                isParagraphError ? classes.textFieldError : classes.textField
              }
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
    </div>
  )
}
