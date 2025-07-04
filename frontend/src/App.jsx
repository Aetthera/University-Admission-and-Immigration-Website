import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CardSection from './components/CardSection';
import GetConsultation from './components/GetConsultation';
import Hero from './components/heroSection';
import CustomerReview from './components/customerReview';
import Performance from './components/Performance';
import ContactUs from './components/ContactUs';
import Dashboard from './pages/Dashboard';
import ApplicationsPage from './pages/ApplicationsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<ApplicationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;