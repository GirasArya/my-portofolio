import './App.css';
import Navbar from '../src/Features/Navbar/Navbar'
import Hero from '../src/Features/Main Display/Hero'
import About from './Features/About Me/About';
import Tech from './Features/Technology/Tech';


function App() {
  return (
    <div className="App font-main">
      <Navbar />
      <Hero />
      <About />
      <Tech />
    </div>
  );
}

export default App;
