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
          I am ready to take on the world. I am motivated, hungry, focused and
          determined to make a positive impact on this world. I am fully
          committed to always putting forth my best self, and consistently work
          towards bettering myself each and every day.
        </BioParagraph>
        <BioParagraph>
          Since the very first day that I made the decision to become a Software
          Engineer, it has always been about doing everything within my power to
          best prepare myself for this industry. Whether this be on the job
          grinding, building out a personal project, practicing algorithms, or
          even just reading about the latest technologies; regardless, I am
          always striving to improve my skills as a developer.
        </BioParagraph>
        <BioParagraph>
          To see some of my skills in action, please take a moment to checkout a
          few of my <BioAnchor href="#/projects">PERSONAL PROJECTS</BioAnchor>.
          Every project touches on different areas across the technological
          spectrum, with each one demonstrating an understanding of the topic at
          hand. Projects include, Security, Auth Services, working with various
          API’s (as both a provider and consumer), implementing Databases, Cloud
          Technologies (SaaS, PaaS, DBaaS, etc.), an instance -or two- of me
          flexing my design muscles, and much more. Thank you for taking the
          time to visit. Enjoy!
        </BioParagraph>
      </Box>
    </Grid>
  );
};

export default Bio;
