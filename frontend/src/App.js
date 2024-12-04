import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then((response) => response.text())
            .then((data) => setMessage(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>React Frontend</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
