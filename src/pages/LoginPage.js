import React, { useState, useEffect } from 'react';
import { mockFetch } from './MockFetch';
import './LoginPage.css';
  

export default function LoginPage({ changePage }) {
  
  //Le Duong
  //When isLogIn is false, assume the user wants to create an account
  const [isLogIn, setIsLogIn] = useState(true);
  
    //Le Duong
    //These states have the strings of user input in the forms. 
    //The Login and Register portions share these states so switching between them doesn't clear fields
    const [input_displayname, setDisplayname] = useState('');
    const [input_email, setEmail] = useState('');
    const [input_password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const[passwordMessage, setPasswordMessage] = useState('');

    const handlePageSwitch = (status) => {
        setIsLogIn(status);
        setErrorMessage('');
        setPasswordMessage('');
    }

    //Handlers for the states - updates changes when users type
    const handleDisplaynameChange = (event) => {setDisplayname(event.target.value)}
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        validateEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {setPassword(event.target.value)}

    //Le Duong 
  //THIS FUNCTION FORCES THE PAGE TO NOT SCROLL AT ALL
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "scroll"
    };
}, []);

    //BRIAN: helped write this function to log in
    // currently just works with cookies and does no re-routing logic
    const handleSubmitLogin = (event) => {
        event.preventDefault();

        if (!validateEmail(input_email)) {
            setErrorMessage('Invalid email format');
            return;
        }
        //clear error message
        setErrorMessage('');
    
        // Replace fetch with mockFetch
        mockFetch('/login', { method: 'POST' })
          .then(response => {
            if (response.ok) {
              console.log("login success")
            } else {
              console.log("login error")
            }
          });
      }
 
    //BRIAN: helped write this function to sign up
    // currently just works with cookies and does no re-routing logic
    const handleSubmitRegister = (event) => {
        event.preventDefault();

        if (!validateEmail(input_email)) {
            setErrorMessage('Invalid email format.');
            return;
        }

        //clear error message
        setErrorMessage('');
    
        // Replace fetch with mockFetch
        mockFetch('/register', { method: 'POST' })
          .then(response => {
            if (response.ok) {
              console.log("signup response received ", response)
            } else {
              console.log("signup error")
            }
          });
      }

    const handleForgottenPassword = (event) => {
        event.preventDefault();

        setPasswordMessage("Yo that's crazy dawg, why'd you forget it ¯\\_(ツ)_/¯");
        return;
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }



    
    
  //Le Duong
  //creates HTML container that swaps between login page and registration page by calling setIsLogIn function
    return (
        <div className="container">
            <h1>Welcome to SportsCar Spotter</h1>
            { isLogIn ? (
                <>
                    <h2>Log In</h2>
                    <input type="email" value={input_email} onChange={handleEmailChange} placeholder="Email" />
                    <br />
                    <input type="password" value={input_password} onChange={handlePasswordChange} placeholder="Password" />
                    <br />
                    <button className="btn" onClick={handleForgottenPassword}>Forgot Password?</button>
                    <br />
                    {passwordMessage && <div style={{color: 'red'}}>{passwordMessage}</div>}
                    <br />
                    <button className="btn" onClick = {handleSubmitLogin}>Log In</button>
                    <p> 
                        <button className="btn" onClick={() => handlePageSwitch(false)}>Register</button>
                    </p>
                </>
            ) : (
                <>
                    <h2>Register</h2>
                    <input type="text" value={input_displayname} onChange={handleDisplaynameChange} placeholder="Displayname"/>
                    <br />
                    <input type="email" value={input_email} onChange={handleEmailChange} placeholder="Email" />
                    <br />
                    {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
                    <input type="password" value={input_password} onChange={handlePasswordChange} placeholder="Password" />
                    <br />
                    <button className="btn" onClick ={handleSubmitRegister}>Register</button>
                    <p>
                        Already have an account? 
                        <button className="btn" onClick={() => handlePageSwitch(true)}>Log In</button>
                    </p>
                </>
            )}
            
            <button onClick={() => {changePage("Test")}}>Go to Test Page</button>
        </div>
    );
};
