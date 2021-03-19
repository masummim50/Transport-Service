import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="logo"><h2>logo here</h2></div>
      <div className="links">
        <Link to='/' className="btn btn-primary">Home</Link>
        <Link to='/destination/Car' className="btn btn-primary">Destination</Link>
        <a href="" className="btn btn-primary">Home</a>
        <Link to='/login' className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Header;