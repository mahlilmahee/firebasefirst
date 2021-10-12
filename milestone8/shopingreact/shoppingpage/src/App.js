
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Order from './Components/OrderReview/Order';
import Nothing from './Inventory/Nothing';
import Inventory from './Inventory/Inventory';
import PlaceOrder from './Components/OrderReview/PlaceOrder/PlaceOrder';
function App() {
  return (
    <div className="App">
    
    <Router> 
      <Header></Header>
    <Switch>
      <Route exact path='/'><Shop></Shop></Route>
      <Route exact path="/home"><Shop></Shop></Route>
      <Route path='/orders'> <Order></Order></Route>
      <Route path="/inventory"><Inventory></Inventory> </Route>
     
      <Route path='/orderplace'><PlaceOrder></PlaceOrder></Route> 
      <Route path='*'> <Nothing> </Nothing></Route>
    </Switch>
    </Router>
    
    </div>
  );
}

export default App;
