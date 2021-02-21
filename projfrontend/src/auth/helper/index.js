import {API} from "../../backend";
import {cartEmpty} from "../../core/helper/CartHelper";

export const signup = (user) =>{
    return fetch(`${API}user/`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))

}

 
export const signin = (user) => {
    const formData= new FormData();
    for(const name in user)
    {
        console.log(user[name]);
        formData.append(name,user[name])
    }

//explanation of above code in simpler manner
    //const {email,password} = user;
    //const formData = new FormData();
    //formData.append('email',email);
    //formData.append('password',password);

    for(var key of formData.keys())
    {
        console.log("My Key",key)
    }

    return fetch(`${API}user/login/`,{
        method:"POST",
        body:formData     
    })
    .then((response) => {
        return response.json();
    })
    .catch(err => console.log(err));
        

};


export const authenticate = (data,next) => {
    if (typeof window !== undefined)
    {
        localStorage.setItem("jwt",JSON.stringify(data));
        next();
    }
};

export const isAuthenticated = () => {
    if(typeof window !== undefined)
    {
        return false;
    }
    if(localStorage.getItem("jwt"))
    {
        return JSON.parse(localStorage.getItem("jwt"));
        //todo:compare jwt with database json token
    }
    else{
        return false;
    }
};


export const signout = (next) =>{
    const userid= isAuthenticated() && isAuthenticated().user.id

    if(typeof window !== undefined)
    {
        localStorage.removeItem("jwt");
        cartEmpty(()=> {});


        return fetch(`${API}user/logout/${userid}`,{
            method:"GET"
        })
        .then(response => {
                console.log("SignOut Success")
                next();
            })
        .catch(err=>console.log(err));
    }
}