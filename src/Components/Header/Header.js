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
    <div className="container d-flex justify-content-between align-items-center justify-content-center flex-sm-column flex-xs-column flex-md-row">
      <div className="logo"><h6 className="text-white">logo here</h6>
      <p className="text-white">Get where you need to go</p></div>
      <div className="links">
        <Link to='/' className="btn btn-sm m-1 text-white">Home</Link>
        <Link to='/destination/Car' className="btn btn-sm text-white">Destination</Link>
        <a href="" className="btn text-white btn-sm">Home</a>
        {loggedInUser.isLoggedIn ? <Link onClick={handleSignOut} to='/' className="btn btn-danger">Log out</Link> : 
        <Link to='/login' className="btn btn-sm btn-primary">Login</Link>}
      </div>
    </div>
  );
};

export default Header;