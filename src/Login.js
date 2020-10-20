import React from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://imperialholocron.com/wp-content/uploads/2017/02/Funko-Logo-800x445.png"
                    alt="logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button onClick={login} className="login__signInButton">Sign in</button>
                </form>

                <p>By continuing, you agree to Funko's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__signUpButton">Create your Funko account</button>
            </div>
        </div>
    )
}

export default Login
