import React from 'react';
import Card from '../Card/Card';
import card from '../data/cards.json'
import bg from '../../images/bg.jpg'
const Home = () => {
  console.log(card)
  const vehicles = card;
  
  return (
    <div className="bg">
      
    <div className="container">
      <div className="row">
        {vehicles.map(vehicle => <Card vehicle ={vehicle}></Card> )}
      </div>
    </div>
    </div>
  );
};

export default Home;