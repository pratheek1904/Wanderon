
import './App.css';
import {BrowserRouter,Route,Routes} from  'react-router-dom'
import Home from './Home';
import About from './About';
import Project from './Project';
import NavBar from './NavBar';

function App() {
  return (
  <BrowserRouter>
  <NavBar/>
  <Route path='/' exact component={Home}/>
  <Route path='/About'  component={About}/>
  <Route path='/Project' component={Project}></Route>
  </BrowserRouter>
  );
}

export default App;
