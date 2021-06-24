import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 874,
    minHeight: 750,
    margin: "auto",
    marginTop: 80,
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
    backgroundImage: `-webkit-linear-gradient(96deg, #fdfeff 81%, #0d1117 15%)`,
    width: "100%",
    height: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20% 20% 10%",
    [theme.breakpoints.down("lg")]: {
      backgroundImage: `-webkit-linear-gradient(96deg, #fdfeff 84%, #0d1117 16%)`,
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: `-webkit-linear-gradient(96deg, #fdfeff 81%, #0d1117 19%)`,
      padding: "24% 20% 10%",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `-webkit-linear-gradient(96deg, #fdfeff 86%, #0d1117 14%)`,
      padding: "31% 20% 10%",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `-webkit-linear-gradient(96deg, #fdfeff 91%, #0d1117 9%)`,
      height: 700,
      padding: "130px 10% 10%",
    },
  },
  footerCon: {
    width: "100%",
    height: 455,
    [theme.breakpoints.down("sm")]: {
      padding: "5%",
    },
  },
}));

export default useStyles;

//! Love this color #1b2027
//! Love this color #264b73
//! Replace all mobile bg color with this #161e28

