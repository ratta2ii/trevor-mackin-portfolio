import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#0d1117",
    marginBottom: 100,
    marginTop: -10,
    padding: "0 3%",
    animation: "fadeIn ease 1.5s",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 6%",
      marginBottom: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },
  gitHubRepoCount: {
    position: "absolute",
    top: 155,
    left: 35,
    [theme.breakpoints.down("xs")]: {
      position: "unset",
      top: "unset",
      left: "unset",
      textAlign: "center",
      marginBottom: 60,
    }, 
  },
  gitHubLinkStyles: {
    textDecoration: "none",
  },
  gitHubText: {
    color: "#eceff1",
    fontSize: ".9rem",
    fontWeight: 200,
    textDecoration: 'underline'
  },
  featuredCon: {
    width: 23,
    height: "100%",
    display: "flex",
    alignItems: "center",
    float: "right",
    marginRight: 25,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 25,
      marginBottom: -15,
      width: "100%",
      
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      marginBottom: 0,
      fontSize: 20,
    },
  },
  featuredCon2: {
    display: 'none',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      display: "block",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: -25,
    },
  },
  featuredCon3: {
    width: 25,
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: 30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    backgroundImage:
      "radial-gradient(circle farthest-side at 50% 50%, #d5f3ff, #616161)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: 600,
    fontSize: "1.6rem",
    wordBreak: "break-word",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      marginBottom: 10,
      textTransform: "capitalize",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      marginBottom: 0,
      marginLeft: "8%",
    },
  },
  imgContainer: {
    width: "100%",
    margin: "auto",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  projectImg: {
    width: "100%",
  },
  techsUsedTop: {
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 22,
    color: "#eceff1",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  techsUsedBottom: {
    display: "none",
    fontSize: 15,
    fontWeight: 100,
    marginTop: 15,
    textAlign: "center",
    color: "#eceff1",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      fontSize: 12,
    },
  },
  divider: {
    marginTop: 96,
    marginBottom: 50,
    height: 1,
    background: "#323538",
    [theme.breakpoints.down("sm")]: {
      marginTop: 60,
      marginBottom: 45,
    },
    [theme.breakpoints.down("xs")]: {
      opacity: 0,
      marginTop: 35,
      marginBottom: 35,
    },
  },
  optionsBtnsCon: {
    width: "100%",
    height: 40,
    marginTop: -5,
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    [theme.breakpoints.down("xs")]: {
      height: 30,
    },
  },
  optionsBtns: {
    width: "33.3%",
    height: "100%",
    backgroundColor: "#757676",
    fontSize: 11,
    outline: "1px solid #1f2123",
    color: "#eceff1",
    borderRadius: 0,
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
  spanLetterI: {
    marginLeft: 6,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  }
}));

export default useStyles;


