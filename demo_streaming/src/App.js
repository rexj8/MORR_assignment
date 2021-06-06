import Logo from './Components/Logo.js'
import Navbar from './Components/Navbar.js'
import Cards from './Components/Cards.js'
import './App.css';
import './Components/Navbar.css'
import './Components/Cards.css'

function App() {
  return (
    <div className="App">
      <Navbar name="Titles"/>
      <Cards name="Series"/>
      <Cards name="Movies"/>
    </div>
  );
}

export default App;
