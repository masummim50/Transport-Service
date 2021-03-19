import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import { firebaseConfig } from '../data/firebaseConfig';
import "firebase/auth";
import firebase from "firebase/app";
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const history = useHistory()
  const location = useLocation();
  const {from} = location.state || {from : {pathname : '/'}};
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [password, setPassword] = useState('')
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleBlur = (e)=>{
    let isFormValid = true;
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const hasNumber = /\d/.test(e.target.value);
      isFormValid = isPasswordValid && hasNumber;
      setPassword(e.target.value);
    }
    if(e.target.name === 'password2'){
      isFormValid = e.target.value === password;
      console.log(isFormValid)
    }
    if(isFormValid){
      const newUser = {...loggedInUser};
      newUser[e.target.name] = e.target.value;
      setLoggedInUser(newUser)
    }
  }

  const handleSubmit =(e)=> {
    if(loggedInUser.email && loggedInUser.password){
      firebase.auth()
      .createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
      .then(res => {
        console.log(res)
        setSignIn(!signIn)
      }).catch(error => console.log(error))
    }
    e.preventDefault();
  }
  const handleSignIn = (e) => {
    firebase.auth()
    .signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
    .then(res => {
      const gotUser = {
        isLoggedIn: true,
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoUrl
      }
      setLoggedInUser(gotUser)
      history.replace(from)
    }).catch(error=> console.log(error));
    e.preventDefault();
  }

  const handleGoogleSignIn = ()=> {
    firebase.auth()
    .signInWithPopup(googleProvider)
    .then(res => {
      const gotUser = {
        isLoggedIn: true,
        name:res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL
      };
      setLoggedInUser(gotUser);
      history.replace(from)
    }).catch(error => console.log(error))
  }

  const [signIn, setSignIn] = useState(false);
  return (
    
    <div className="bg-dark p-5 mx-auto mt-5 mb-5 text-white w-sm-75  w-50 text-center rounded">
      {loggedInUser.isLoggedIn ? <div>Hello {loggedInUser.name} you are logged in</div> : 
      <div>
        
      {signIn ? 
      <div><p>Or, already have an accounrt? <button onClick={()=> setSignIn(!signIn)} className="btn btn-info">Sign In</button></p></div> :
      <div><p>To Create a new account <button onClick={()=> setSignIn(!signIn)} className="btn btn-success">Sign Up</button></p></div> }
      <form action="">
        <div>
          <input onBlur={handleBlur} placeholder="Your email" type="email" name="email" className="form-control mb-3"/>
          <input onBlur={handleBlur} type="password" name="password" placeholder="enter your password" className="form-control mb-3" id=""/>
          
          {signIn ? <> <input onBlur={handleBlur} type="password" className="form-control mb-3" name="password2" id="" placeholder="Re-type Password"/>
          <input onClick={handleSubmit} type="submit" value="Sign Up" className="btn btn-success form-control"/></> : 
          <input onClick={handleSignIn} type="submit" value="Log In" className="bg-primary form-control mb-3"/> }
        </div>
      </form>
      <p className='mt-3'>Or</p>
      <button onClick={handleGoogleSignIn} className="btn btn-danger mb-3 form-control">Log in with Gmail</button>
      </div>
      }
    </div>

  );
};

export default Login;