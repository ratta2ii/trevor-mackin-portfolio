import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import ProfileImageDesign from "../../Components/ProfileImageDesign/ProfileImageDesign";
import Bio from "../../Components/Bio/Bio";
import TechDisplay from "../../Components/TechDisplay/TechDisplay";
import Footer from "../../Components/Footer/Footer";
import useStyles from "./HomeStyles";

const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box className={classes.root}>
        <Grid container>
          {/* Left Main Grid Item */}
          <ProfileImageDesign />
          {/* Right Main Grid Item */}
          <Grid item xs={12} md={6}>
            <Bio />
          </Grid>
        </Grid>
      </Box>
      {/* Tech Display */}
      <Box className={classes.techDisplayMainCon}>
        <TechDisplay />
      </Box>
      {/* Footer */}
      <Box className={classes.footerCon}>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
