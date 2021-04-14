import React from 'react';
import '../styles/Card.css';

function CardComponent({ className, cardTitle, value, lastUpdate, cardSubtitle }) {
  return (
    <div className={`card-container ${className}`}>
      <div className= "title">{cardTitle}</div>
        <div className= "value">{value.toLocaleString()}</div>
        <div className= "date">{new Date(lastUpdate).toDateString()}</div>
        <div className= "subTitle">{cardSubtitle}</div>
    </div>
  );
};

export default CardComponent;
