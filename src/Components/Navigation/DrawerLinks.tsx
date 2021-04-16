import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import CancelIcon from '@material-ui/icons/Cancel';
import HomeIcon from "@material-ui/icons/Home";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
//import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#181a1a",
    marginTop: 75,
    paddingBottom: 50,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  linkStyles: {
    textDecoration: "none",
    color: "#555050",
  },
  icons: {
    color: "#74c2ff",
    height: 20,
  },
  cancelIcon: {
    color: "#ef5350",
    height: 23,
  },
  listItemText: {
    fontSize: ".9rem",
    letterSpacing: "0.03rem",
    fontWeight: 500,
    color: "#fff1f0",
    marginTop: 3,
  },
}));

interface IProps {
  drawerToggle: () => void;
}

const Drawerlinks: React.FC<IProps> = ({ drawerToggle }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.toolbar}></Box>
      <List onClick={() => drawerToggle()}>
        <ListItem button key="Home" component={Link} to="/">
          <ListItemIcon>
            <HomeIcon className={classes.icons} />
          </ListItemIcon>
          <Typography className={classes.listItemText}>Home</Typography>
        </ListItem>
        <ListItem button key="Projects" component={Link} to="/projects">
          <ListItemIcon>
            <DesktopMacIcon className={classes.icons} />
          </ListItemIcon>
          <Typography className={classes.listItemText}>Projects</Typography>
        </ListItem>
        <a
          className={classes.linkStyles}
          href="https://drive.google.com/file/d/1knecKbIKEkatxTH8qaBLH62_9fLaN7jf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItem button key="Resume">
            <ListItemIcon>
              <SystemUpdateAltIcon className={classes.icons} />
            </ListItemIcon>
            <Typography className={classes.listItemText}>Resume</Typography>
          </ListItem>
        </a>
        {/* GitHub (This info is under the Contact Info already) */}
        {/* <a
          className={classes.linkStyles}
          href="https://github.com/ratta2ii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItem button key="GitHub">
            <ListItemIcon>
              <GitHubIcon className={classes.icons} />
            </ListItemIcon>
            <Typography className={classes.listItemText}>GitHub</Typography>
          </ListItem>
        </a> */}
        <a
          className={classes.linkStyles}
          href="https://www.linkedin.com/in/trevor-mackin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItem button key="LinkedIn">
            <ListItemIcon>
              <LinkedInIcon className={classes.icons} />
            </ListItemIcon>
            <Typography className={classes.listItemText}>LinkedIn</Typography>
          </ListItem>
        </a>
        <ListItem button key="Contact" component={Link} to="/contact">
          <ListItemIcon>
            <ContactMailIcon className={classes.icons} />
          </ListItemIcon>
          <Typography className={classes.listItemText}>Contact</Typography>
        </ListItem>
        <ListItem button key="Close">
          <ListItemIcon>
            <CancelIcon className={classes.cancelIcon} />
          </ListItemIcon>
          <Typography className={classes.listItemText}>Close</Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Drawerlinks;
