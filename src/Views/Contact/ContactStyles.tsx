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
  iconBox: {
    height: 60,
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
    },
  },
  title: {
    backgroundImage:
      "radial-gradient(circle farthest-side at 30% 50%, #f5f5f5, #616161)",
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
