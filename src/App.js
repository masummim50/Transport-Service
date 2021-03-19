import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
    name: '',
    email: '',
    photo: ''
  });
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <ProtectedRoute path='/destination/:type'>
          <Destination></Destination>
        </ProtectedRoute>
        <ProtectedRoute path='/destination'>
          <Destination></Destination>
        </ProtectedRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
