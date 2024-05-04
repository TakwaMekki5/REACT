import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  color: 'black',
  textDecoration: 'none'
};

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" style={navStyle}>Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;