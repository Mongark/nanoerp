import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Rooms from './Pages/Rooms/Rooms';
import Guests from './Pages/Guests/Guests';
import Bookings from './Pages/Bookings/Bookings';
import Accommodations from './Pages/Accommodations/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/guests' element={<Guests />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/accommodations' element={<Accommodations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
