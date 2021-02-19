import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IProject } from "../../Models/IProject";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 100,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 60,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 80,
    },
  },
  imgContainer: {
    backgroundSize: "100% 100%",
    width: "100%",
    height: 300,
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    [theme.breakpoints.down("lg")]: {
      height: 230,
    },
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },
  overlayCon: {
    background: "#555555e8",
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  projectImg: {
    width: "100%",
    opacity: 0.1,
  },
  projectTitle: {
    backgroundImage:
      "radial-gradient(circle farthest-side at 40% 50%, #f5f5f5, #9e9e9e)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontSize: "1.6rem",
  },
  techsUsed: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 200,
    color: "#f5f5f5",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  optionsBtnsCon: {
    width: "100%",
    height: 40,
    border: "1px solid #757575",
    marginTop: -8,
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  optionsBtns: {
    width: "50%",
    height: "100%",
    fontSize: 11,
    color: "white",
    borderRadius: 0,
    outline: "2px solid #1f2123",
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
}));

interface IProps {
  project: IProject;
}

const SingleProject: React.FC<IProps> = ({ project }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={4} className={classes.root}>
      <Grid container justify="center">
        {/* //! Top Main Img Grid Container */}
        <Grid item xs={12} md={10}>
          <Box
            className={classes.imgContainer}
            style={{ backgroundImage: `url(${project.mainImage})` }}
          >
            <Box className={classes.overlayCon}>
              <Typography className={classes.projectTitle}>
                {project.name}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.optionsBtnsCon}>
            <Button
              className={classes.optionsBtns}
              style={{ backgroundColor: "#186a92" }}
            >
              Description
            </Button>
            <a
              className={classes.linkStyles}
              href={project.gitHubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.optionsBtns}
                style={{ backgroundColor: "#68af5c" }}
              >
                GitHub Repo
              </Button>
            </a>
          </Box>
          <Box>
            <Typography className={classes.techsUsed}>
              {project.techUsed}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleProject;
