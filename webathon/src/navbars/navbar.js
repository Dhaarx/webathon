import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
  return (
  <div class="first">
    <ul>
      <div class='logo'>
        <li>Fusion Hub</li>
      </div>
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/store">Store</Link>
        </li>
        <li>
        <Link to="/foodcourt">Foodcourt</Link>
        </li>
        <li>
        <Link to="/saloon">Saloon</Link>
        </li>
        <li>
        <Link to="/cart">Cart</Link>
        </li>
    </ul>
  </div>
  );
}

export default Navbar;
