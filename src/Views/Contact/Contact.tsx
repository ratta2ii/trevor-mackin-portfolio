import React from "react";
import AboutMeCard from "../../Components/AboutMeCard/AboutMeCard";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./ContactStyles";

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.iconsMainContainer}>
        <AboutMeCard />
      </Box>
      <Typography variant="h1" className={classes.title}>
        Thank you for visiting!
      </Typography>
    </Box>
  );
};

export default Contact;

/*
! Old component
import React from "react";
import AboutMeCard from "../../Components/AboutMeCard/AboutMeCard";
import { Box, Typography } from "@material-ui/core";
import useStyles, { StyledIcon } from "./ContactStyles";

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.iconsMainContainer}>
        <a className={classes.linkStyles} href="mailto:tismetrm@gmail.com.com">
          <Box className={classes.iconBox}>
            <StyledIcon className="devicon-google-plain"></StyledIcon>
            <span className={classes.spanTag}>tismeTRM@gmail.com</span>
          </Box>
        </a>
        <a
          className={classes.linkStyles}
          href="https://www.linkedin.com/in/trevor-mackin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box className={classes.iconBox}>
            <StyledIcon className="devicon-linkedin-plain"></StyledIcon>
            <span className={classes.spanTag}>
              linkedin.com/in/trevor-mackin
            </span>
          </Box>
        </a>
        <a
          className={classes.linkStyles}
          href="https://github.com/ratta2ii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box className={classes.iconBox}>
            <StyledIcon className="devicon-github-original-wordmark"></StyledIcon>
            <span className={classes.spanTag}>github.com/ratta2ii</span>
          </Box>
        </a>
      </Box>
      <Typography variant="h1" className={classes.title}>
        Thank you for visiting!
      </Typography>
    </Box>
  );
};
export default Contact;
*/
