import React, { useState } from 'react'
import './Login.css'

const Login = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Sign Up")
    return (
        <div className='login'>
            <form className='login-container'>
                <div className="login-title">
                    <h2>{currentState}</h2>
                    <i onClick={() => setShowLogin(false)} class="fa-solid fa-xmark"></i>
                </div>
                <div className="login-inputs">
                    {currentState === 'Login' ? <></> : <input type="text" placeholder='Your Name' required />}
                   
                    <input type="text" placeholder='Your Email' required />
                    <input type="password" placeholder='Enter Password' required />
                </div>
                <button>{currentState === 'Sign Up' ? "Create account" : "Login"}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
                </div>
                {currentState === "Login" ? <p>Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span></p> : <p>Already have an account? <span onClick={() => setCurrentState('Login')} >Login here</span></p>}
               
         
            </form>
        </div>
    )
}

export default Login
