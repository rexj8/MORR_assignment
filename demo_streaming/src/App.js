import Logo from './Components/Logo.js'
import Navbar from './Components/Navbar.js'
import Cards from './Components/Cards.js'
import FooterPage from './Components/Footer.js'
import Movie from './Movies/Movie.js'
import './App.css';
import './Components/Navbar.css'
import './Components/Cards.css'

import {BrowserRouter as Router , Route , Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar name="Titles"/>
      <Cards name="Series"/>
      <Cards name="Movies"/>
      <FooterPage/>
      {/* <Movie/> */}
    </div>
  );
}

export default App;
