import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0d1117",
    width: "100%",
    marginTop: 100,
    [theme.breakpoints.down("xs")]: {
      marginTop: 70,
      paddingLeft: "6%",
      paddingRight: "6%",
    },
  },
  title: {
    backgroundImage:
      "radial-gradient(circle farthest-side at 30% 50%, #eceff1, #616161)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: 600,
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: 100,
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
      marginBottom: 60,
      textTransform: "capitalize",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      marginBottom: 45,
    },
  },
}));

export default useStyles;
