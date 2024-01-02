import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Donation from './pages/Donation';
// import ContactUs from './pages/ContactUs';
import Home from './pages/Home'; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}> </Route>
        {/* <Route path="contactus" element={<ContactUs/>}></Route> */}
        <Route path="donation" element={<Donation/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
