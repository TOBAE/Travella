import React from 'react';
import './Extras.css';
import { FaHotel } from "react-icons/fa6";
import { BsLuggage } from "react-icons/bs";
import { IoCarSportSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTeamUpgrade } from "react-icons/gi";

export default function Extras() {
  return (
    <div id='travelExtras' className='extra_section'>
        <h1>Travel Extras</h1>

        <div className='extras_items'>
            <div className='extras'>
                <FaHotel className='icon'/>
                <h3>Hotels</h3>
            </div>

            <div className='extras'>
                <BsLuggage className='icon'/>
                <h3>Baggages</h3>
            </div>

            <div className='extras'>
                <IoCarSportSharp className='icon'/>
                <h3>Car rentals</h3>
            </div>

            <div className='extras'>
                <FaPeopleGroup className='icon'/>
                <h3>Group booking</h3>
            </div>

            <div className='extras'>
                <GiTeamUpgrade className='icon'/>
                <h3>Upgrade flight</h3>
            </div>

        </div>
    </div>
  )
}
