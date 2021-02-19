import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#1e2123",
    padding: "100px 15% 0 15%",
    [theme.breakpoints.down("md")]: {
      padding: "100px 10% 0 10%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "100px 7% 0 7%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "100px 5% 0 5%",
    },
  },
}));

export default useStyles;
