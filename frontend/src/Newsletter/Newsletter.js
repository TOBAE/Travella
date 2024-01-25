import React from 'react';
import './newsletter.css'

export default function Newsletter() {
  return (
    <div className='news_container'>
      <div className='news_details'>
        <h1>Never miss an offer</h1>
        <h4>Subscribe and be the first to receive our exclusive offers.</h4>

        <form>
            <input type='email' placeholder='Email address' className='email_input'/>
            <div className='acceptbox'>
               <input type='checkbox'/>
               <p>I would like to get offers and news from Travela Airways. I have read and understood the <a href="#">privacy notice.</a></p>
            </div>

            <button type='submit' className='details_btn'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}
