import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Home from "./core/Home";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashboard";

const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup}/>
        </Switch>
        <PrivateRoutes path="/user/dashboard" exact component={UserDashboard}/>
        </BrowserRouter>
    );
};

export default Routes;