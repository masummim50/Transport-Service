import React from 'react';

const Card = (props) => {
  return (
    <div className="my-3 col-md-3 text-center">
      <div className="bg-dark h-100 m-2 text-white">
      <img className="w-75 p-3" src={props.v.url} alt=""/>
      <h4>{props.v.type}</h4>
      </div>
    </div>
  );
};

export default Card;