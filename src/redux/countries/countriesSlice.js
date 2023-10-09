import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const countryURL = 'https://restcountries.com/v3.1';
export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await fetch(`${countryURL}/all`);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const countries = await response.json();
    return countries;
  },
);

const initialState = {
  countries: [],
  isLoading: false,
  error: null,
};

const CountriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload.map((country) => ({
          name: country.name.common,
          capital: country.capital,
          area: country.area || 'N/A',
          flag: country.flags.png,
          population: country.population || 'N/A',
          continents: country.continents,
          region: country.region || 'N/A',
          latlng: country.latlng?.join(', ') || 'N/A',
          startOfWeek: country.startOfWeek || 'N/A',
          subregion: country.subregion || 'N/A',
          languages: country.languages || 'N/A',
          currencies: Object.values(country.currencies || {}).map((currency) => currency.name).join(', ') || 'N/A',
        }));
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default CountriesSlice.reducer;
