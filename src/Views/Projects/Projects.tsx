import React from 'react';
import { Box } from '@material-ui/core';
import FeaturedProjects from '../../Components/ProjectsComs/FeaturedProjects';
import ProjectList from '../../Components/ProjectsComs/ProjectList';
import useStyles from './ProjectsStyles';

const Projects = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root} >
            <FeaturedProjects />
            <ProjectList />
        </Box>
    );
}

export default Projects;