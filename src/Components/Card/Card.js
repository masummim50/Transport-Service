import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Card = (props) => {
  const {url, type} = props.vehicle;
  return (
    <Link to={`/destination/${type}`} className="my-3 col-md-3 mt-5">
      
    <div className="text-center h-100 bg-white rounded">
      <div className="h-100 text-white">
      <img className="w-75 pt-2" src={url} alt=""/>
      </div>
      <h4 className='bg-white rounded pb-2'>{type}</h4>
    </div>
    </Link>
  );
};

export default Card;