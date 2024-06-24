import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../components/Main';
import Catalog from '../components/Catalog';
import AboutUs from '../components/AboutUs';
import Profile from '../components/Profile';

function App() {

  return (
      <div>
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/catalog"
            element={<Catalog />}
          />
          <Route
            path="/aboutus"
            element={<AboutUs />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </div>
  );
}

export default App;

