import React from 'react';

function CardComponent ({ className, cardTitle, value, lastUpdate, cardSubtitle }) {
    return (
    <div className={className}>
      <h1>{cardTitle}</h1>
        <h2>{value}</h2>
        <h3>{new Date(lastUpdate).toDateString()}</h3>
        <p>{cardSubtitle}</p>
    </div>
    );
};

export default CardComponent;
