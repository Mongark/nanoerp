import { Box, Container } from '@material-ui/core';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Rooms from './Pages/Rooms/Rooms';

function App() {
  return (
    <Box>
      <Router>
        <NavBar />

        <Container style={{background: 'blue', padding: '3%', height: '100%'}}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/rooms' element={<Rooms />} />
          </Routes>
        </Container>
        
      </Router>
    </Box>
  );
}

export default App;
