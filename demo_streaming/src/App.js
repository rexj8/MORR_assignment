import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './screens/Home';
import Movie from './screens/Movie';
import Series from './screens/Series';
import Nav1 from "./assets/Nav1"
import Footer from "./assets/Footer"

function App() {
  return (
	<Router>
		<Nav1/>
    	<div className="App">
			<Switch>
				<Route path="/" exact>
					<Home />	
				</Route>
				<Route path="/movies" exact>
					<Movie type="movie"/>
				</Route>
				<Route path="/series" exact>
					<Series type="series"/>
				</Route>
			</Switch>
    	</div>
		<Footer/>
	</Router>
  );
}

export default App;
