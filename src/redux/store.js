import { configureStore } from '@reduxjs/toolkit';
import CountriesReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
  },
});

export default store;
