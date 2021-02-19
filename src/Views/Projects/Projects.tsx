import React, { useState } from "react";
import { Box } from "@material-ui/core";
import FeaturedProjects from "../../Components/FeaturedProjects/FeaturedProjects";
import ProjectList from "../../Components/ProjectList/ProjectList";
import useStyles from "./ProjectsStyles";
import Modal from "../../Components/Modal/Modal";

const Projects = () => {
  // const defaultDetails: string = "Details Coming Soon."
  const classes = useStyles();
  const [currentProjDetails, setCurrentProjDetails] = useState("");
  const [displayProject, setDisplayProject] = useState(false);

  const handleDisplayDetails = (details: any) => {
    setDisplayProject(true);
    setCurrentProjDetails(details);
    console.log(details);
  };
  
  const handleCloseDetails = () => {
    setDisplayProject(false);
    setCurrentProjDetails("");
  };

  return (
    <Box className={classes.root}>
      <FeaturedProjects displayDetails={handleDisplayDetails} />
      <ProjectList displayDetails={handleDisplayDetails} />

      {/* Modal to display project details */}
      <Modal
        closeDetails={handleCloseDetails}
        displayProject={displayProject}
        currentProjDetails={currentProjDetails}
      />
    </Box>
  );
};

export default Projects;
