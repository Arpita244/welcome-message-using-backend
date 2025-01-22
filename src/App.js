import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
function App() {
    const [welcomeMessage, setWelcomeMessage] = useState('');
    useEffect(() => {
      async function arpi() {
        const response = await axios.get('http://localhost:5000/welcome');
                setWelcomeMessage(data.message);
            }
    }, []);

    return (
        <div>
            <h1>{welcomeMessage}</h1>
        </div>
    );
}

export default App;
