import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#1e2123",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "6%",
      paddingRight: "6%",
    },
  },
  title: {
    backgroundImage:
      "radial-gradient(circle farthest-side at 30% 50%, #f5f5f5, #616161)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: 600,
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: 100,
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      marginBottom: 60,
      textTransform: "capitalize",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      marginBottom: 45,
    },
  },
  titleSpan: {
    fontSize: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));

export default useStyles;
