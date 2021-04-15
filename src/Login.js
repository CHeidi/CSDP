import React, {useState} from 'react'
import logo from './logo.png';
import { Link, useHistory } from "react-router-dom"
import "./Login.css"
import { auth } from "./firebase"

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }




    return (
        <div className="login">
            <Link to='/'>
                <img src={logo} className="login__logo" alt="logo" />
            </Link>
            
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing in you agree to CSDP's Terms and Conditions. Please also view our Privacy Notice. 

                </p>

                <button onClick={register} className='login__registerButton'> Create an Account</button>
            </div>


        </div>
    )
}

export default Login
