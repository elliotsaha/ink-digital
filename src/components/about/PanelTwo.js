import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import TurniSaha from "../../images/employees/TurniSaha.jpg"
import StephanieSimpson from "../../images/employees/StephanieSimpson.jpg"
import HerilSaha from "../../images/employees/HerilSaha.png"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#F1F2E4",
      paddingTop: "2rem",
    },
    employeesContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      maxWidth: "90rem",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.down(1124)]: {
        gridTemplateColumns: '1fr'
      },
    },
    employeeTextContainer: {
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
      color: "#00447B",
      [theme.breakpoints.down(1124)]: {
        paddingBottom: '2rem',
      },
    },
    employeeImageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: "1rem",
      objectFit: "cover",
      maxHeight: "20rem",
      overflow: "hidden",
    },
    employeeImage: {
      overflow: "hidden",
      width: "20rem",
      height: "auto",
      margin: 0,
      height: "19rem",
      transition: "all 0.3s ease",
    },
    employeeSubTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      paddingTop: "0.3rem",
      paddingBottom: "0.6rem",
    },
    employeeName: {
      paddingBottom: "0.5rem",
      fontSize: "2rem",
      fontWeight: "700",
      lineHeight: "2rem",
    },
    employeeDescription: {
      marginRight: "3.5rem",
      marginLeft: "3.5rem",
      [theme.breakpoints.down(1124)]: {
        marginRight: '10rem',
        marginLeft: '10rem',
      },
      [theme.breakpoints.down(689)]: {
        marginRight: '1.2rem',
        marginLeft: '1.2rem',
      },
    },
  })
)
export default function PanelTwo() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.employeesContainer}>
        <div>
          <div className={classes.employeeImageContainer}>
            <img
              src={HerilSaha}
              alt="Heril Saha"
              className={classes.employeeImage}
            />
          </div>
          {/* No Picture For Heril Saha Yet */}
          <div className={classes.employeeTextContainer}>
            <div className={classes.employeeName}>Heril Saha</div>
            <div className={classes.employeeSubTitle}>CTO</div>
            <div className={classes.employeeDescription}>
              Reprehenderit ullamco qui enim et aute sit do amet incididunt
              dolore commodo dolor. Anim incididunt do enim enim veniam.
            </div>
          </div>
        </div>
        <div>
          <div className={classes.employeeImageContainer}>
            <img
              src={TurniSaha}
              alt="Turni Saha"
              className={classes.employeeImage}
            />
          </div>

          <div className={classes.employeeTextContainer}>
            <div className={classes.employeeName}>Turni Saha</div>
            <div className={classes.employeeSubTitle}>CEO</div>
            <div className={classes.employeeDescription}>
              Reprehenderit ullamco qui enim et aute sit do amet incididunt
              dolore commodo dolor. Anim incididunt do enim enim veniam.
            </div>
          </div>
        </div>
        <div>
          <div className={classes.employeeImageContainer}>
            <img
              src={StephanieSimpson}
              alt="Stephanie Simpson"
              className={classes.employeeImage}
            />
          </div>

          <div className={classes.employeeTextContainer}>
            <div className={classes.employeeName}>Stephanie Simpson</div>
            <div className={classes.employeeSubTitle}>CMO</div>
            <div className={classes.employeeDescription}>
              Reprehenderit ullamco qui enim et aute sit do amet incididunt
              dolore commodo dolor. Anim incididunt do enim enim veniam.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
