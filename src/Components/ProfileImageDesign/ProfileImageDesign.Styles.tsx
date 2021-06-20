import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;