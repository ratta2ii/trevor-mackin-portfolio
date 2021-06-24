import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import useStyles, { BioParagraph, BioAnchor } from "./Bio.Styles";

const Bio = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Box className="slideInRight animated">
        <Typography className={classes.title}>trevormackin.com</Typography>
      </Box>
      <Box className={`slideInRight animated ${classes.bio}`}>
        <BioParagraph>
          After first making the choice to become a Software Engineer, it has
          always been about doing everything within my power to best prepare
          myself for this industry. Whether this be on the job grinding,
          building a personal project, practicing algorithms, or even just
          reading about the latest technologies; regardless, I am always
          striving to improve as a developer.
        </BioParagraph>
        <BioParagraph>
          I am ready to take on the world. I am hungry, motivated, intelligent,
          and fully committed to putting forth my best self. I am focused,
          patient, and determined to make a difference in this world; and of
          course, hope to always be leaving a lasting impression along the way.
        </BioParagraph>
        <BioParagraph>
          And lastly, please take a moment to checkout some of my{" "}
          <BioAnchor href="#/projects">PERSONAL PROJECTS</BioAnchor>. Each one
          of these touches on a different area across the technological spectrum,
          with every project demonstrating an understanding of the topic at
          hand. Projects include, Security, Auth Services, working with various
          API’s (as both a provider and consumer), implementing Databases, Cloud
          Technologies (SaaS, PaaS, DBaaS, etc.), probably an instance -or two-
          of me flexing my design muscles, and much more. Enjoy!
        </BioParagraph>
      </Box>
    </Grid>
  );
};

export default Bio;
