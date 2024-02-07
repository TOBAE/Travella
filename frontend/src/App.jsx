import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';
import FlightSection from './FlightSection/FlightSection';
import FlightDeals from './FlightDeals/FlightDeals';
import TravelExtras from './TravelExtras/Extras';
import Newsletter from './Newsletter/Newsletter';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import './App.css';

export default function App() {
  return (
    <Router>

    <div>
       <NavBar />
       {/* <Hero />
       <FlightSection />
       <FlightDeals />
       <TravelExtras />
       <Newsletter />
       <Contact />
       <Footer /> */}

          <Routes> 
        <Route path='/hero' element={<Hero />} />
        <Route path='/flightSection' element={<FlightSection />} />
        <Route path='/flightDeals' element={<FlightDeals />} />
        <Route path='/travelExtras' element={<TravelExtras />} />
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />
          </Routes>

    </div>
    </Router>

  );
}


