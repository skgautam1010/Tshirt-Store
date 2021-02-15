import React,{useState} from 'react'
import Base from "../core/Base";
import {Link} from "react-router-dom";
import {signup} from "../auth/helper/index";

 const Signup = () => {

    const[values,setValues]=useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false,
    });

    const { name,email,password,error,success }=values;
    const handlechange = (name) =>(event) => {
        setValues({...values,error:false,[name]:event.target.value })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values,error:false})
        signup({name,email,password})
        .then(data => {
            console.log("DATA",data);
            if(data.email === email)
            {
                setValues({
                    ...values,
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true,
                })
            }
            else{
                setValues({
                    ...values,
                    error:true,
                    success:false,
                })
            }

        })
        .catch(err => console.log(err));
    }

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

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                    <div className="form-group">
                        <label className="text-light">Name</label>
                        <input type="text" className="form-control" onChange={handlechange("name")} value={name} required/>
                    </div>
                    <div className="form-group">
                        <label className="text-light">Email</label>
                        <input type="email" className="form-control" onChange={handlechange("email")} value={email} required/>
                    </div>
                    <div className="form-group">
                        <label className="text-light">Password</label>
                        <input type="password" className="form-control" onChange={handlechange("password")} value={password} required/>
                    </div>
                    <button className="btn btn-success btn-block" onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base title="Signup Form" description="Signup Page For New User">
            {errorMessage()}
            {successMessage()}
            {signUpForm()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </Base>
    );
};

export default Signup;