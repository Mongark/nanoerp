import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Rooms from './Pages/Rooms/Rooms';

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/rooms' element={<Rooms />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
