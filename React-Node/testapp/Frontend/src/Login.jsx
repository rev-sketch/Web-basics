import React, { useState } from "react";
import './style.css'
import axios from "axios";

function Login() {
    const [values, setValues] = useState({
        Username: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="bg-white p-3 rounded w-25 border loginForm" >
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fname"><strong>Username</strong></label>
                        <input type="text" placeholder="Enter Username" name="Username" 
                        onChange={e => setValues({...values,Username: e.target.value})} className="form-control rounded-0"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter password" name="password" 
                        onChange={e => setValues({...values,password: e.target.value})} className="form-control rounded-0"></input>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Log in</button>
                </form>
            </div>  
        </div>

    )
}

export default Login;