import React from 'react';
import { Box } from '@material-ui/core';
import ProjectList from '../../Components/ProjectsComs/SingleProject';
import { makeStyles } from "@material-ui/core/styles";
import FeaturedProject from '../../Components/ProjectsComs/FeaturedProject';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#0a0a0a',
        padding: '100px 18% 0 18%',
        [theme.breakpoints.down("sm")]: {
            
        },
    },
}));

const Projects = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root} >
            <FeaturedProject />
            {/* <ProjectList /> */}
        </Box>
    );
}

export default Projects;