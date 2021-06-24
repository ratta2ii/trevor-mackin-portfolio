import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    maxWidth: "90%",
    maxHeight: "75%",
    minHeight: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowY: "auto",
    outline: "0px",
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  detailsText: {
    fontSize: ".9rem",
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
