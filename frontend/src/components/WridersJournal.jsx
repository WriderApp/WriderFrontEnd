// Code as per Christoper Sy

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const WridersJournal = () => {
    const params = useParams();
    const id = params.id;

    const [entry, setEntry] = useState({
        user: "",
        title: "",
        docType: "journal",
        date: "",
        body: "",
        favorites: false,
    });

    const navigate = useNavigate();

    //const URL = "http://localhost:4000/journal/wrider";
    //const URL = process.env.REACT_APP_API_URL;
    const URL = import.meta.env.VITE_APP_API_URL;

    //For Handling Editing an entry using the same form
    useEffect(() => {
        //if id is truthy (exist) then continue with fetch
        if (id) {
            // GET info of the entry using its id
            fetch(`${URL}/wrider/${id}`)
            //parse as JSON
            .then(response => response.json())
            //fetch data then update the components' state
            .then(data => setEntry(data))
            //error if issues occur
            .catch(error => console.error("Failed to fetch entry:", error));
        }
    }, [id, URL]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setEntry((entryData) => ({...entryData, [name]: type === 'checkbox' ? checked : value,
        }));
    };

    //change function to be called whenever values from current state is changed
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // if there is an existing id, this form is PUT method (aka EDIT)
            // if there is no existing id, this form is POST method (aka NEW)
            const method = id ? "PUT" : "POST";
            const endpoint = id ? `${URL}/wrider/${id}` : `${URL}/wrider`;

            //await fetch(`${URL}/wrider`, {
            //  method: "POST",
            //  headers: {"Content-Type": "application/json" },
            //  body: JSON.stringify(formData),
            
            await fetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(entry),
            });
            //Redirect user to /wriders after successful submission
            navigate("/wriders");
        } catch (error) {
            console.error("Something went wrong with the entry:", error);
        }
    };

    return (
        <div>
            <h1>Journal Entry</h1>
        <form onSubmit={handleSubmit}>
            <label>
                User:
                <input
                type="text"
                name="user"
                value={entry.user}
                onChange={handleChange} />
            </label>
            <br />
            <label>
                Title:
                <input
                type="text"
                name="title"
                value={entry.title}
                onChange={handleChange} />
            </label>
            <br />
            <label>
                Date:
                <input
                type="date"
                name="date"
                value={entry.date}
                onChange={handleChange} />
            </label>
            <br />
            <label>
                Body:
                <textarea
                name="body"
                value={entry.body}
                onChange={handleChange}
                required />
            </label>
            <br />
            {/* <button type="submit">Create Entry</button> */}
            <button type="submit"> {id ? "Save Changes" : "Create Entry"} </button>
        </form>
        <button onClick={() => navigate(-1)}>Back</button> 
        </div>
            );
        };

        export default WridersJournal;