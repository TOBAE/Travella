import React from 'react';
// import './navBar.css';
import Login from '../Auth/login'
import Register from '../Auth/register'


export default function NavBar(){
    return (
        <nav>
            <h2 className='logo'>travela airways</h2>

            <ul>
                <li>home</li>
                <li>book flight</li>
                <li>deals</li>
                <li>extras</li>
                <li>newsletter</li>
                <li>contact</li>
            </ul>

            <div className='auth'>
                <a href={Login}>login</a>
                <span>|</span>
                <a href={Register}>register</a>
            </div>
        </nav>
    )
}