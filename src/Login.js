import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"
import { auth } from './firebase'

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')

            })
            .catch((e) => alert(e.message))
    }

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
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text" placeholder="email" />
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="password" />
                    <button onClick={login} className="login__signInButton">Sign in</button>
                </form>

                <p>By continuing, you agree to Funko's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__signUpButton">Create your Funko account</button>
            </div>
        </div>
    )
}

export default Login