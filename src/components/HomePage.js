import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { fetchCountries } from '../redux/countries/countriesSlice';
import bachground from '../image/background.jpg';

function HomePage() {
  const { countries, isLoading, error } = useSelector(
    (state) => state.countries,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) {
    return (
      <>
        <div className="loading">...isLoading</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="loading">
          Something is wrong during fetching the data
        </div>
      </>
    );
  }

  return (
    <>
      <div className="hero-section">
        <img src={bachground} alt="backround img" />
      </div>
      <div className="main-contanier">
        <div className="input">
          <FaSearch />
          <input
            type="search"
            placeholder="Search for a country"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <p className="states">STATS BY COUNTRY</p>
          <div className="country-list">
            {filteredCountries.map((country) => (
              <Link key={country.name} to={`/countries/${country.name}`}>
                <div className="contries">
                  <img src={country.flag} alt={country.flag} />
                  <div className="capation">
                    <h3>{country.name}</h3>
                    <p className="continent">
                      continents:
                      {' '}
                      <span>{country.continents}</span>
                    </p>
                    <p className="population">
                      Population:
                      {' '}
                      <span>{country.population}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
