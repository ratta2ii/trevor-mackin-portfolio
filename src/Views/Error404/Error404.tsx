import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 16,
    fontFamily: "monospace",
    textAlign: "center",
    color: "red",
    marginTop: 170,
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
  linkStyles: {
    textDecoration: "none",
    color: "dodgerblue",
    margin: "0 8px",
  },
}));

const Error404 = (props: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" >
        The page {props.location.pathname} does not exist!
      </Typography>
      <Typography style={{ marginTop: 10 }}>
        Would you like to return
        <Link to="/" className={classes.linkStyles}>
          HOME
        </Link>
        instead?
      </Typography>
    </Box>
  );
};

Error404.propTypes = {
  location: PropTypes.object,
};

export default Error404;
