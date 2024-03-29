import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Home from "./core/Home";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashboard";
import signin from "./user/Signin";
import Cart from "./core/Cart";

const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup}/>
            <Route path="/signin" exact component={signin}/>
            <Route path="/cart" exact component={Cart}/>
            
        </Switch>
        <PrivateRoutes path="/user/dashboard" exact component={UserDashboard}/>
        </BrowserRouter>
    );
};

export default Routes;