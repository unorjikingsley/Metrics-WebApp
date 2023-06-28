import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../redux/countries/countries';
import Country from './country';
import Input from './input';
import FormFilter from './logic/filter';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [state, setState] = useState('');
  const Navigate = useNavigate();

  const handleClick = (obj) => {
    Navigate('/countryDetails/', { state: { country: [obj] } });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value.toString());
  };

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch]);

  const outPut = state && countries.length > 0 ? FormFilter(countries, state) : countries;
  return (
    <>
      <Input handleChange={handleChange} />
      <div className="container">
        {outPut.map((country) => (
          <Country
            key={country.capital}
            capital={country.capital}
            name={country.name.common}
            flags={country.flags.svg}
            population={country.population}
            region={country.region}
            handleClick={() => handleClick(country)}

          />
        ))}
      </div>
    </>
  );
};

export default Countries;
