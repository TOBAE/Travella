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
    <div>
       <NavBar />
       <Hero />
       <FlightSection />
       <FlightDeals />
       <TravelExtras />
       <Newsletter />
       <Contact />
       <Footer />
    </div>
  );
}


