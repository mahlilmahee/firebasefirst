import React from 'react';
import logo from '../../ema-john-simple-resources-master/images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
           
            <img src={logo} /> with mahee
            <nav className="headertop">
            <Link to="/home">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to='/orderplace'></Link>
              
            </nav>
        </div>
    );
};

export default Header;