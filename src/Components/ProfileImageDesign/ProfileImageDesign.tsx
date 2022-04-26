import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./ProfileImageDesign.Styles";

const ProfileImageDesign = () => {
  const classes = useStyles();

  return (
    <>
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
              src="/assets/Images/isabella.jpg"
              alt="software engineer project portfolio; creator's dog"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileImageDesign;
