import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav>
      <div className="navContainer">
        <div className="logoContainer">
          <img src="./assets/logo.png" alt="logo"/>
        </div>
       
          <ul className="navList">
            <NavLink to="/portfolio"><li>Portfolio</li></NavLink>
            <NavLink to="/products"><li>Productos</li></NavLink>
            <NavLink to="/contact"><li>Contacto</li></NavLink>
          </ul>
    
      </div>
    </nav>
  );
};
