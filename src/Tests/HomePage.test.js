import React from 'react';
import { render } from '@testing-library/react';
import { Provider, useSelector as useSelectorMock } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../components/HomePage';
import store from '../redux/store';

const mockCountries = [
  {
    name: 'Country 1',
    flags: { alt: 'Flag 1', src: 'flag1.jpg' },
    continents: 'Continent 1',
    population: 1000000,
    area: 1000,
  },
];

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('HomePage Component', () => {
  beforeEach(() => {
    useSelectorMock.mockReturnValue({ countries: mockCountries, isLoading: false, error: null });
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  it('renders the HomePage component with mock data', () => {
    render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );
  });
});
