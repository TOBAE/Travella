import { useState, useRef, useEffect } from "react";
import {  FaLinkedinIn, FaAngleDown, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import './Contact.css';



export default function Contact() {
  const [openIndex, setOpenIndex] = useState(null);

  const activities = [
    {
      title: "travela airways",
      list: ["about us", "awards", "careers", "sponsorship", "press releases"],
    },
    {
      title: "group companies",
      list: [
        "airport",
        "travela duty fee",
        "travela airways cargo",
        "international media services",
      ],
    },
    {
      title: "business solutions",
      list: ["corporate travel", "meetings and events", "advertise with us"],
    },
    {
      title: "business partners",
      list: ["affiliate marketing", "e-procurement", "trade partners"],
    },
    {
      title: "help",
      list: ["contact us", "travel alerts"],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='contact' className='contact_container'>
        {activities.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          list={item.list}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}

        <div className='socials'>
            <h2>lets stay connected</h2>

            <div className='social_items'>
                <FaFacebookF className='socials_icon'/>
                <FaInstagram className='socials_icon'/>
                <FaXTwitter className='socials_icon'/>
                <FaLinkedinIn className='socials_icon'/>
            </div>
        </div>
    </div>
  )
}

function AccordionItem({ title, list, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px`: "0px");
    }
  }, [isOpen]);

  return (
    <div className="activities">
      <div className="activities_header" onClick={onClick}>
        <h2>{title}</h2>
        <FaAngleDown
          className={`activities_icon ${isOpen ? "rotate" : ""}`}
        />
      </div>

        <div ref={contentRef} className="list"
            style={{
            maxHeight: height,
            overflow: "hidden",
            transition: "max-height 0.35s ease",
        }}
        >
          {list.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
  );
}