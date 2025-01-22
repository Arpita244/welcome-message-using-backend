import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
    const [welcomeMessage, setWelcomeMessage] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/welcome')
            .then((response) => response.json())
            .then((data) => {
                setWelcomeMessage(data.message);
            })
            .catch((error) => {
                console.error('Error fetching welcome message:', error);
            });
    }, []);
    return (
        <div>
            <h1>{welcomeMessage}</h1>
        </div>
    );
}

export default App;
