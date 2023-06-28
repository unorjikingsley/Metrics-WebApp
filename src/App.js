import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Countries from './Components/countries';
import Nav from './Components/Navigation';
import Details from './Components/details';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/details/" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
