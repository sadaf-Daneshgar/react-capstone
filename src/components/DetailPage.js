import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import '../style/navbar.css';

function DetailPage() {
  const { countries } = useSelector((state) => state.countries);

  const { name } = useParams();
  const findCountry = countries.find((country) => country.name === name);

  return (
    <>
      <Navbar selectedCountry={findCountry.name} />
      <div className="detail-countiner">
        <div className="detail-page-flag">
          <img src={findCountry.flag} alt={findCountry.flag} className="img-fluid" />
        </div>
        <div className="detail-page-info">
          <h2 className="country-name">
            <span>{findCountry.name}</span>
          </h2>
          <div className="detail-list">
            <div className="title-cart">
              <p className="detail-name">CITY/TOWN BREAKDOWN - 2023</p>
            </div>
            <div className="detail-item">
              <p className="detail-name">Continent</p>
              <p className="detail-value">{findCountry.continents}</p>
            </div>
            <div className="detail-item">
              <p className="detail-name">Population</p>
              <p className="detail-value">{findCountry.population}</p>
            </div>
            <div className="detail-item">
              <p className="detail-name">Area</p>
              <p className="detail-value">{findCountry.area}</p>
            </div>
            <div className="detail-item">
              <p className="detail-name">Capital</p>
              <p className="detail-value">{findCountry.capital}</p>
            </div>
            <div className="detail-item">
              <p className="detail-name">Region</p>
              <p className="detail-value">{findCountry.region}</p>
            </div>
            <div className="detail-item">
              <p className="detail-name">latlng</p>
              <p className="detail-value">{findCountry.latlng}</p>
            </div>
            <div className="detail-item">
              <p className="detail-name">Start_Of_Week</p>
              <p className="detail-value">{findCountry.startOfWeek}</p>
            </div>
            <div className="detail-item">
              <p className="detail-name">Languages</p>
              <p className="detail-value">{Object.values(findCountry.languages).join(', ')}</p>
            </div>
            <div className="detail-item">
              <p className="detail-name">Currencies</p>
              <p className="detail-value">{findCountry.currencies}</p>
            </div>
            <div className="detail-item">
              <p className="detail-name">SubRegion</p>
              <p className="detail-value">{findCountry.subregion}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
