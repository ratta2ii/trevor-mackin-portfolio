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
                <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{
                        // backgroundColor: "white",
                        height: "50vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box className={classes.imgBox}>
                        <img
                            className={classes.profileImage}
                            src={ProfileImage}
                            alt="bio pic"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid item>
                        <TechDisplay />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Bio;
