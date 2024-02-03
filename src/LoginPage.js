import React, { useState } from 'react';

function LoginPage() {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleToggleMode = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="container">
            <h2>{isSignIn ? 'Sign In' : 'Create Account'}</h2>
            <div className="input-group">
                <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
                <input type="password" placeholder="Password" />
            </div>
            <button className="btn">{isSignIn ? 'Sign In' : 'Create Account'}</button>
            <p>{isSignIn ? "New? " : "Already have an account? "} 
               <button className="btn" onClick={handleToggleMode}>
                   {isSignIn ? 'Create Account' : 'Sign In'}
               </button>
            </p>
        </div>
    );
}

export default LoginPage;
