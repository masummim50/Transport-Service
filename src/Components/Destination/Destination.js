import React, { useState } from 'react';
import { useParams } from 'react-router';
import card from '../data/cards.json';
import map from '../../images/Map.png';

import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Mymap from '../Mymap/Mymap';





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
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          
          {search ? <div>
            <label htmlFor="" className="text-white">Your travel plan:</label>
            <div className="travel-info bg-danger text-white text-center p-1 rounded mb-2">
            <p>{location}</p>
            <p>To</p>
            <p className="mb-1">{destination}</p>
            </div>
            <label htmlFor="" className="text-white">Details:</label>
            <div className="price-info bg-white p-3 rounded">
              
              <div className="small-vehicle d-flex justify-content-between align-items-center">
                <img className='w-25' src={myvehicle.url} alt=""/>
                <h6>{myvehicle.type}</h6>
                <h6>{myvehicle.price}</h6>
              </div>
              <div className="small-vehicle d-flex justify-content-between align-items-center">
                <img className='w-25' src={myvehicle.url} alt=""/>
                <h6>{myvehicle.type}</h6>
                <h6>{myvehicle.price}</h6>
              </div>
              <div className="small-vehicle d-flex justify-content-between align-items-center">
                <img className='w-25' src={myvehicle.url} alt=""/>
                <h6>{myvehicle.type}</h6>
                <h6>{myvehicle.price}</h6>
              </div>
            </div>
          </div>: 
          <div>
            <label className='text-white' htmlFor="">Your Location:</label>
            <input onBlur={getLocation} required className='form-control' type="text" name="topick" id="" placeholder="Your location"/>
            <label className='text-white' htmlFor="">Where you want to go:</label>
          <input onBlur={getDestination} required className="form-control" type="text" name="todrop" id="" placeholder="Destination"/>
          <label className='text-white' htmlFor="">Choose a date for your Travel</label>
          <input className="form-control" type="date" name="" id=""/>
          <button onClick={()=> location && destination && setSearch(!search)} className="btn btn-primary form-control mt-2">Search Transport</button></div>
          }
        </div>
        <div style={{height:'100%', width:'100%'}} className="col-md-8 d-block" id="mapid">
          <Mymap></Mymap>
        </div>
      </div>
    </div>
  );
};

export default Destination;