import React, { useState } from 'react';
import useStats from '../hooks/useStats';
import '../styles/CountryPicker.css';

const URL_BASE = 'https://covid19.mathdro.id/api';
const URL_COUNTRIES = 'https://covid19.mathdro.id/api/countries';
const DEFAULT_COUNTRY = 'Global';

function CountryPicker({ handleCountryChange }) {
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY);
  const { stats: countries, loading, error } = useStats(URL_COUNTRIES);

  const handleChange = e => {
    setSelectedCountry(e.target.value);
    if (e.target.value != DEFAULT_COUNTRY) handleCountryChange(`${URL_COUNTRIES}/${e.target.value}`);
    else handleCountryChange(URL_BASE);
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (

    <div>
    <h2 className="text-show">Currently Showing: {selectedCountry}</h2>
    <select className="formControl" defaultValue="" onChange={handleChange}>
    <option value={DEFAULT_COUNTRY}>{DEFAULT_COUNTRY}</option>
        {countries.countries.map((country) => country.name).map((country, i) => <option key={i} value={country}>{country}</option>)}
      </select>
      </div>
  );
};

export default CountryPicker;
