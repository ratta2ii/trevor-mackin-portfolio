import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import SingleProject from "../SingleProject/SingleProject";
import useStyles from "./ProjectListStyles";
import { IProject } from "../../Models/IProject";
import { projectsArray } from "../../Data/Projects";

interface IProps {
  displayDetails: any;
}

const ProjectList: React.FC<IProps> = ({ displayDetails }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h1">
        back-end / other projects
      </Typography>
      <Grid container spacing={1}>
        {projectsArray.map((project: IProject, index: number) => (
          <SingleProject
            key={index} 
            project={project} 
            displayDetails={displayDetails}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectList;
