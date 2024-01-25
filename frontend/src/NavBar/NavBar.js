import React from "react";
import "./navBar.css";
import Login from "../Auth/login";
import Register from "../Auth/register";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  var i 
  i++

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
        <div className="navitem">
          <a href="#" style={{transitionDelay : `calc(.15s * ${i} )`}}>book</a>
          <a href="#" style={{transitionDelay : `calc(.15s * ${i} )`}}>deals</a>
          <a href="#" style={{transitionDelay : `calc(.15s * ${i} )`}}>extras</a>
          <a href="#" style={{transitionDelay : `calc(.15s * ${i} )`}}>newsletter</a>
          <a href="#" style={{transitionDelay : `calc(.15s * ${i} )`}}>contact</a>
        </div>

        <div className="auth">
          <a href={Login} style={{transitionDelay : `calc(.15s * ${i} )`}}>login</a>
          <span>|</span>
          <a href={Register} style={{transitionDelay : `calc(.15s * ${i} )`}}>register</a>
        </div>
      </nav>

      </header>
    </div>
  );
}
