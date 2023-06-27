import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './Components/countries';
import Nav from './Components/Navigation';
import Details from './Components/details';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countryDetails/" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
