import React, { useState } from 'react';

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const [loggedInUser, setLoggedInUser] =useState(false)
  return (
    
    <div className="bg-dark p-5 mx-auto mt-5 mb-5 text-white w-sm-75  w-50 text-center rounded">
      {loggedInUser.isLoggedIn ? <div>Hello {loggedInUser.name} you are logged in</div> : 
      <div>
        
      {signIn ? 
      <div><p>Or, already have an accounrt? <button onClick={()=> setSignIn(!signIn)} className="btn btn-info">Sign In</button></p></div> :
      <div><p>To Create a new account <button onClick={()=> setSignIn(!signIn)} className="btn btn-success">Sign Up</button></p></div> }
      <form action="">
        <div>
          {signIn && <input type="text" name="name" className="form-control mb-3" placeholder="Your name" id=""/> }
          <input placeholder="Your email" type="email" name="email" className="form-control mb-3"/>
          <input type="password" name="password" placeholder="enter your password" className="form-control mb-3" id=""/>
          
          {signIn ? <input type="submit" value="Sign Up" className="btn btn-success form-control"/>: <input type="submit" value="Log In" className="bg-primary form-control mb-3"/> }
        </div>
      </form>
      <p className='mt-3'>Or</p>
      <button className="btn btn-primary mb-3 form-control">Log in with facebook</button>
      <button className="btn btn-danger mb-3 form-control">Log in with Gmail</button>
      <button className="btn btn-warning mb-3 form-control">Log in with Github</button>
      <button className="btn btn-warning mb-3 form-control">Log in with Twitter</button>
      </div>
      }
    </div>

  );
};

export default Login;