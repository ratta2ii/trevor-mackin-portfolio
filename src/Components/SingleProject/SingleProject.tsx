import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import useStyles from './SingleProjectStyles';
import { IProject } from "../../Models/IProject";

interface IProps {
  project: IProject;
  displayDetails: any;
}

const SingleProject: React.FC<IProps> = ({ project, displayDetails }) => {
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
              onClick={() => displayDetails(project)}
              style={{ backgroundColor: "#567798" }}
            >
              Details
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
                GitHub
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
