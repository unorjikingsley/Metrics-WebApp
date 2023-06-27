import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_DATA = 'globe-walker/countries/FETCH_DATA';

const initialState = [];

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_DATA}/fulfilled`:
      return action.payload;
    case `${FETCH_DATA}/rejected`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchData = createAsyncThunk(FETCH_DATA, async () => {
  const countryData = await axios.get('https://restcountries.com/v3.1/all');
  return countryData.data;
});

export default countriesReducer;
