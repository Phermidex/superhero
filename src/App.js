// Packages
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';


// Pages
import Home from './pages/Home';
import Search from './pages/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Search' element={<Search />} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
