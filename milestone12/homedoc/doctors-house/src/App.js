import './App.css';

import Home from './Component/Pages/Home/Home';
import { BrowserRouter as Router,  Switch, Route, Link} from "react-router-dom";
import Doctors from './Component/Pages/Home/Doctors';
import About from './Component/Pages/About/About';
import Appoinment from './Component/Pages/Appoinment/Appoinment';
import Login from './Component/Pages/Login/Login';
import Register from './Component/Pages/Login/Register';

import AuthProvider from './Component/Context/AuthProvider';
import PrivateRoute from './Component/Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Component/Pages/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <AuthProvider>

      
      <Router>

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Doctors />
          </Route>
          <Route path="/dashboard">
           <Dashboard></Dashboard>
          </Route>
          <PrivateRoute path="/appoinment">
           <Appoinment></Appoinment>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login">
          <Login></Login>
          </Route>
        </Switch>
      </Router>
</AuthProvider>
    </div>
  );
}

export default App;
