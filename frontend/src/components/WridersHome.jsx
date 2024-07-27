import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WridersHome = () => {
    const [entries, setEntries] = useState([]);

    //Once app is deployed, change URL from http: to https: (secured)
    // const URL = 'http://localhost:4000/wrider';
    // const URL = process.env.REACT_APP_API_URL;
    const URL = import.meta.env.VITE_APP_API_URL;

    const fetchEntries = async () => {
        try {
            const response = await fetch(`${URL}/wrider`);
            const data = await response.json();
            setEntries(data);
        } catch (error) {
            console.error('Failed to fetch entries', error);
        }
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    return (
        <div>
            <h1>Welcome back, Christopher</h1>
            <ul>
                {entries.map(entry => (
                    <li key={entry._id}>
                    <Link to={`/wrider/${entry._id}`}>{entry.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WridersHome;