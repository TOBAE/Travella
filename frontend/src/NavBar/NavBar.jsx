import React from "react";
// import {Link} from "react-router-dom";
// import FlightSection from '../FlightSection/FlightSection';
// import FlightDeals from '../FlightDeals/FlightDeals';
// import TravelExtras from '../TravelExtras/Extras';
// import Newsletter from '../Newsletter/Newsletter';
// import Contact from '../Contact/Contact';
import "./navBar.css";
import Auth from "../Auth/auth";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="banner">
      <header>
        <div>
         <h2 className="logo">travela airways</h2>
        </div>

        <input type="checkbox" id="check" />
        <label for="check" className="icons">
          <RiMenu3Line className="bar" />
          <IoClose className="close" />
        </label>

      <nav className="navbar">
        <ul className="navitem">
          <li className="active">book</li>
          <li>deals</li>
          <li>extras</li>
          <li>newsletter</li>
          <li>contact</li>
        </ul>

        <div className="auth">
          <a href={Auth}>login</a>
          <span>|</span>
          <a href={Auth}>register</a>
        </div>
      </nav>

      </header>
    </div>
  );
}
