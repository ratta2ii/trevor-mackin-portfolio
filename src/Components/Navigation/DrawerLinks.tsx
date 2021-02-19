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
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
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
    color: "#9fc9ea",
  },
  listItemText: {
    fontWeight: 200,
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
        <a
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
        </a>
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
      </List>
    </Box>
  );
};

export default Drawerlinks;
