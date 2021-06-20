import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 869,
    minHeight: 750,
    margin: "auto",
    marginTop: 75,
    backgroundColor: "#0d1117",
    overflowX: "hidden",
    [theme.breakpoints.down("lg")]: {
      width: 874,
    },
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
  title: {
    marginTop: 110,
    backgroundImage:
      "radial-gradient(circle farthest-side at 50% 50%, white, #616161)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: 600,
    fontSize: "2.7rem",
    [theme.breakpoints.down("md")]: {
      marginTop: 75,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "3rem",
      marginTop: 100,
      marginBottom: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
      marginTop: 20,
      fontSize: "1.8rem",
      marginLeft: 0,
    },
  },
  profilePicGridItem: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: 20,
    },
  },
  imgDesignBoxOuter: {
    width: 280,
    height: 280,
    background: "#68af5c",
    marginTop: 65,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    animation: "fadeIn ease 2s",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      margin: "50px auto 0px auto",
      left: "-20px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "unset",
      marginBottom: 50,
      width: 200,
      height: 200,
    },
  },
  imgDesignBoxMiddle: {
    borderRadius: 10,
    background: "#009688",
    position: "relative",
    top: 10,
    left: 10,
    height: "100%",
    width: "100%",
  },
  imgDesignBoxInner: {
    borderRadius: 10,
    position: "relative",
    top: 10,
    left: 10,
    height: "100%",
    width: "100%",
  },
  profileImg: {
    width: "100%",
    borderRadius: 10,
  },
  bio: {
    fontSize: 16,
    color: "white",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 0 0 4%",
      textAlign: "unset",
    },
  },
  techDisplayMainCon: {
    backgroundImage: `-webkit-linear-gradient(96deg, rgb(252 250 255) 85%, #0f1010 15%)`,
    width: "100%",
    height: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20% 20% 10%",
    [theme.breakpoints.down("md")]: {
      padding: "30% 20% 10%",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `-webkit-linear-gradient(96deg, rgb(252 250 255) 91%, #0f1010 9%)`,
      height: 700,
      padding: "120px 10% 10%",
    },
  },
  footerCon: {
    width: "100%",
    // padding: 75,
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
