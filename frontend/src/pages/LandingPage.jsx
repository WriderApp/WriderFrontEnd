import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import wriderLogo from "../assets/wrider-logo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const wriderIndex = () => {
    navigate("/wrider");
  };

  return (
    <div>
      <Link to="/" className="navbar-logo">
        <img src={wriderLogo} alt="Wrider Logo" />
      </Link>
      <h1 id="logoText">Wrider</h1>
      <h2 className="slogan">Inspiration Organized</h2>
      {/* <p>
        The most simple and efficient digital journal to keep your life
        organized.
      </p> */}
      <button onClick={wriderIndex}>Login</button>
      <br />
      <br />
      <p><strong>Writer: </strong>One who writes!</p>
      <p><strong>Rider: </strong>A document that details a performing artist's needs in exchange for their performance</p>
      
      <p><strong>Wrider (Writer + Rider): </strong>An app that meets the writing needs of creatives</p>
    </div>
  );
};

export default LandingPage;
