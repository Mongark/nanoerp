import React from 'react';
import './App.css';
import Application from './Components/Application/Application';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Application />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
