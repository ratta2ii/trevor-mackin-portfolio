import React from "react";
import { Box, Grid } from "@material-ui/core";
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
