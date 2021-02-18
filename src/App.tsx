import { Box } from "@material-ui/core";
import React, { Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar";
import Home from "./Views/Home/Home";
import Projects from "./Views/Projects/Projects";
// import Error404 from './Views/Error404/Error404';
// This is for testing purposes only
// import ReduxStateTest from './Data/TestPages/ReduxStateTest';


const App = () => {
    return (
        <Box style={{backgroundColor: '#1e2123'}}>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route path="/projects" component={Projects} /> 
                {/* <Route component={Error404} /> */}
            </Switch>
        </Box>
    );
};

export default App;
