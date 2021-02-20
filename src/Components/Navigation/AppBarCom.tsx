import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
// import LinkedInIcon from "./../../assets/linkedIn_Icon.png";
import LinkedInIcon from "./../../assets/logo192edit.png";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, MenuList, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "#0d0e0e",
    backgroundColor: '#000000',
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "#2196f3",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  linkedInIcon: {
    opacity: 0.8,
    width: 90,
    marginLeft: 15,
    [theme.breakpoints.down("sm")]: {
      display: "none",
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
  linkStyles: {
    textDecoration: "none",
    color: "#bdbdbd",
  },
  menuList: {
    float: "left",
    outline: "0 !important",
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
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <a
          className={classes.linkStyles}
          href="https://www.linkedin.com/in/trevor-mackin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={classes.linkedInIcon}
            src={LinkedInIcon}
            alt="LinkedIn Icon hyperlink"
          />
        </a>
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
            <MenuItem className={classes.menuItems}>
              <a
                className={classes.linkStyles}
                href="https://github.com/ratta2ii"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
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
