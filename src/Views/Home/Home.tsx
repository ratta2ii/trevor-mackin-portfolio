import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ProfileImage from "./../../assets/profile_pic_baw.jpg";
import TechDisplay from "../../Components/TechDisplay/TechDisplay";
import useStyles from "./HomeStyles";

const Bio = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className="slideInRight animated">
        <Typography className={classes.title}>
          welcome to trevormackin.com
        </Typography>
      </Box>
      <Grid container>
        {/* //! Left Main Grid */}
        <Grid item xs={12} md={6} >
          <Box className={classes.imgDesignBoxOuter} >
            <Box className={classes.imgDesignBoxMiddle} >
            <Box className={classes.imgDesignBoxInner} >
                <img
                  src={ProfileImage}
                  alt="something"
                  width="100%"
                  style={{ borderRadius: 10, }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* //! Right Main Grid */}
        <Grid item xs={12} md={6}>
          <Grid item>
            <TechDisplay />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bio;
