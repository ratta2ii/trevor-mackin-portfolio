import { Box } from "@material-ui/core";
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar";
import Home from "./Views/Home/Home";
import Projects from "./Views/Projects/Projects";
import Contact from "./Views/Contact/Contact";
import Error404 from "./Views/Error404/Error404";

const App = () => {
  return (
    <Box style={{ backgroundColor: "#0e0f0f" }}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
    </Box>
  );
};

export default App;
