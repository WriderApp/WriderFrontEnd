import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ShowEntry = () => {
    //Define variables for useParams hook
    //const { id } = useParams(); ==> same as defining the two variables below
    //retrieves params of object
    const params = useParams();
    //extract the id from the params ONLY
    const id = params.id
    //Define variable for useNavigate hook in order to use it - Handles Redirects
    const navigate = useNavigate();
    const [entry, setEntry] = useState (null);

    // const URL = 'http://localhost:4000/wrider';
    // const URL = process.env.REACT_APP_API_URL;
    const URL = import.meta.env.VITE_APP_API_URL;

    //useEffect to handle fetching data and updating DOM
    //[id] array runs UseEffect any time id will change which may happen if mounting/unmounting components.
    useEffect(() => {
        showOneEntry();
    }, [id]);

    //Function to Show data of specific entry by fetching our entry from the API by its id.
    const showOneEntry = async () => {
        try {
            const response = await fetch(`${URL}/wrider/${id}`);
            const data = await response.json();
            setEntry(data);
        } catch (error) {
            console.error(`Failed to open entry`, error);
        }
    };

    //Function to Delete current entry from database
    const handleDelete = async () => {
        try {
            //Fetch entry using id then run delete method on backend
            await fetch(`${URL}/wrider/${id}`, {
                method: 'DELETE',
            });
            //redirect to /wrider
            navigate('/wrider');
        } catch (error) {
            console.error(`Failed to delete entry`, error);
        }
    };

    //Function to handle reading the entrys docType (manuscript/journal/moodboard) and then send user to edit form for that specific docType from the show page
    const handleEdit = () => {
        //look at current state of our entry
        if (entry) {
            //look at the entry's docType - depending on the docType, go to a different edit route
            switch (entry.docType) {
                case 'journal':
                    navigate(`/wrider/edit-journal/${id}`);
                    break;
                case 'manuscript':
                    navigate(`/wrider/edit-manuscript/${id}`);
                    break;
                case 'moodBoard':
                    navigate(`/wrider/edit-moodboard/${id}`);
                    break;
                default:
                    console.error(`Unable to read document type`);
            }
        }
    }

    if (!entry) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{entry.title}</h1>
            <p>{entry.body}</p>
            <img id="stars" src={`/public/images/${entry.rating}.png`} />
            <br />
            <br />
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => navigate(-1)}>Back</button> 
        </div>
    );
};

export default ShowEntry;

// Code as per Christopher Sy 