import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailPage() {
  const { countries } = useSelector(
    (store) => store.countries,
  );

  const { name } = useParams();
  const findCountry = countries.find((country) => country.name === name);

  return (
    <>
      <div className="detail-countiner">
        <div className="detail-page">
          <div className="detail-page-flag">
            <img src={findCountry.flag} alt={findCountry.flag} />
          </div>
          <div className="detail-page-info">
            <h2 className="country-name">
              <span>{findCountry.name}</span>
            </h2>
            <p className="continent">
              Continent:
              {' '}
              <span>{findCountry.continents}</span>
            </p>
            <p className="population">
              Population:
              {' '}
              <span>{findCountry.population}</span>
            </p>
            <p className="area">
              Area:
              {' '}
              <span>{findCountry.area}</span>
            </p>
            <p className="capital">
              Capital:
              {' '}
              <span>{findCountry.capital}</span>
            </p>
            <p className="postal">
              Region:
              {' '}
              <span>{findCountry.region}</span>
            </p>
            <p className="latlng">
              latlng:
              {' '}
              <span>{findCountry.latlng}</span>
            </p>
            <p>
              Start_Of_Week:
              {' '}
              <span>{findCountry.startOfWeek}</span>
            </p>
            <p>
              Languages:
              {' '}
              <span>{Object.values(findCountry.languages).join(', ')}</span>
            </p>
            <p>
              currencies:
              {' '}
              <span>{findCountry.currencies}</span>
            </p>
            <p>
              SubRegion:
              {' '}
              <span>
                {' '}
                {findCountry.subregion}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
