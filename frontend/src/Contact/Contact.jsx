import React from 'react';
import './Contact.css';
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export default function Contact() {
  var accordion = document.getElementsByClassName('activities');
  var angleDown = document.getElementsByClassName('activities_icon');
  var i;

//   const toggleAngleDown = () =>{
//     for(i = 0; i < accordion.length; i++){
//         accordion[i].() =>{
//             this.classList.toggle('active')
//         }
//       }
    
//   }

//  const toggleAngleDown = () =>{
//     this.classList.toggle('active')
//  }



  return (
    <div id='contact' className='contact_container'>
        <div  className='activities'>
            <div className='activities_header'>
                <h2>travela airways</h2>
                <FaAngleDown className='activities_icon'/>
            </div>

            <div className='list'>
                <p>about us</p>
                <p>awards</p>
                <p>careers</p>
                <p>sponsorship</p>
                <p>press releases</p>
            </div>
        </div>

        <div className='activities'>
            <div className='activities_header'>
                <h2>group companies</h2>
                <FaAngleDown className='activities_icon'/>
            </div>

            <div className='list'>
                <p>airport</p>
                <p>travela duty fee</p>
                <p>travela airways cargo</p>
                <p>international media services</p>
            </div>
        </div>

        <div className='activities'>
            <div className='activities_header'>
                <h2>business solutions</h2>
                <FaAngleDown className='activities_icon'/>
            </div>

            <div className='list'>
                <p>corporate travel</p>
                <p>meetings and events</p>
                <p>advertise with us</p>
            </div>
        </div>

        <div className='activities'>
            <div className='activities_header'>
                <h2>business partners</h2>
                <FaAngleDown className='activities_icon'/>
            </div>

            <div className='list'>
                <p>affiliate marketing</p>
                <p>e-procurement</p>
                <p>trade partners</p>
            </div>
        </div>

        <div className='activities'>
            <div className='activities_header'>
                <h2>help</h2>
                <FaAngleDown className='activities_icon'/>
            </div>

            <div className='list'>
                <p>contact us</p>
                <p>travel alerts</p>
            </div>
        </div>

        <div className='socials'>
            <h2>lets stay connected</h2>

            <div className='social_items'>
                <FaFacebookF className='socials_icon'/>
                <IoLogoInstagram className='socials_icon'/>
                <FaXTwitter className='socials_icon'/>
                <FaLinkedinIn className='socials_icon'/>
            </div>
        </div>
    </div>
  )
}
