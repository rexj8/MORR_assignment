import Logo from './../Components/Logo.js'
import Navbar from './../Components/Navbar.js'
import MovieLists from './MovieCompo/MovieLists.js'
import './../Components/Navbar.css'
import './../Components/Cards.css'

function Movie() {
  return (
    <div className="App">
      {/* <Navbar name="Movies"/> */}
      <MovieLists name="0"/>
    </div>
  );
}

export default Movie;
