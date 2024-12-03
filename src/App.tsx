import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import VerdeFuturoForm from './pages/RegisterForm';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path= "/registerform" element={<VerdeFuturoForm />} />
      </Routes>
    </Router>
  );
};

export default App;
