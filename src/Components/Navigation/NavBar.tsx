import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import DrawerLinks from "./DrawerLinks";
import AppBarCom from "./AppBarCom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 130,
    display: "flex",
    backgroundImage:
    "linear-gradient(rgba(13, 17, 23, 0), rgba(13, 17, 23, 0)), url('/assets/Images/binary.jpeg')",
    backgroundSize: "contain",
    borderBottom: "17px solid rgba(14, 18, 24, .7)",
    backgroundPositionY: -279,
    [theme.breakpoints.down("lg")]: {
      borderBottom: "16px solid rgba(14, 18, 24, .7)",
      backgroundPositionY: -282,
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage:
      "linear-gradient(rgba(13, 17, 23, 0.8), rgba(13, 17, 23, 0.8)), url('/assets/Images/binary.jpeg')",
      backgroundSize: "unset",
      height: 105,
      backgroundPositionY: -234,
      borderBottom: "20px solid rgba(0,0,0,0)",
    },
  },
  title: {
    color: "#29373d",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 220,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarCom handleDrawerToggle={handleDrawerToggle} />
      <nav aria-label="bio options">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          onClose={handleDrawerToggle}
          open={mobileOpen}
          ModalProps={{
            keepMounted: false, // Better open performance on mobile.
          }}
        >
          <DrawerLinks drawerToggle={handleDrawerToggle} />
        </Drawer>
      </nav>
      {/* necessary for content to be below app bar */}
      <Box className={classes.toolbar}></Box>
    </div>
  );
};

export default NavBar;
