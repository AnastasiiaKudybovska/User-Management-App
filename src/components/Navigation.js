import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <div className="headerCont">
        <div className='headerName'>
            <Link to="/">User Management App</Link>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
    </nav>
    </div>
  );
};

export default Navigation;
