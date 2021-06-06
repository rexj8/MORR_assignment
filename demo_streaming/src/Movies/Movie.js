import Logo from './../Components/Logo.js'
import Navbar from './../Components/Navbar.js'
import Cards from './../Components/Cards.js'
import './../Components/Navbar.css'
import './../Components/Cards.css'

function Movie() {
  return (
    <div className="App">
      <Navbar name="Movies"/>
    </div>
  );
}

export default Movie;
