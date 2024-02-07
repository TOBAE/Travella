import React from 'react';
import './flightdeals.css';
// import { CgAirplane } from "react-icons/cg";
import { RiPlaneLine } from "react-icons/ri";
import Beijing from '../image/beijing.jpeg';
import Dubai from '../image/dubia.jpg';
import Valencia from '../image/valencia.jpeg';
import Rome from '../image/rome.jpeg';
import Berlin from '../image/berlin.jpeg';

export default function FlightDeals() {
  return (
    <div id='flightDeals' className='flightdeal_section'>
        <div className='flightdeal_header'>
            <h1>Trending Flight Deals</h1>
        </div>

        <div className='deals'>
            <div className='deal_box item1'>
                <div className='image1'>
                   <img src={Beijing} alt='' />
                </div>
                
                <div className='details'>
                    <div className='places'>
                       <RiPlaneLine className='plane plane_up'/>
                       <h2>Beijing</h2>
                    </div>

                    <div className='places'>
                        <RiPlaneLine className='plane plane_down'/>
                        <h2>abuja</h2>
                    </div>

                    <p>from USD 521</p>
                </div>
            </div>

            <div className='deal_boxes item2'>
               <div className='image'>
                  <img src={Dubai} alt='' />
               </div>

               <div className='details'>
                    <div className='places'>
                       <RiPlaneLine className='plane plane_up'/>
                       <h2>dubai</h2>
                    </div>

                    <div className='places'>
                        <RiPlaneLine className='plane plane_down'/>
                        <h2>port harcourt</h2>
                    </div>

                    <p>from USD 521</p>
                </div>
            </div>

            <div className='deal_boxes item3'>
                <div className='image'>
                  <img src={Valencia} alt='' />
                </div>

               <div className='details'>
                    <div className='places'>
                       <RiPlaneLine className='plane plane_up'/>
                       <h2>valencia</h2>
                    </div>

                    <div className='places'>
                        <RiPlaneLine className='plane plane_down'/>
                        <h2>lagos</h2>
                    </div>

                    <p>from USD 521</p>
                </div>
            </div>

            <div className='deal_boxes item4'>
                <div className='image'>
                  <img src={Rome} alt='' />
                </div>

               <div className='details'>
                    <div className='places'>
                       <RiPlaneLine className='plane plane_up'/>
                       <h2>rome</h2>
                    </div>

                    <div className='places'>
                        <RiPlaneLine className='plane plane_down'/>
                        <h2>enugu</h2>
                    </div>
                    
                    <p>from USD 521</p>
                </div>
            </div>

            <div className='deal_boxes item5'>
                <div className='image'>
                  <img src={Berlin} alt='' />
                </div>

                <div className='details'>
                    <div className='places'>
                       <RiPlaneLine className='plane plane_up'/>
                       <h2>berlin</h2>
                    </div>

                    <div className='places'>
                        <RiPlaneLine className='plane plane_down'/>
                        <h2>kano</h2>
                    </div>

                    <p>from USD 521</p>
                </div>
            </div>
        </div>
    </div>
  )
}

