import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import FlightSection from '../components/FlightSection/FlightSection';
import FlightDeals from '../components/FlightDeals/FlightDeals';
import TravelExtras from '../components/TravelExtras/Extras';
import Newsletter from '../components/Newsletter/Newsletter';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
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
  )
}

export default Home