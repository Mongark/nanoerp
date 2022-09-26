import { Box, Container, CssBaseline } from '@material-ui/core';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Pages/Dashboard/Dashboard';
import RoomsPage from './Pages/Rooms/RoomsPage';

function App() {
  return (
    <div style={{
        height: '100vh'
      }}>
      <CssBaseline />

      <Router>
        <NavBar />

        <div style={
          {
            background: 'lightblue',
            padding: '3%',
            height: '100%'
          }}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/rooms' element={<RoomsPage />} />
          </Routes>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
