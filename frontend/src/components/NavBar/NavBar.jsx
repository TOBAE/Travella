// import { useState, useEffect } from "react";
// import { FaBarsStaggered, FaRegCircleUser, FaXmark  } from 'react-icons/fa6';
// import "./navBar.css";


// export default function NavBar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//   return (
//     <nav
//       className={`
//         ${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//       }`}
//     >
//       <div className="navbar">
//         <h2 className="logo">travela airways</h2>

//         <ul className={`navitem ${isMenuOpen ? "open" : ""}`}>
//           <li className="active">book</li>
//           <li>deals</li>
//           <li>extras</li>
//           <li>newsletter</li>
//           <li>contact</li>

//           <div className="auth_">
//             <a href='#'>login</a>
//             <span>|</span>
//             <a href='#'>register</a>
//           </div>
//         </ul>

//         <div className="auth">
//           <FaRegCircleUser className="user_icon" />
          
//           <div className="auth_text">
//             <a href='#'>login</a>
//             <span>|</span>
//             <a href='#'>register</a>
//           </div>

//         </div>


//         <button onClick={() => setIsMenuOpen((prev) => !prev)}
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
//         >
//           {isMenuOpen ? <FaXmark className="close" /> : <FaBarsStaggered className="bars" /> }
//         </button>

//       </div>

//     </nav>
//   );
// }


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBarsStaggered, FaRegCircleUser, FaXmark } from 'react-icons/fa6';
import "./navBar.css";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();  

  // show announcement only on homepage
  const showAnnouncement = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showAnnouncement && (
        <div className="announcement">
          <p className="scroll-text">
            Welcome to Travela Airways — Enjoy exclusive flight deals this week! 
          </p>
        </div>
      )}

      <nav
        className={`
          navbar_container 
          ${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"}
        `}
      >
        <div className="navbar">
          <div className="logo_container">
            <h2 className="logo">travela airways</h2>
            <span className="logo_span">...exclusive experience</span>
          </div>
          

          <ul className={`navitem ${isMenuOpen ? "open" : ""}`}>
            <li className="active">book</li>
            <li>deals</li>
            <li>extras</li>
            <li>newsletter</li>
            <li>contact</li>

            <div className="auth_">
              <a href='#'>login</a>
              <span>|</span>
              <a href='#'>register</a>
            </div>
          </ul>

          <div className="auth">
            <FaRegCircleUser className="user_icon" />

            <div className="auth_text">
              <a href='#'>login</a>
              <span>|</span>
              <a href='#'>register</a>
            </div>
          </div>

          <button 
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaXmark className="close" /> : <FaBarsStaggered className="bars" />}
          </button>
        </div>
      </nav>
    </>
  );
}
