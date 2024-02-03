import React, { useState } from 'react';

function LoginPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState('');

    const handleToggleMode = () => {
        setIsSignIn(!isSignIn);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="container">
            <h1>{"Welcome to SportsCar Spotter"}</h1>
            <h2>{isSignIn ? 'Sign In' : 'Create Account'}</h2>
            { !isSignIn && (
                <div className="input-group">
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                </div>
            )}
            <div className="input-group">
                <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
                <input type="password" placeholder="Password" />
            </div>
            <button className="btn">{isSignIn ? 'Sign In' : 'Create Account'}</button>
            <p>{isSignIn ? "Don't have an account? " : "Already have an account? "} 
               <button className="btn" onClick={handleToggleMode}>
                   {isSignIn ? 'Create Account' : 'Sign In'}
               </button>
            </p>
        </div>
    );
}

export default LoginPage;
