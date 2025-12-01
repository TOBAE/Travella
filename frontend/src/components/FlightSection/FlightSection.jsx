import React, {useState, useRef, useEffect} from "react";
import "./flightSection.css";
import { MdArrowDropDown } from "react-icons/md";
import { CgArrowsExchange } from "react-icons/cg";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";

export default function FlightSection() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [tempPassengers, setTempPassengers] = useState({ ...passengers });
  const [tripType, setTripType] = useState("return");

  // refs for dropdown wrappers
  const classRef = useRef(null);
  const passengerRef = useRef(null);
  const tripRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdown &&
        !classRef.current?.contains(event.target) &&
        !passengerRef.current?.contains(event.target) &&
        !tripRef.current?.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // increment/decrement passenger count
  const increment = (type) => {
    setPassengers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrement = (type) => {
    setPassengers((prev) => ({ ...prev, [type]: Math.max(0, prev[type] - 1),}));
  };

  // toggle DropDown
  const toggleDropdown = (type) => {
    // setOpenDropdown((prev) => (prev === type ? null : type));
    setOpenDropdown((prev) => {
    const next = prev === type ? null : type;
    // when opening passengers, copy current confirmed passengers into temp
    if (next === "passengers") {
      setTempPassengers({ ...passengers });
    }
    return next;
  });
  };

  

  // simulate booking
  // const handleBookFlight = () => {
  //   const bookingData = {
  //     classType: selectedClass,
  //     passengers: passengers,
  //   };
  //   console.log("Booking data:", bookingData);
  //   alert(`Flight booked!\n${JSON.stringify(bookingData, null, 2)}`);
  // };


  return (
    <div id="flightSection" className="flight_section">
      <div className="flight_box">
        <div className="flight_header">
          {["book flight", "check in", "my trip", "flight status"].map(
            (text) => (
              <div className="flight_items" key={text}>
                <h1>{text}</h1>
              </div>
            )
          )}
        </div>

        <div className="flight_enquires">

          <div className="economy_section" ref={classRef}>
            <div className="head" onClick={() => toggleDropdown("class")}>
              <h2 className="economy_class">Economy</h2>
              <MdArrowDropDown className="dropdown"/>
            </div>
           {openDropdown === "class" && (
            <div className="class_section">
                <div id="class" className="class">
                  {["Economy", "Business Class", "First Class"].map((item) => (
                    <span
                      key={item}
                      className={`class_option ${selectedClass === item ? 'selected' : '' }`}
                      onClick={() => {setSelectedClass(item);}}
                    >
                      {item}
                    </span>
                  ))}
                </div>
            </div>
           )}
          </div>

          <div className="passengers" ref={passengerRef}>
            <div className="head"  onClick={() => toggleDropdown("passengers")}>
              <h2 name="passengers" id="passengers">Passengers</h2>
              <MdArrowDropDown className="dropdown"/>
            </div>
           {openDropdown === "passengers" && (
            <div className="people_section">
             {[
               { label: "Adult", type: "adults" },
               { label: "Children (2-11 yrs)", type: "children" },
               { label: "Infants (< 2 yrs)", type: "infants" },
              ].map(({ label, type }) => (
              <div className="people" key={type}>
                <h3>{label}</h3>
                
                <div className="people_controls" role="group" aria-label={label}>
                  <button type="button" className="count_btn"
                    onClick={(e) => { e.stopPropagation(); setTempPassengers(p => ({ ...p, [type]: Math.max(0, p[type] - 1) })); }}
                    aria-label={`decrease ${label}`}
                  >
                    −
                  </button>

                  <span className="count_display">{tempPassengers[type]}</span>

                  <button type="button" className="count_btn"
                    onClick={(e) => { e.stopPropagation(); setTempPassengers(p => ({ ...p, [type]: p[type] + 1 })); }}
                    aria-label={`increase ${label}`}
                  >
                    +
                  </button>
                  </div>
              </div>
             ))}

              <div className="people_btn">
                <button className="btn btn1" onClick={() => { setTempPassengers({...passengers }); setOpenDropdown(null)}}> cancel </button>
                <button className="btn btn2" onClick={() => {setPassengers({ ...tempPassengers }); setOpenDropdown(null)}}> done </button>
              </div>

            </div>
           )}
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
            <div className="trip" ref={tripRef}>
              <div className="trip_head" onClick={() => toggleDropdown("trip")}>
                  <h2>Trip</h2>
                  <MdArrowDropDown className="dropdown"/>
              </div> 

              {openDropdown === "trip" && (
              <div className="trip_form">
                {["return", "one-way", "multi-city"].map((t) => (
                    <div className="trip_options" key={t}>
                      <span>{t}</span>
                      <input type="radio" checked={tripType === t} onChange={() => setTripType(t)}/>
                    </div> 
                ))}
              </div>
              )}
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
