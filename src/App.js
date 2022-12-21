import './App.css';
import About from './components/About';
import Carausel from './components/Carausel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav'
import Services from './components/Services';
import Teams from './components/Teams';

function App() {
  return (
    <div>
      <Nav/>
      <Carausel/>
      <About/>
      <Services/>
      <Teams/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
