import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AboutMeCard from "../AboutMeCard/AboutMeCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    color: "white",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
  jobRefGridItm: {
    width: "100%",
    height: "100%",
    padding: "45px 90px",
    borderRight: "1px solid #1c222a",
    fontSize: 16,
    fontFamily: "devicon",
    color: "white",
    [theme.breakpoints.down("md")]: {
      border: "none",
      padding: "50px 10%",
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      padding: "80px 10% 0px",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
      padding: "40px 0 0 4%",
      fontSize: 15,
    },
  },
  signatureCon: {
    textAlign: "right",
    paddingRight: 20,
    fontFamily: "devicon",
    fontSize: 15,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      padding: 0,
      paddingTop: 10,
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "right",
      padding: 10,
    },
  },
  aboutMeCardGridItm: {
    width: "100%",
    height: "100%",
    borderLeft: "1px solid #1c222a",
    padding: "25px 70px",
    [theme.breakpoints.down("md")]: {
      border: "none",
      padding: "0px 100px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 10%",
      height: 300,
      marginBottom: 50,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "unset",
      marginTop: 40,
      padding: 0,
    },
  },
  copyrightGridItm: {
    borderTop: "2px solid #1c222a",
    height: 80,
    width: "100%",
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  copyrightSig: {
    color: "#e5b6703d",
    fontSize: 18,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
}));

const Footer = (props: any) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {/* Left Grid Item */}
      <Grid item xs={12} lg={6} className={classes.jobRefGridItm}>
        <p>
          <span>"</span>Trevor is knowledgeable, articulate, and a great
          pleasure to work with. He and I graduated from school together and
          were on the same team at ILink Systems. He was someone that I trusted
          and looked toward for guidance and advice. He brings integrity and
          intelligence to his work and his overall presence had a positive
          impact on my individual experience while interning at ILink Systems. I
          would recommend Trevor to any company looking for a candidate who will
          give 110% and lead a team to great success.
          <span>"</span>
        </p>
        <Box className={classes.signatureCon}>
          <Typography>Wei Dai, ILink Systems Inc</Typography>
        </Box>
      </Grid>
      {/* Right Grid Item */}
      <Grid item xs={12} lg={6} className={classes.aboutMeCardGridItm}>
        <AboutMeCard />
      </Grid>
      <Grid item className={classes.copyrightGridItm}>
        <Typography className={classes.copyrightSig}>
          Presented By trevormackin.com &#169; 2021
        </Typography>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {
  location: PropTypes.object,
};

export default Footer;
