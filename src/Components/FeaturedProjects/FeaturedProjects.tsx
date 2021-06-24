import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "./FeaturedProjectsStyles";
import { featuredProjectsArr } from "../../Data/Projects";
import { IProject } from "./../../Models/IProject";
interface IProps {
  displayDetails: (project: IProject) => void;
}

const FeaturedProject: React.FC<IProps> = ({ displayDetails }) => {
  const classes = useStyles();

  // Images are high resolution (slow loading), so this will attempt to keep the page from being
  // so jumpy. I want the image to be all the way downloaded before rendering the component. I
  // will need to update this at a later date
  //* Loading Indicator (note: currently rendering an empty div)
  if (
    !featuredProjectsArr ||
    !featuredProjectsArr[0].mainImage ||
    !featuredProjectsArr[1].mainImage ||
    !featuredProjectsArr[2].mainImage
  )
    return <div>Loading...</div>;

  return (
    <Box className={classes.root}>
      <Box className={classes.gitHubRepoCount}>
        <a
          className={classes.gitHubLinkStyles}
          href="https://github.com/ratta2ii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography className={classes.gitHubText} >( 149+ GitHub Repositories )</Typography>
        </a>
      </Box>
      {/* //! PROJECT #1 */}
      <Grid container>
        {/* Left Main Grid Container */}
        <Grid item xs={12} md={1}>
          <Box className={classes.featuredCon}>
            <Typography className={classes.title}>ECommerce</Typography>
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
              //src="/assets/Images/az_movie_nights_homepage.png"
              alt="project homepage screen-grab"
            />
          </Box>
          {/* //! Button Group Below */}
          <Box className={classes.optionsBtnsCon}>
            <a
              className={classes.linkStyles}
              href={featuredProjectsArr[0].liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.optionsBtns}
                style={{ backgroundColor: "#90a4ae", width: "33.4%" }}
              >
                View Website
              </Button>
            </a>
            <Button
              className={classes.optionsBtns}
              onClick={() => displayDetails(featuredProjectsArr[0])}
              style={{
                backgroundColor: "#567798",
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
                  backgroundColor: "#68af5d",
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
          <Box className={classes.featuredCon2}>
            <Typography className={classes.title}>Security</Typography>
          </Box>
          <Box className={classes.imgContainer}>
            <img
              className={classes.projectImg}
              src={featuredProjectsArr[1].mainImage}
              // src="/assets/Images/csharp-react-jwt-auth-ss.png"
              alt="project homepage screen-grab"
            />
          </Box>
          {/* //! Button Group Below */}
          <Box className={classes.optionsBtnsCon}>
            <a
              className={classes.linkStyles}
              href={featuredProjectsArr[1].liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.optionsBtns}
                style={{
                  backgroundColor: "#90a4ae",
                }}
              >
                View Website
              </Button>
            </a>
            <Button
              className={classes.optionsBtns}
              onClick={() => displayDetails(featuredProjectsArr[1])}
              style={{
                backgroundColor: "#567798",
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
                  backgroundColor: "#68af5d",
                }}
              >
                GitHub
              </Button>
            </a>
          </Box>
          <Box>
            <Typography className={classes.techsUsedBottom}>
              {featuredProjectsArr[1].techUsed}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={1}>
          <Box className={classes.featuredCon3}>
            <Typography className={classes.title}>
              Secur<span style={{ marginLeft: 6 }}>i</span>ty
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider className={classes.divider}></Divider>
      {/* //! Project #3 (Portfolio) */}
      <Grid container>
        {/* Left Main Grid Container */}
        <Grid item xs={12} md={1}>
          <Box className={classes.featuredCon}>
            <Typography className={classes.title}>
              Portfol<span className={classes.spanLetterI}>i</span>o
            </Typography>
          </Box>
        </Grid>
        {/* Right Main Grid Container */}
        <Grid item xs={12} md={10} style={{ backgroundColor: "#0d1117" }}>
          <Box>
            <Typography className={classes.techsUsedTop}>
              {featuredProjectsArr[2].techUsed}
            </Typography>
          </Box>
          <Box className={classes.imgContainer}>
            <img
              className={classes.projectImg}
              // src={featuredProjectsArr[2].mainImage}
              src="/assets/Images/portfolio_homepage.png"
              alt="project homepage screen-grab"
            />
          </Box>
          {/* //! Button Group Below */}
          <Box className={classes.optionsBtnsCon}>
            <a
              className={classes.linkStyles}
              href={featuredProjectsArr[2].liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.optionsBtns}
                style={{ backgroundColor: "#90a4ae", width: "33.4%" }}
              >
                View Website
              </Button>
            </a>
            <Button
              className={classes.optionsBtns}
              onClick={() => displayDetails(featuredProjectsArr[2])}
              style={{
                backgroundColor: "#567798",
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
                  backgroundColor: "#68af5d",
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

// {/* //! PROJECT #3 */}
// <Grid container>
//   {/* Left Main Grid Container */}
//   <Grid item xs={12} md={1}></Grid>

//   {/* Right Main Grid Container */}
//   <Grid item xs={12} md={10}>
//     <Box>
//       <Typography
//         className={classes.techsUsedTop}
//         style={{ textAlign: "right" }}
//       >
//         {featuredProjectsArr[2].techUsed}
//       </Typography>
//     </Box>
//     {/* <Box className={classes.featuredCon2}>
//         <Typography className={classes.title}>Featured#2</Typography>
//     </Box> */}
//     <Box className={classes.imgContainer}>
//       <img
//         className={classes.projectImg}
//         src={featuredProjectsArr[2].mainImage}
//         // src="/assets/Images/movie_ratings_homepage.png"
//         alt="project homepage screen-grab"
//       />
//     </Box>
//     {/* //! Button Group Below */}
//     <Box className={classes.optionsBtnsCon}>
//       <a
//         className={classes.linkStyles}
//         href={featuredProjectsArr[2].liveSite}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Button
//           className={classes.optionsBtns}
//           style={{ backgroundColor: "#919191",  width: "33.4%" }}
//         >
//           View Website
//         </Button>
//       </a>
//       <Button
//         className={classes.optionsBtns}
//         onClick={() => displayDetails(featuredProjectsArr[2])}
//         style={{
//           backgroundCo#567798",
//         }}
//       >
//         Details
//       </Button>
//       <a
//         className={classes.linkStyles}
//         href={featuredProjectsArr[2].gitHubRepo}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Button
//           className={classes.optionsBtns}
//           style={{
//             backgroundColor: "#2c3e50",
//           }}
//         >
//           GitHub
//         </Button>
//       </a>
//     </Box>
//     <Box>
//       <Typography className={classes.techsUsedBottom}>
//         {featuredProjectsArr[2].techUsed}
//       </Typography>
//     </Box>
//   </Grid>
//   <Grid item xs={12} md={1}>
//     {/* <Box className={classes.featuredCon3}>
//       <Typography className={classes.title}>AuthN</Typography>
//     </Box> */}
//   </Grid>
// </Grid>
// <Divider className={classes.divider}></Divider>
