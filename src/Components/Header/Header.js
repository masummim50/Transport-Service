import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

import "firebase/auth";
import firebase from "firebase/app";
const Header = () => {
  const handleSignOut =()=>{
    firebase.auth()
    .signOut()
    .then(()=> {
      setLoggedInUser({
        isLoggedIn: false,
        name: '',
        email: '',
        photo: ''})
    })
  }
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <header class=" text-white">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link to='/' class="navbar-brand w-50" href="#">
            <h2 className="text-white">Transport Service</h2><span className="text-white">Get where you need to go</span>
            
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ms-3">
        <Link to='/' className="nav-link btn text-white btn-outline-info">Home</Link>
              </li>
              <li class="nav-item ms-3">
        <Link to='/destination/Car' className="nav-link btn text-white btn-outline-success">Destination</Link>
              </li>
              <li class="nav-item ms-3">
                <a class="nav-link text-white btn btn-outline-warning" href="#about">About us</a>
              </li>
              <li class="nav-item ms-3">
        {loggedInUser.isLoggedIn ? <Link onClick={handleSignOut} to='/' className="nav-link btn btn-outline-danger text-white">Log out</Link> : 
        <Link to='/login' className="nav-link btn btn-outline-primary text-white">Login</Link>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;