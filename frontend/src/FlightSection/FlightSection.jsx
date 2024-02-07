import React, {useState} from "react";
import "./flightSection.css";
import { MdArrowDropDown } from "react-icons/md";
import { CgArrowsExchange } from "react-icons/cg";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";

export default function FlightSection() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count +1)
  } 

  function decrement(){
    setCount(count -1)
  } 

  return (
    <div id="flightSection" className="flight_section">
      <div className="flight_box">
        <div className="flight_header">
          <div className="flight_items">
            <h1>book flight</h1>
          </div>

          <div className="flight_items">
            <h1>check in</h1>
          </div>

          <div className="flight_items">
            <h1>my trip</h1>
          </div>

          <div className="flight_items">
            <h1>flight status</h1>
          </div>
        </div>

        <div className="flight_enquires">
          <div className="economy_section">
            <div className="head">
              <h2 className="economy_class">Economy</h2><MdArrowDropDown className="dropdown"/>
            </div>

            <div className="class_section">
                <div id="class" className="class">
                   <span value="economy" selected>Economy</span>
                   <span value="Business Class">Business Class</span>
                   <span value="First Class">First Class</span>
               </div>
            </div>
          </div>

          <div className="passengers">
            <div className="head">
              <h2 name="passengers" id="passengers">Passengers</h2><MdArrowDropDown className="dropdown"/>
            </div>

            <div className="people_section">
              <div className="people">
                <h3>Adult</h3>
                <p>
                  <span onClick={decrement}>-</span>
                  <span>{count}</span>
                  <span onClick={increment}>+</span>
                </p>
              </div>

              <div className="people">
                <h3>
                  Children <span>2 - 11 years</span>
                </h3>
                <p>
                  <span onClick={decrement}>-</span>
                  <span>{count}</span>
                  <span onClick={increment}>+</span>
                </p>
              </div>

              <div className="people">
                <h3>
                  Infants <span>under 2 years</span>
                </h3>
                <p>
                 <span onClick={decrement}>-</span>
                  <span>{count}</span>
                  <span onClick={increment}>+</span>
                </p>
              </div>

              <div className="people_btn">
                <button className="btn btn1">cancel</button>
                <button className="btn btn2">done</button>
              </div>

            </div>
          </div>
        </div>

        <div className="departure_section">
           <div className="from_to">
              <div className="input_box">
                 <GiAirplaneDeparture className="input_icon" /> 
                 <input placeholder="From" className="inp"/>
              </div>

              <CgArrowsExchange className="arrows" />

              <div className="input_box">
                 <GiAirplaneArrival className="input_icon" /> 
                 <input placeholder="To" className="inp"/>
              </div>
           </div>

          <div className="trip_section">
            <div className="trip">
              <div className="trip_head">
                  <h2>Trip</h2>
                  <MdArrowDropDown className="dropdown"/>
              </div> 

              <div className="trip_form">
                <div id="class" className="class">
                    <div className="trip_options">
                      <span value="return" selected>Return</span>
                      <input type="radio"/>
                    </div> 

                    <div className="trip_options">
                      <span value="one-way">One-way</span>
                      <input type="radio" />
                    </div>

                    <div className="trip_options">
                       <span value="multi-city">Multi-city</span>
                       <input type="radio" />
                    </div>
                </div>
              </div>
           </div>

            <div className="trip_depart">
              <input placeholder="return" type="date" />
              <input placeholder="return" type="date" />
            </div>
          </div>
        
        </div>

        <div className="show_flight">
            <div className="promo_box">
                <FaPlus className="plus_icon"/>
                <p>Add Promo Code</p>
            </div>

            <div>
                <button className="btn">Show Flight</button>
            </div>
        </div>
      </div>
    </div>
  );
}
