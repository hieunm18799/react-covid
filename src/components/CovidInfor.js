import React, { useState } from 'react';
import Cards from './Cards';
import CountryPicker from './CountryPicker';
import '../styles/CovidInfor.css';

import image from '../images/image.png';

const URL_BASE = 'https://covid19.mathdro.id/api';

function CovidInfor() {
  const [url, setUrl] = useState(URL_BASE);
  const handleCountryChange = urlCountry => {
    setUrl(urlCountry);
  }


  return (
    <div className="cf-container">
        <img className="" src={image} alt="COVID-19" />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Cards url={url} />
      </div>
  );
}

export default CovidInfor;
