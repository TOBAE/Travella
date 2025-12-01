import React, { useState, useEffect, useRef } from 'react';
import './hero.css';

const slides = [
  {
    image: "/image/bck7.jpg",
    text: "Explore the World with Travela Airways",
    title: "Book flights easily & enjoy exclusive offers.",
    button: "Get Started",
  },
  {
    image: "/image/bck6.jpg",
    text: "Luxury and Comfort in the Skies",
    title: "Experience world-class service onboard.",
    button: "Learn More",
  },
  {
    image: "/image/bck5.jpg",
    text: "Your Journey Starts Here",
    title: "Connecting people through seamless travel.",
    button: "View Destinations",
  },
];

export default function Hero() {

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto change slide every 5s
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section
      className="hero_container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero_slidesContainer">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero_slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero_overlay">
              {index === current && (
                <div className="hero_content fade_in">
                  <p>{slide.text}</p>
                  <h1>{slide.title}</h1>
                  <button className="hero_btn">{slide.button}</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="hero_dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
