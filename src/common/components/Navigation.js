import React from "react";
import "../styles/common.scss";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="links-container">
      <ul className="links">
        <li>
          <NavLink to="/" activeclassname="active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeclassname="active">
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active" className="contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <button className="toggle-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navigation;
