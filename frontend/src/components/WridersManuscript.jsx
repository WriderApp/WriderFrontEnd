import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WridersManuscript = () => {
    const params = useParams();
    const id = params.id;

    const [entry, setEntry] = useState({
        user: "",
        title: "",
        docType: "manuscript",
        date: "",
        body: "",
        favorites: false,
    });

    const navigate = useNavigate();

    // const URL = "https://localhost:4000/wrider";
    // const URL = process.env.REACT_API_URL;
    const URL = import.meta.env.VITE_APP_API_URL;

    useEffect(() => {
        //if id is truthy (exist) then continue with fetch
        if (id) {
            fetch(`${URL}/wrider/${id}`)
            .then(response => response.json())
            .then(data => setEntry(data))
            .catch(error => console.error("Failed to fetch entry:", error));
        }
    }, [id, URL]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setEntry((entryData) => ({...entryData, [name]: type === "checkbox" ? checked : value,
        }));
    }

    //Manage form submission & redirect
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const method = id ? "PUT" : "POST";
            const endpoint = id ? `${URL}/wrider/${id}` : `${URL}/wrider`;

            // await fetch(`${URL}/wrider`, {
            //  method: "POST",
            //  headers: {"Content-Type": "application/json" },
            //  body: JSON.stringify(formData),
            // });
            await fetch(endpoint, {
                method,
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(entry),
            });
            navigate("/wrider");
        } catch (error) {
            console.error("Failed to create manuscript", error);
        }
    };

    return (
        <div>
            <h1>Manuscript</h1>
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
        </div>
    );
};

export default WridersManuscript;