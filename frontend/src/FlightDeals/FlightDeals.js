import React from 'react';
import './flightdeals.css';
import { CgAirplane } from "react-icons/cg";
import London from '../image/london.jpg';
import Dubai from '../image/dubia.jpg';
import Valencia from '../image/valencia.jpeg';
import Rome from '../image/rome.jpeg';
import Berlin from '../image/berlin.jpeg';

export default function FlightDeals() {
  return (
    <div className='flightdeal_section'>
        <div className='flightdeal_header'>
            <h1>Trending Flight Deals</h1>
        </div>

        <div className='deals'>
            <div className='deal_box item1'>
                <div className='image1'>
                   <img src={London} alt='' />
                </div>
                
                <div className='details'>
                    <h2><CgAirplane className='plane plane_up'/>london</h2>
                    <h2><CgAirplane className='plane plane_down'/>abuja</h2>
                    <p>from USD 521</p>
                </div>
            </div>

            <div className='deal_boxes item2'>
               <div className='image'>
                  <img src={Dubai} alt='' />
               </div>

               <div className='details'>
                    <h2><CgAirplane className='plane plane_up'/>dubai</h2>
                    <h2><CgAirplane className='plane plane_down'/>lagos</h2>
                    <p>from USD 521</p>
                </div>
            </div>

            <div className='deal_boxes item3'>
                <div className='image'>
                  <img src={Valencia} alt='' />
                </div>

               <div className='details'>
                    <h2><CgAirplane className='plane plane_up'/>valencia</h2>
                    <h2><CgAirplane className='plane plane_down'/>port harcourt</h2>
                    <p>from USD 521</p>
                </div>
            </div>

            <div className='deal_boxes item4'>
                <div className='image'>
                  <img src={Rome} alt='' />
                </div>

               <div className='details'>
                    <h2><CgAirplane className='plane plane_up'/>rome</h2>
                    <h2><CgAirplane className='plane plane_down'/>enugu</h2>
                    <p>from USD 521</p>
                </div>
            </div>

            <div className='deal_boxes item5'>
                <div className='image'>
                  <img src={Berlin} alt='' />
                </div>

                <div className='details'>
                    <h2><CgAirplane className='plane plane_up'/>berlin</h2>
                    <h2><CgAirplane className='plane plane_down'/>kano</h2>
                    <p>from USD 521</p>
                </div>
            </div>
        </div>
    </div>
  )
}

