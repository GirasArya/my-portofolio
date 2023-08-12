import './App.css';
import Navbar from '../src/Features/Navbar/Navbar'
import Hero from '../src/Features/Main Display/Hero'
import Experience from './Features/Experience/Experience';
import Tech from './Features/Technology/Tech';
import Portfolio from './Features/Portfolio/Portfolio';
import Contact from './Features/Contact/Contact';
import Footer from './Features/Footer/Footer';


function App() {
  return (
    <div className="App font-main">
      <Navbar />
      <Hero />
      <Tech />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
