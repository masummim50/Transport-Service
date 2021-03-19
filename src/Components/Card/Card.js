import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Card = (props) => {
  const {url, type} = props.vehicle;
  return (
    <Link to={`/destination/${type}`} className="my-3 col-md-3 ">
      
    <div className="text-center">
      <div className="bg-dark h-100 m-2 text-white">
      <img className="w-75 p-3" src={url} alt=""/>
      <h4>{type}</h4>
      </div>
    </div>
    </Link>
  );
};

export default Card;