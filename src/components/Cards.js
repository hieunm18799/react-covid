import React from 'react';
import useStats from '../hooks/useStats';
import CardComponent from './Card';

function Cards({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(url, stats);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="">
        <CardComponent
          className=""
          cardTitle="Infected"
          value={stats.confirmed.value}
          lastUpdate={stats.lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className=""
          cardTitle="Recovered"
          value={stats.recovered.value}
          lastUpdate={stats.lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className=""
          cardTitle="Deaths"
          value={stats.deaths.value}
          lastUpdate={stats.lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
    </div>
  );
};

export default Cards;
