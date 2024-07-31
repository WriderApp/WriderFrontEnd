import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import RandomQuote from './RandomQuote';
import "../App.css";

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
      console.error("Failed to fetch entries", error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  //switch statemnet for className to allow for coloring each docType differently
  const docClass = (docType) => {
    switch (docType) {
      case 'journal':
        return 'journalColor';
      case 'manuscript':
        return'manuscriptColor';
      case'moodBoard':
        return 'moodboardColor';
    }
  }

  return (
    <div>
      <h1 className="header">Welcome back, Wrider User</h1>
      <h2 className="quote"><RandomQuote/></h2>
      {/* <Quote /> */}
      <Navbar />
      <div className="container-fluid overflow-scroll">
        {/* <ul className="card-text"> */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {entries.map((entry) => (
            // <div className="col mb-4" key={entry._id}>
            <div className="col mb-4" key={entry._id}>
              {/* <Link
                to={`/wrider/${entry._id}`}
                className=
              > */}
              <Link
                to={`/wrider/${entry._id}`}
                className="text-decoration-none"
              >
                <div
                  className={`card h-100 shadow p-3 mb-5 bg-body rounded ${docClass(entry.docType)}`}
                  // style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{entry.title}</h5>
                    <p className="card-text overflow-auto">{entry.body}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WridersHome;
