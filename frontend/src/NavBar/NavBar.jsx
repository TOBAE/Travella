import React from "react";
import {Link} from "react-router-dom";
// import FlightSection from '../FlightSection/FlightSection';
// import FlightDeals from '../FlightDeals/FlightDeals';
// import TravelExtras from '../TravelExtras/Extras';
// import Newsletter from '../Newsletter/Newsletter';
// import Contact from '../Contact/Contact';
import "./navBar.css";
import Login from "../Auth/login";
import Register from "../Auth/register";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="banner">
      <header>
        <div>
         <h2 className="logo"><Link to="/">travela airways</Link></h2>
        </div>

        <input type="checkbox" id="check" />
        <label for="check" className="icons">
          <RiMenu3Line className="bar" />
          <IoClose className="close" />
        </label>

      <nav className="navbar">
        <ul className="navitem">
          <li className="active"><Link to="/flightSection">book</Link></li>
          <li><Link to="/flightDeals">deals</Link></li>
          <li><Link to="/travelExtras">extras</Link></li>
          <li><Link to="/newsletter">newsletter</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>

        <div className="auth">
          <a href={Login}>login</a>
          <span>|</span>
          <a href={Register}>register</a>
        </div>
      </nav>

      </header>
    </div>
  );
}
