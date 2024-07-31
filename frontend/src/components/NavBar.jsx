import React from "react";
import { Link } from "react-router-dom";
import wriderLogo from "../assets/wrider-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={wriderLogo} alt="Wrider Logo" />
      </Link>
      <h1 id="logoText">Wrider</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/wrider/journal">Write in Your Journal</Link>
        </li>
        <li>
          <Link to="/wrider/manuscript">Write Something Big in Manuscript</Link>
        </li>
        <li>
          <Link to="/wrider/mood">Brainstorm in a Mood Board</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
