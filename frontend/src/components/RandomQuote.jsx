import { useEffect, useState } from 'react';

const RandomQuote = () => {
    const [random, setRandom] = useState('')

    const URL = import.meta.env.VITE_APP_API_URL;

    const requestRandom = async () => {
        try {
            const response = await fetch(`${URL}/database/quote/random`);
            const data = await response.json();
            setRandom(data);
        } catch (error) {
            console.error('Failed to get random quote', error);
        }
    };

    useEffect(() => {
        requestRandom();
    }, []);

    if (!random) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <p>"{random.quote} - {random.source}"</p>
        </div>
    );
};

export default RandomQuote;