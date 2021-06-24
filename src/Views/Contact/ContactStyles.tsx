import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

// Trying out an alternate way of styling with styled components
export const StyledIcon = styled.i`
  font-size: 40px;
  color: #4caf50;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    animation: "fadeIn ease .5s",
    [theme.breakpoints.down("xs")]: {
      padding: "0 7%",
      fontSize: 8,
    },
  },
  iconsMainContainer: {
    margin: "auto",
    marginTop: 140,
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 100,
    },
  },
  thankYou: {
    backgroundImage:
      "radial-gradient(circle farthest-side at 30% 50%, #12272e, #2a374b)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: 600,
    fontSize: "3.5rem",
    marginTop: 100,
    textAlign: "center",
    letterSpacing: ".1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      marginTop: 90,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 40,
      marginBottom: 0,
      fontSize: "1.3rem"
    },
  },
}));

export default useStyles;

/**
 * ! Old component styles
 * import { makeStyles } from "@material-ui/core/styles";
  import styled from "styled-components";

  // Trying out an alternate way of styling with styled components
  export const StyledIcon = styled.i`
    font-size: 40px;
    color: #4caf50;
  `;

  const useStyles = makeStyles((theme) => ({
    root: {
      animation: "fadeIn ease .5s",
      [theme.breakpoints.down("xs")]: {
        padding: "0 7%",
      },
    },
    iconsMainContainer: {
      maxWidth: 430,
      margin: "auto",
      marginTop: 140,
      fontSize: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        maxWidth: 370,
        fontSize: "1rem",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: 100,
        paddingLeft: 30,
      },
    },
    title: {
      backgroundImage:
        "radial-gradient(circle farthest-side at 30% 50%, #eceff1, #616161)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      fontWeight: 600,
      fontSize: "3.5rem",
      marginTop: 100,
      textAlign: "center",
      letterSpacing: ".1rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
        marginTop: 90,
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: 0,
      },
    },
    iconBox: {
      height: 60,
      marginTop: 50,
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        marginTop: 20,
      },
    },
    spanTag: {
      marginLeft: 30,
      fontWeight: 400,
      letterSpacing: ".1rem",
      color: "#999999",
      [theme.breakpoints.down("xs")]: {
        marginLeft: 15,
        fontSize: ".9rem",
      },
    },
    linkStyles: {
      textDecoration: "none",
      color: "#bdbdbd",
    },
  }));

  export default useStyles;
 */

