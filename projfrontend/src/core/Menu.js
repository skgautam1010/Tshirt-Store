import React,{Fragment} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {signout,isAuthenticated} from "../auth/helper";

const currentTab = (history,path) => {
    if(history.location.pathname === path)
    {
        return {color:"#2ecc72"}
    }
    else{
        return {color:"#FFFFFF"}
    }
}

const Menu = ({history,path}) => {
    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link style={currentTab(history,"/")} className="nav-link" to="/">HOME</Link>
                </li>
                {isAuthenticated() && (
                    <li className="nav-item">
                    <Link style={currentTab(history,"/cart")} className="nav-link" to="/cart">CART</Link>
                </li>
                )}
                {isAuthenticated() && (
                    <li className="nav-item">
                    <Link style={currentTab(history,"/user/dashboard")} className="nav-link" to="/user/dashboard">DASHBOARD</Link>
                </li>
                )}
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                        <Link style={currentTab(history,"/signin")} className="nav-link" to="/signin">SIGNIN</Link>
                        </li>
                    <li className="nav-item">
                        <Link style={currentTab(history,"/signup")} className="nav-link" to="/signup">SIGNUP</Link>
                    </li>
                    </Fragment>
                )}
                {isAuthenticated() && (
                    <li className="nav-item">
                    <span onClick={() => {
                        signout(() => {
                            history.push("/")
                        })
                    }} className="nav-link text-warning">
                        SIGNOUT 
                    </span>
                </li>
                )}
                
            </ul>
        </div>
    )
}

export default withRouter(Menu);