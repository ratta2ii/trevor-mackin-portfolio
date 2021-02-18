import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AzProjectImg from "./../../assets/az_project.png";
import RatingsProjectImg from "./../../assets/ratings_project.png";
import PortfolioProjectImg from "./../../assets/portfolio_project.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1e2123",
    marginBottom: 100,
    marginTop: -10,
    padding: "0 3%",
    animation: "fadeIn ease .5s",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },
  featuredCon: {
    width: 28,
    height: "100%",
    display: "flex",
    alignItems: "center",
    float: "right",
    marginRight: 25,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginBottom: -15,
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
      fontSize: 20,
    },
  },
  featuredConTwo: {
    width: 30,
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: 30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    backgroundImage:
      "radial-gradient(circle farthest-side at 50% 50%, #f5f5f5, #616161)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: 600,
    fontSize: "2rem",
    wordBreak: "break-word",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      marginBottom: 10,
      textTransform: "capitalize",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      marginBottom: 0,
      marginLeft: '8%',
    },
  },
  imgContainer: {
    width: "100%",
    margin: "auto",
    backgroundColor: "#555555",
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  projectImg: {
    width: "100%",
    // opacity: .5,
    // "&:hover": {
    //     opacity: 0.9,
    //     transition: "3s",
    // },
  },
  techsUsedTop: {
    fontSize: 15,
    fontWeight: 200,
    marginBottom: 22,
    color: "#f5f5f5",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  techsUsedBottom: {
    display: "none",
    fontSize: 15,
    fontWeight: 100,
    marginTop: 15,
    textAlign: "center",
    color: "#f5f5f5",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      fontSize: 12,
    },
  },
  divider: {
    marginTop: 90,
    marginBottom: 50,
    height: 1,
    background: "#323538",
    [theme.breakpoints.down("xs")]: {
      marginTop: 35,
      marginBottom: 35,
    },
  },
  optionsBtnsCon: {
    width: "100%",
    height: 40,
    marginTop: -5,
  },
  optionsBtns: {
    width: "33.3%",
    height: "100%",
    backgroundColor: "#757676",
    fontSize: 11,
    outline: '2px solid #1f2123',
    color: "white",
    borderRadius: 0,
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#898a8a",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
    },
  },
}));

const FeaturedProject = () => {
  const classes = useStyles();

  const projects = [
    {
      name: "AZ Movie Nights",
      techUsed: "JavaScript | React | Redux | Material-UI",
      mainImage: AzProjectImg,
      gitHubRepo: "https://github.com/ratta2ii/movie_night_app",
      liveSite: "https://ratta2ii.github.io/movie_night_app/#/",
    },
    {
      name: "Movie Ratings App",
      techUsed: "JavaScript | React | Redux | Firebase | Material-UI",
      mainImage: AzProjectImg,
      gitHubRepo: "https://github.com/ratta2ii/movie_night_app",
      liveSite: "https://ratta2ii.github.io/movie_night_app/#/",
    },
  ];

  return (
    <Box className={classes.root}>
      <Grid container>
        {/* Left Main Grid Container */}
        <Grid item xs={12} md={1} >
          <Box className={classes.featuredCon}>
            <Typography className={classes.title}>Featured</Typography>
          </Box>
        </Grid>
        {/* Right Main Grid Container */}
        <Grid item xs={12} md={10} alignItems="center" >
          <Box>
            <Typography className={classes.techsUsedTop}>
              {projects[0].techUsed}
            </Typography>
          </Box>
          <Box className={classes.imgContainer}>
            <img
              className={classes.projectImg}
              src={AzProjectImg}
              alt="project homepage screen-grab"
            />
          </Box>
          {/* //! Buttton Group Below */}
          <Box className={classes.optionsBtnsCon}>
            <Button
              className={classes.optionsBtns}
              style={{ backgroundColor: "#e57373" }}
            >
              View Live
            </Button>
            <Button
              className={classes.optionsBtns}
              style={{
                backgroundColor: "#186a92",
              }}
            >
              Description
            </Button>
            <Button
              className={classes.optionsBtns}
              style={{
                width: "33.4%",
                backgroundColor: "#68af5c",
              }}
            >
              GitHub Repo
            </Button>
          </Box>
          <Box>
            <Typography className={classes.techsUsedBottom}>
              AZ Movie Nights: {projects[0].techUsed}
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
        <Grid
          item
          xs={12}
          md={10}
          
          alignItems="center"
        >
          <Box>
            <Typography
              className={classes.techsUsedTop}
              style={{ textAlign: "right" }}
            >
              {projects[1].techUsed}
            </Typography>
          </Box>
          <Box className={classes.imgContainer}>
            <img
              className={classes.projectImg}
              src={RatingsProjectImg}
              alt="project homepage screen-grab"
            />
          </Box>
          {/* //! Buttton Group Below */}
          <Box className={classes.optionsBtnsCon}>
            <Button
              className={classes.optionsBtns}
              style={{ backgroundColor: "#e57373" }}
            >
              View Live
            </Button>
            <Button
              className={classes.optionsBtns}
              style={{ backgroundColor: "#186a92", }}
            >
              Description
            </Button>
            <Button
              className={classes.optionsBtns}
              style={{
                width: "33.4%",
                backgroundColor: "#68af5c", 
              }}
            >
              GitHub Repo
            </Button>
          </Box>
          <Box>
            <Typography className={classes.techsUsedBottom}>
              AZ Movie Nights: {projects[0].techUsed}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={1} >
          <Box className={classes.featuredConTwo}>
            <Typography className={classes.title}>Featured</Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider className={classes.divider}></Divider>
      {/* //! Project #3 (Portfolio) */}
      <Grid container>
        {/* Left Main Grid Container */}
        <Grid item xs={12} md={1} >
          <Box className={classes.featuredCon}>
            <Typography className={classes.title}>Portfolio</Typography>
          </Box>
        </Grid>
        {/* Right Main Grid Container */}
        <Grid
          item
          xs={12}
          md={10}
          style={{ backgroundColor: "#1e2123" }}
          alignItems="center"
        >
          <Box>
            <Typography className={classes.techsUsedTop}>
              {projects[0].techUsed}
            </Typography>
          </Box>
          <Box className={classes.imgContainer}>
            <img
              className={classes.projectImg}
              src={PortfolioProjectImg}
              alt="project homepage screen-grab"
            />
          </Box>
          {/* //! Buttton Group Below */}
          <Box className={classes.optionsBtnsCon}>
            <Button
              className={classes.optionsBtns}
              style={{ backgroundColor: "#e57373", }}
            >
              View Live
            </Button>
            <Button
              className={classes.optionsBtns}
              style={{ backgroundColor: "#186a92", }}
            >
              Description
            </Button>
            <Button
              className={classes.optionsBtns}
              style={{
                width: "33.4%",
                backgroundColor: "#68af5c",
              }}
            >
              GitHub Repo
            </Button>
          </Box>
          <Box>
            <Typography className={classes.techsUsedBottom}>
              {projects[0].techUsed}
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
