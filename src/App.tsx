import React, { Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar";
import Home from "./Views/Home/Home";
// import Error404 from './Views/Error404/Error404';
// This is for testing purposes only
// import ReduxStateTest from './Data/TestPages/ReduxStateTest';


const App = () => {
    return (
        <Fragment>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/productList" component={ProductsView} />
                <Route component={Error404} /> */}
            </Switch>
            <style global>{`
                /* This takes up space for the sidebar so all future centering works accordingly */
                //     body {
                //         margin-left: 72px;
                //     }
                // @media only screen and (max-width: 959px) {
                //     body {
                //         margin-left: 0;   
                //     }
                // }
            `}</style>
        </Fragment>
    );
};

export default App;
