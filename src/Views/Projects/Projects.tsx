import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import FeaturedProjects from "../../Components/FeaturedProjects/FeaturedProjects";
import ProjectList from "../../Components/ProjectList/ProjectList";
import useStyles from "./ProjectsStyles";
import ProjectDetailsModal from "../../Components/ProjectDetailsModal/ProjectDetailsModal";
import { IProject } from "../../Models/IProject";

const Projects = () => {
  const classes = useStyles();

  //! Modal Start
  const [currentProjectDetails, setCurrentProjectDetails] = useState<string>("");
  const [currentProjectName, setCurrentProjectName] = useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
    setCurrentProjectName("");
    setCurrentProjectDetails("");
  };

  const handleDisplayDetails = (project: IProject) => {
    setCurrentProjectName(project.name);
    setCurrentProjectDetails(project.description);
    setOpen(true);
  };
  //! Modal End

  return (
    <Box className={classes.root}>
      <FeaturedProjects displayDetails={handleDisplayDetails} />
      <ProjectList displayDetails={handleDisplayDetails} />

      {/* Modal to display project details */}
      <ProjectDetailsModal
        currentProjectName={currentProjectName}
        currentProjectDetails={currentProjectDetails}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default Projects;
