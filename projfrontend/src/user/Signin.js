import React,{useState} from 'react'
import Base from "../core/Base";
import {Link} from "react-router-dom";
 const Signin = () => {

    const [values,setValues] = useState({
        email:"",
        password:"",
        error:"",
        success:false,
        loading:false,
        didRedirect:false
    })

    const { name,email,password,error,success,loading,didRedirect }=values;
    const handlechange = (name) =>(event) => {
        setValues({...values,error:false,[name]:event.target.value })
    };


    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{display:success ? "":"none"}}>
                        User Registered SuccessFully...Please <Link to="/signin">Click Here</Link> To Login.
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger" style={{display:error ? "":"none"}}>
                        Error occured..Check All Fields Again.
                    </div>
                </div>
            </div>
        )
    }

    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                    <div className="form-group">
                        <label className="text-light">Email</label>
                        <input type="email" className="form-control" onChange={handlechange("email")} value={email} required/>
                    </div>
                    <div className="form-group">
                        <label className="text-light">Password</label>
                        <input type="password" className="form-control" onChange={handlechange("password")} value={password} required/>
                    </div>
                    <button className="btn btn-success btn-block" onClick={() => {}} >Submit</button>
                    </form>
                </div>
            </div>
        )
    }



    return (
        <Base title="Welcome To SignIn Page" description="T-shirt Store">
            {signInForm()}
        </Base>
    )
}


export default Signin;