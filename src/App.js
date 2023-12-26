import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import MyProfile from './components/myProfile/MyProfile';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="*" element={<Rockets />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
