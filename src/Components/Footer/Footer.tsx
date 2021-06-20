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
    color: "#eefaff",
  },
  jobRefGridItm: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #1c222a",
    [theme.breakpoints.down("md")]: {
      border: "none",
    },
  },
  referenceBox: {
    width: 500,
    fontSize: 16,
    fontFamily: "sans-serif",
    textAlign: "justify",
    color: "#efefef",
    [theme.breakpoints.down("md")]: {
      width: 746,
      // width: 632,
      textAlign: "center",
    },
    // [theme.breakpoints.down("md")]: {
    //   width: 632,
    // },
    [theme.breakpoints.down("xs")]: {
      padding: "0 4%",
      fontSize: 15,
    },
  },
  signatureCon: {
    textAlign: "right",
    paddingTop: 20,
    fontFamily: "sans-serif",
    fontSize: 15,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      padding: 0,
      paddingTop: 15,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  aboutMeCardGridItm: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderLeft: "1px solid #1c222a",
    [theme.breakpoints.down("md")]: {
      border: "none",
      alignItems: "unset",
    },
    [theme.breakpoints.down("sm")]: {
        marginTop: 30,
    },
    [theme.breakpoints.down("xs")]: {
        marginTop: -15,
    },
  },
  cardBox: {
    width: 500,
    [theme.breakpoints.down("xs")]: {
        padding: "2%"
    },
  },
  copyrightGridItm: {
    borderTop: "2px solid #1c222a",
    height: 80,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: -85,
    },
  },
  copyrightSig: {
    color: "#b493635c",
    fontSize: 16,
    fontFamily: "monospace",
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
        <Box className={classes.referenceBox}>
          <Typography>
            <span>"</span>Trevor is knowledgeable, articulate, and a great
            pleasure to work with. He and I graduated from school together, and
            later went on to work on the same team. He brings integrity and
            intelligence to his work and his overall presence had a positive
            impact on my individual experience. I would recommend Trevor to any
            company looking for a candidate who will give 110% and lead a team
            to great success.
            <span>"</span>
          </Typography>
          <Box className={classes.signatureCon}>
            <Typography>Wei Dai (Coworker 2020)</Typography>
          </Box>
        </Box>
      </Grid>
      {/* Right Grid Item */}
      <Grid item xs={12} lg={6} className={classes.aboutMeCardGridItm}>
        <Box className={classes.cardBox} >
          <AboutMeCard />
        </Box>
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