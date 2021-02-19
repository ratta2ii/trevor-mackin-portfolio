import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75%",
    maxWidth: 1100,
    margin: "auto",
    marginTop: 65,
    backgroundColor: "#1e2123",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 5% 0 5%",
    },
  },
  title: {
    backgroundImage:
      "radial-gradient(circle farthest-side at 50% 50%, #f5f5f5, #616161)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: 600,
    fontSize: "3.9rem",
    marginBottom: "5%",
    marginLeft: "8%",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.2rem",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      marginBottom: 70,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      marginBottom: 60,
      marginLeft: 0,
    },
  },
  imgDesignBoxOuter: {
    borderRadius: 10,
    borderTopLeftRadius: 10,
    background: "#68af5c",
    width: "350px",
    height: "350px",
    animation: "fadeIn ease 2s",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      margin: "0 auto 160px auto",
      left: "-30px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 125,
      width: 200,
      height: 200,
    },
  },
  imgDesignBoxMiddle: {
    borderRadius: 10,
    background: "#009688",
    position: "relative",
    top: "30px",
    left: "30px",
    height: "100%",
    width: "100%",
  },
  imgDesignBoxInner: {
    borderRadius: 10,
    position: "relative",
    top: 30,
    left: 30,
    height: "100%",
    width: "100%",
  },
  profileImage: {
    width: "80%",
    maxWidth: 550,
    border: "2px solid #292727",
    borderTopLeftRadius: "60px",
    borderBottomRightRadius: "60px",
    borderTopRightRadius: "3px",
    borderBottomLeftRadius: "3px",
    boxShadow: "inset 5em 1em gold",
  },
}));

export default useStyles;
