import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#000000f0",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {},
  },
  paper: {
    minWidth: 650,
    width: "50%",
    padding: 50,
    [theme.breakpoints.down("xs")]: {
      minWidth: 335,
      padding: "45px 25px 25px",
    },
  },
  detailsText: {
    fontSize: ".8rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".7rem",
    },
  },
  closeIcon: {
    position: "relative",
    top: -30,
    right: -25,
    fontSize: 20,
    float: "right",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      top: -35,
      right: -20,
    },
    [theme.breakpoints.down("xs")]: {},
  },
}));

interface IProps {
  closeDetails: any;
  displayProject: any;
  currentProjDetails: any;
}

const Modal: React.FC<IProps> = ({
  closeDetails,
  displayProject,
  currentProjDetails,
}) => {
  const classes = useStyles();

  return (
    <Box
      style={{ display: !displayProject ? "none" : "flex" }}
      className={classes.root}
    >
      <Paper className={classes.paper}>
        <CancelPresentationIcon
          onClick={() => closeDetails()}
          className={classes.closeIcon}
        />
        <Typography className={classes.detailsText}>
          {currentProjDetails !== "" || null
            ? currentProjDetails
            : "Sorry. No details for this project at this time. Please check back again soon."}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Modal;
