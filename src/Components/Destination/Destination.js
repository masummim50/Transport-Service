import React, { useState } from 'react';
import { useParams } from 'react-router';
import card from '../data/cards.json'
const Destination = () => {
  const vehicle = card;
  const {type} = useParams();
  const myvehicle = vehicle.find(e => e.type === type);
  console.log(myvehicle);
  const [search, setSearch] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          
          {search ? <p>you searched</p>: 
          <div><input className='form-control' type="text" name="topick" id="" placeholder="Your location"/>
          <input className="form-control" type="text" name="todrop" id="" placeholder="destination"/>
          <button onClick={()=> setSearch(!search)} className="btn btn-primary form-control">Search</button></div>
          }
        </div>

        <div className="col-md-8">

        </div>
      </div>
    </div>
  );
};

export default Destination;