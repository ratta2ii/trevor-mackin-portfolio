import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import DrawerLinks from "./DrawerLinks";
import AppBarCom from "./AppBarCom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 120,
    borderBottom: "10px solid #2196f3",
    [theme.breakpoints.down("xs")]: {
      height: 80,
      borderBottom: 0,
    },
  },
  title: {
    color: "#29373d",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 240,
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
