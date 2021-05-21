import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  iconBox: {
    border: "1px solid #2196f3c9",
    borderRadius: "50%",
    height: 120,
    width: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    animation: "fadeIn ease 2s",
    [theme.breakpoints.down("md")]: {
      height: 100,
      width: 100,
    },
    [theme.breakpoints.down("sm")]: {
        height: 130,
        width: 130,
        margin: "2px auto",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "2px auto",
      height: 80,
      width: 80,
    },
  },
  iconLabel: {
    color: "#bfbfbf91",
    textAlign: "center",
    marginBottom: 30,
    position: "relative",
    left: -7,
    fontSize: 13,
    animation: "fadeIn ease 5s",
    letterSpacing: 1,
    [theme.breakpoints.down("sm")]: {
        marginTop: 7,
        left: 0,
    },
  },
  testIcon: {
    fontSize: 45,
    [theme.breakpoints.down("xs")]: {
        fontSize: 35,
    },
  }
}));

const TechDisplay = () => {
  const classes = useStyles();

  const handleGiveRandomSecond = () => {
    // returns #'s 3-5 (Starts at 3s and has a range of 3)
    return Math.floor(Math.random() * 3 + 3);
  };

  const iconList: string[] = [
    "devicon-html5-plain-wordmark",
    "devicon-css3-plain-wordmark",
    "devicon-javascript-plain",
    "devicon-nodejs-plain-wordmark",
    "devicon-react-original-wordmark",
    "devicon-redux-original",
    "devicon-typescript-plain",
    "devicon-visualstudio-plain",
    "devicon-csharp-plain-wordmark",
    "devicon-dot-net-plain-wordmark",
    "devicon-git-plain-wordmark colored",
    "devicon-firebase-plain",
  ];

  return (
    <Grid container>
      {iconList.map((ele: string, index: number) => (
        <Grid item xs={4} md={3} key={index}>
          <Box className={classes.iconBox}>
            <i
              className={`${ele} colored ${classes.testIcon}`}
              style={{
                animation: `fadeIn ease ${handleGiveRandomSecond()}s`,
              }}
            ></i>
          </Box>
          <Typography className={classes.iconLabel}>
            {ele.split("-")[1] === "visualstudio" ? "visual studio" : ele.split("-")[1]}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default TechDisplay;
