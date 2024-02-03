import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';

function App() {
    return (
        <div>
            <LoginPage />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
