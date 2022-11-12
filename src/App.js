
import './App.css';
import {BrowserRouter,Route,} from  'react-router-dom'
import NavBar from './NavBar';
import Home from './Components/Home';
import IntlTrips from './Components/IntlTrips';
import Xmas from './Components/Xmas';
import Weekend from './Components/Weekend';
import Backpack from './Components/Backpack';

function App() {
  return (
  <BrowserRouter>
  <NavBar/>
  <Route path='/' exact component={Home}/>
  <Route path='/Xmas'  component={Xmas}/>
  <Route path='/IntlTrips' component={IntlTrips}/>
  <Route path='/Weekend' component={Weekend}/> 
  <Route path='/Backpack' component={Backpack}/> 
  </BrowserRouter>

  );
}

export default App;
