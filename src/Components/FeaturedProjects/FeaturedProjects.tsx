import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "./FeaturedProjectsStyles";
import { featuredProjectsArr } from "../../Data/Projects";

interface IProps {
  displayDetails: any;
}

const FeaturedProject: React.FC<IProps> = ({ displayDetails }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        {/* Left Main Grid Container */}
        <Grid item xs={12} md={1}>
          <Box className={classes.featuredCon}>
            <Typography className={classes.title}>Featured</Typography>
          </Box>
        </Grid>
        {/* Right Main Grid Container */}
        <Grid item xs={12} md={10}>
          <Box>
            <Typography className={classes.techsUsedTop}>
              {featuredProjectsArr[0].techUsed}
            </Typography>
          </Box>
          <Box className={classes.imgContainer}>
            <img
              className={classes.projectImg}
              src={featuredProjectsArr[0].mainImage}
              alt="project homepage screen-grab"
            />
          </Box>
          {/* //! Buttton Group Below */}
          <Box className={classes.optionsBtnsCon}>
            <a
              className={classes.linkStyles}
              href={featuredProjectsArr[0].liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.optionsBtns}
                style={{ backgroundColor: "#e57373" }}
              >
                View Live
              </Button>
            </a>
            <Button
              className={classes.optionsBtns}
              onClick={() => displayDetails(featuredProjectsArr[0].description)}
              style={{
                backgroundColor: "#186a92",
              }}
            >
              Details
            </Button>
            <a
              className={classes.linkStyles}
              href={featuredProjectsArr[0].gitHubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.optionsBtns}
                style={{
                  width: "33.4%",
                  backgroundColor: "#68af5c",
                }}
              >
                GitHub
              </Button>
            </a>
          </Box>
          <Box>
            <Typography className={classes.techsUsedBottom}>
              {featuredProjectsArr[0].techUsed}
            </Typography>
          </Box>
        </Grid>
        {/* //! Right space */}
        <Grid item sm={1}></Grid>
      </Grid>
      <Divider className={classes.divider}></Divider>
      {/* //! PROJECT #2 */}
      <Grid container>
        {/* Left Main Grid Container */}
        <Grid item xs={12} md={1}></Grid>
        {/* Right Main Grid Container */}
        <Grid item xs={12} md={10}>
          <Box>
            <Typography
              className={classes.techsUsedTop}
              style={{ textAlign: "right" }}
            >
              {featuredProjectsArr[1].techUsed}
            </Typography>
          </Box>
          <Box className={classes.imgContainer}>
            <img
              className={classes.projectImg}
              src={featuredProjectsArr[1].mainImage}
              alt="project homepage screen-grab"
            />
          </Box>
          {/* //! Buttton Group Below */}
          <Box className={classes.optionsBtnsCon}>
            <a
              className={classes.linkStyles}
              href={featuredProjectsArr[1].liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.optionsBtns}
                style={{ backgroundColor: "#e57373" }}
              >
                View Live
              </Button>
            </a>
            <Button
              className={classes.optionsBtns}
              onClick={() => displayDetails(featuredProjectsArr[1].description)}
              style={{
                backgroundColor: "#186a92",
              }}
            >
              Details
            </Button>
            <a
              className={classes.linkStyles}
              href={featuredProjectsArr[1].gitHubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.optionsBtns}
                style={{
                  width: "33.4%",
                  backgroundColor: "#68af5c",
                }}
              >
                GitHub
              </Button>
            </a>
          </Box>
          <Box>
            <Typography className={classes.techsUsedBottom}>
              AZ Movie Nights: {featuredProjectsArr[0].techUsed}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={1}>
          <Box className={classes.featuredConTwo}>
            <Typography className={classes.title}>Featured</Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider className={classes.divider}></Divider>
      {/* //! Project #3 (Portfolio) */}
      <Grid container>
        {/* Left Main Grid Container */}
        <Grid item xs={12} md={1}>
          <Box className={classes.featuredCon}>
            <Typography className={classes.title}>Portfolio</Typography>
          </Box>
        </Grid>
        {/* Right Main Grid Container */}
        <Grid item xs={12} md={10} style={{ backgroundColor: "#1e2123" }}>
          <Box>
            <Typography className={classes.techsUsedTop}>
              {featuredProjectsArr[2].techUsed}
            </Typography>
          </Box>
          <Box className={classes.imgContainer}>
            <img
              className={classes.projectImg}
              src={featuredProjectsArr[2].mainImage}
              alt="project homepage screen-grab"
            />
          </Box>
          {/* //! Buttton Group Below */}
          <Box className={classes.optionsBtnsCon}>
            <a
              className={classes.linkStyles}
              href={featuredProjectsArr[2].liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.optionsBtns}
                style={{ backgroundColor: "#e57373" }}
              >
                View Live
              </Button>
            </a>
            <Button
              className={classes.optionsBtns}
              onClick={() => displayDetails(featuredProjectsArr[2].description)}
              style={{
                backgroundColor: "#186a92",
              }}
            >
              Details
            </Button>
            <a
              className={classes.linkStyles}
              href={featuredProjectsArr[2].gitHubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.optionsBtns}
                style={{
                  width: "33.4%",
                  backgroundColor: "#68af5c",
                }}
              >
                GitHub
              </Button>
            </a>
          </Box>
          <Box>
            <Typography className={classes.techsUsedBottom}>
              {featuredProjectsArr[2].techUsed}
            </Typography>
          </Box>
        </Grid>
        {/* //! Right space */}
        <Grid item sm={1}></Grid>
      </Grid>
      <Divider className={classes.divider}></Divider>
    </Box>
  );
};

export default FeaturedProject;
