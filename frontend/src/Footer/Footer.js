import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <hr className='hr'/>
      <div className='footer_txt'>
        <div>
          <FaRegCopyright className='copyright' />
          <span className='footer_span'>2024 travela airways, All Rights Reserved</span>
        </div>
        
        <h5>Privacy Policy | Site Help</h5>
      </div>
    </footer>
  )
}
