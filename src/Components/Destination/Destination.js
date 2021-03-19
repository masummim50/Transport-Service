import React, { useState } from 'react';
import { useParams } from 'react-router';
import card from '../data/cards.json';
import map from '../../images/Map.png'
const Destination = () => {
  const vehicle = card;
  const {type} = useParams();
  const myvehicle = vehicle.find(e => e.type === type);
  const [search, setSearch] = useState(false);
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const getLocation =(e)=> {
    const location = e.target.value; setLocation(location)
  }
  const getDestination = (e)=> {
    const destination = e.target.value;
    setDestination(destination)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          
          {search ? <div>
            <div className="travel-info bg-danger text-white text-center p-1 rounded mb-2">
            <p>{location}</p>
            <p>To</p>
            <p className="mb-1">{destination}</p>
            </div>
            <div className="price-info bg-white p-3 rounded">
              <div className="small-vehicle d-flex justify-content-between align-items-center">
                <img className='w-25' src={myvehicle.url} alt=""/>
                <h6>{myvehicle.price}</h6>
              </div>
              <div className="small-vehicle d-flex justify-content-between align-items-center">
                <img className='w-25' src={myvehicle.url} alt=""/>
                <h6>{myvehicle.price}</h6>
              </div>
              <div className="small-vehicle d-flex justify-content-between align-items-center">
                <img className='w-25' src={myvehicle.url} alt=""/>
                <h6>{myvehicle.price}</h6>
              </div>
            </div>
          </div>: 
          <div><input onBlur={getLocation} required className='form-control' type="text" name="topick" id="" placeholder="Your location"/>
          <input onBlur={getDestination} required className="form-control" type="text" name="todrop" id="" placeholder="destination"/>
          <button onClick={()=> location && destination && setSearch(!search)} className="btn btn-primary form-control">Search</button></div>
          }
        </div>

        <div className="col-md-8">
          <img src={map} alt="" className="w-75"/>
        </div>
      </div>
    </div>
  );
};

export default Destination;