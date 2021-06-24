import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, MenuList, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "static",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#000000",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    [theme.breakpoints.down("xs")]: {
      overflowX: "hidden",
      position: "fixed",
      height: 85,
    },
  },
  menuButtonCon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuIcon: {
    width: 42,
    height: 42,
    marginLeft: 6,
    borderRadius: "50%",
    boxShadow: `0 0 0.06em 0.06em #ccf5f5`,
    "&:hover": {
      marginLeft: 7,
      marginTop: 1,
      width: 40,
      height: 40,
      boxShadow: "unset",
    },
  },
  linkedInIcon: {
    opacity: 0.8,
    width: 90,
    marginLeft: 15,
    [theme.breakpoints.down("xs")]: {
      width: 70,
      marginRight: 8,
      opacity: 1,
    },
  },
  navLinkContainer: {
    color: "#29373d",
    minWidth: 500,
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      marginRight: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  tmLinkContainer: {
    marginTop: 12,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: 5,
    },
  },
  linkStyles: {
    textDecoration: "none",
    color: "#bdbdbd",
  },
  linkedInText: {
    fontSize: ".6rem",
    position: "relative",
    top: -12,
    left: 75,
    color: "#e6171e",
    [theme.breakpoints.down("xs")]: {
      top: -10,
      left: 50,
    },
  },
  menuList: {
    float: "left",
    outline: "0 !important",
    marginLeft: 50,
  },
  menuItems: {
    float: "left",
    marginRight: 25,
    color: "#bdbdbd",
    "&:selected": {
      border: "5px solid red",
    },
  },
}));

interface IProps {
  handleDrawerToggle: () => void;
}

const AppBarCom: React.FC<IProps> = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  let pathname = useLocation().pathname;

  return (
    <AppBar id="appBarId" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          className={classes.menuButtonCon}
        >
          <img
            src="/assets/Icons/menu-icon88.png"
            alt="menu icon"
            className={classes.menuIcon}
          />
        </IconButton>
        <Box className={classes.tmLinkContainer}>
          <a
            className={classes.linkStyles}
            href="https://www.linkedin.com/in/trevor-mackin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.linkedInIcon}
              src="/assets/Images/logo192edit.png"
              alt="LinkedIn Icon hyperlink"
            />
            <Typography className={classes.linkedInText}>LinkedIn</Typography>
          </a>
        </Box>
        <Box className={classes.navLinkContainer}>
          <MenuList className={classes.menuList}>
            <MenuItem
              component={Link}
              to="/"
              selected={"/" === pathname}
              className={classes.menuItems}
            >
              <Typography>Home</Typography>
            </MenuItem>
            <MenuItem
              component={Link}
              to="/projects"
              selected={"/projects" === pathname}
              className={classes.menuItems}
            >
              <Typography>Projects</Typography>
            </MenuItem>
            <MenuItem className={classes.menuItems}>
              <a
                className={classes.linkStyles}
                href="https://drive.google.com/file/d/1knecKbIKEkatxTH8qaBLH62_9fLaN7jf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </MenuItem>
            <MenuItem
              component={Link}
              to="/contact"
              selected={"/contact" === pathname}
              className={classes.menuItems}
            >
              <Typography>Contact</Typography>
            </MenuItem>
          </MenuList>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCom;

/**
 * ! Transition dynamic navbar on scroll (so its not jumpy)
 *   transition: "3s ease-in-out",
    -webkit-transition: padding .1s ease-in,-webkit-box-shadow .1s ease-in;
    transition: padding .1s ease-in,-webkit-box-shadow .1s ease-in;
    -o-transition: padding .1s ease-in,box-shadow .1s ease-in;
    transition: padding .1s ease-in,box-shadow .1s ease-in;
    transition: padding .1s ease-in,box-shadow .1s ease-in,-webkit-box-shadow .1s ease-in;

      // useEffect(() => {
  //   // adds a fixed position navBar to mobile version
  //   var windowWidth = window.innerWidth;
  //   const navbar: any = document.querySelector("#appBarId");
  //   if (windowWidth < 600) {
  //     window.onscroll = () => {
  //       if (window.scrollY > 25) {
  //         navbar.style.position = "fixed";
  //       } else {
  //         navbar.style.position = "static";
  //       }
  //     };
  //   }
  //   return () => {};
  // }, []);
 */
