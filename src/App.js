
import './App.css';
import {BrowserRouter,Route, } from  'react-router-dom'
import NavBar from './NavBar';
import Xmas from './Components/Xmas';
import Weekend from './Components/Weekend';
import Backpack from './Components/Backpack';
import Home from './Components/Home';
import Login from './Components/Login';
import Recomendplaces from './Components/Recomendplaces';
import Search from './Search';

function App() {
  return (
  <BrowserRouter>
  <NavBar/>

  <Route path={'/'} exact component={Home}></Route>
  <Route path='/Xmas'  component={Xmas}/>
  <Route path='/Login' component={Login}/>
  <Route path='/Weekend' component={Weekend}/> 
  <Route path='/Backpack' component={Backpack}/>
  <Route path='/Recomendplaces' component={Recomendplaces}/> 
  <Route path='/Search' component={Search}/> 
  </BrowserRouter>

  );
}

export default App;
