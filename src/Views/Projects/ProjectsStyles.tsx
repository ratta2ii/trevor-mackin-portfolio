import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0d1117",
    padding: "148px 15% 0 15%",
    [theme.breakpoints.down("md")]: {
      padding: "148px 10% 0 10%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "138px 2% 0 2%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "80px 0% 0 0%",
    },
  },
  paper: {
    position: "absolute",
    width: 700,
    maxWidth: '90%',
    maxHeight: '75%',
    minHeight: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',
    outline: '0px'
  },
  detailsText: {
    fontSize: ".8rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".7rem",
    },
  },
  closeIcon: {
    position: "relative",
    top: 0,
    right: -25,
    fontSize: 20,
    float: "right",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {},
  },
}));

export default useStyles;
