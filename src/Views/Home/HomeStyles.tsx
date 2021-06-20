import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 874,
    minHeight: 750,
    margin: "auto",
    marginTop: 75,
    backgroundColor: "#0d1117",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      width: 768,
    },
    [theme.breakpoints.down("sm")]: {
      width: 703,
    },
    [theme.breakpoints.down("xs")]: {
      width: "unset",
      padding: "0 5%",
      marginBottom: 25,
    },
  },
  techDisplayMainCon: {
    backgroundImage: `-webkit-linear-gradient(96deg, rgb(252 250 255) 81.5%, #0d1117 15%)`,
    width: "100%",
    height: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20% 20% 10%",
    [theme.breakpoints.down("lg")]: {
      backgroundImage: `-webkit-linear-gradient(96deg, rgb(252 250 255) 85%, #0d1117 15%)`,
    },
    [theme.breakpoints.down("md")]: {
      padding: "30% 20% 10%",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `-webkit-linear-gradient(96deg, rgb(252 250 255) 91%, #0d1117 9%)`,
      height: 700,
      padding: "120px 10% 10%",
    },
  },
  footerCon: {
    width: "100%",
    height: 400,
    [theme.breakpoints.down("sm")]: {
      padding: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      height: 455,
    },
  },
}));

export default useStyles;

//! Love this color #1b2027
