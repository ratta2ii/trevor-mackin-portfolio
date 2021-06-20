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
          Becoming a Software Engineer still excites me today. It is
          challenging, sometimes frustrating, of course, but incredibly
          rewarding. It might be a new project completed, a new tool
          implemented, or something as small as solving a bug. Yay! What
          excitement, right?
        </BioParagraph>
        <BioParagraph>
          Please take some time to checkout a few of my{" "}
          <BioAnchor href="#/projects">PERSONAL PROJECTS</BioAnchor>, each one
          touching on various areas across the technological spectrum. A project
          may include, implementing a database, authenticating and authorizing
          users, working with various API’s (as both a provider and consumer),
          taking advantage of the latest Cloud Technologies (SaaS, PaaS, DBaaS,
          etc.), or even an instance -probably many- of me flexing my design
          muscles. In every case, each project will demonstrate an understanding
          of the topic at hand.
        </BioParagraph>
        <BioParagraph>
          And lastly, I am ready to take on the world. I am hungry, motivated,
          intelligent, and I believe that I possess both the focus, and
          determination, that it takes to remain successful in this industry;
          and of course, always hoping to leave a lasting impression along the
          way.
        </BioParagraph>
      </Box>
    </Grid>
  );
};

export default Bio;
