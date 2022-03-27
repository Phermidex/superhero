// Packages
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';


// Pages
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
       <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
