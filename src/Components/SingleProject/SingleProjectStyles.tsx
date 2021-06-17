import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 100,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 60,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 80,
    },
  },
  imgContainer: {
    backgroundSize: "100% 100%",
    width: "100%",
    height: 300,
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    [theme.breakpoints.down("lg")]: {
      height: 230,
    },
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },
  overlayCon: {
    top: 0,
    left: 0,
    position: "relative",
    width: "100%",
    height: "100%",
    background: "#9e9e9ead",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  projectImg: {
    width: "100%",
    opacity: 0.1,
  },
  projectTitle: {
    backgroundImage:
      "radial-gradient(circle farthest-side at 40% 50%, #f5f5f5, #9e9e9e)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontSize: "1.3rem",
  },
  techsUsed: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 200,
    color: "#f5f5f5",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  optionsBtnsCon: {
    width: "100%",
    height: 40,
    border: "1px solid #757575",
    marginTop: -8,
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  optionsBtns: {
    width: "50%",
    height: "100%",
    fontSize: 11,
    color: "white",
    borderRadius: 0,
    outline: "1px solid #1f2123",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#898a8a",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
    },
  },
  linkStyles: {
    textDecoration: "none",
    color: "#bdbdbd",
  },
}));

export default useStyles;