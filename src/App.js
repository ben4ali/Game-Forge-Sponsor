
import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Mission } from './components/Mission';
import { Portfolio } from './components/Portfolio';
import { Brands } from './components/Brands';
import { Team } from './components/Team';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Mission/>
      <Portfolio />
      <Brands />
      <Team />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
