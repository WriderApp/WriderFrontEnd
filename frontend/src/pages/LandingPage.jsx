import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const wriderIndex = () => {
        navigate('/wrider');
    };

    return (
        <div>
            <h1>Wrider</h1>
            <p>The most simple and efficient digital journal to keep your life organized.</p>
            <button onClick={wriderIndex}>Login</button>
        </div>
    );
};

export default LandingPage;