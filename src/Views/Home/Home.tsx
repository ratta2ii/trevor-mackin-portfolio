import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import useStyles from "./HomeStyles";
import Footer from "../../Components/Footer/Footer";
import TechDisplay from "../../Components/TechDisplay/TechDisplay";

const Bio = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Grid container>
          {/* //! Left Main Grid */}
          <Grid item xs={12} md={6} className={classes.profilePicGridItem}>
            <Box className={classes.imgDesignBoxOuter}>
              <Box className={classes.imgDesignBoxMiddle}>
                <Box className={classes.imgDesignBoxInner}>
                  <img
                    src="/assets/Images/profile_pic_baw.jpg"
                    alt="software engineer project portfolio; create profile"
                    className={classes.profileImg}
                  />
                </Box>
              </Box>
            </Box>
            <Box className={classes.imgDesignBoxOuter}>
              <Box className={classes.imgDesignBoxMiddle} style={{ top: -10 }}>
                <Box className={classes.imgDesignBoxInner} style={{ top: -10 }}>
                  <img
                    className={classes.profileImg}
                    src="/assets/Images/family.jpg"
                    alt="software engineer project portfolio; creator's dog"
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* //! Right Main Grid */}
          <Grid item xs={12} md={6}>
            <Grid item>
              <Box className="slideInRight animated">
                <Typography className={classes.title}>
                  trevormackin.com
                </Typography>
              </Box>
              <Box className={`slideInRight animated ${classes.bio}`}>
                <p>
                  Becoming a Software Engineer still excites me today. It is
                  challenging, sometimes frustrating, of course, but incredibly
                  rewarding. It might be a new project completed, a new tool
                  implemented, or something as small as solving a bug. Yay! What
                  excitement, right?
                </p>
                <p>
                  Please take some time to checkout a few of my{" "}
                  <a href="#/projects">PERSONAL PROJECTS</a>, each one
                  touching on various areas across the technological spectrum. A
                  project may include, implementing a database, authenticating
                  and authorizing users, working with various API’s (as both a
                  provider and consumer), taking advantage of the latest Cloud
                  Technologies (SaaS, PaaS, DBaaS, etc.), or even an instance -probably
                  many- of me flexing my design muscles. In every case, each
                  project will demonstrate an understanding of the topic at
                  hand.
                </p>
                <p>
                  And lastly, I am ready to take on the world. I am hungry,
                  motivated, intelligent, and I believe that I possess both the
                  focus, and determination, that it takes to remain successful
                  in this industry; and of course, always hoping to leave a
                  lasting impression along the way.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* //! Tech Display */}
      <Box className={classes.techDisplayMainCon}>
        <TechDisplay />
      </Box>
      {/* //! Footer */}
      <Box className={classes.footerCon}>
        <Footer />
      </Box>
    </>
  );
};

export default Bio;
