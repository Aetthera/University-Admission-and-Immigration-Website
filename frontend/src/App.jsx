import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import BannerSearchSection from './components/BannerSearchSection';
import FilterUniSelection from './components/FilterUniSelection';

import HomePage from "./pages/HomePage";
import UniversityList from "./pages/UniversityList";
import UniversityDetails from "./pages/UniversityDetails";
import UniversityPage from './pages/UniversityPage';

function App() {
  return (
    <Router>
      <Header />
      <BannerSearchSection />
      <FilterUniSelection />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/universities" element={<UniversityList />} />
        <Route path="/universities/:country/:name" element={<UniversityDetails />} />
        <Route path="/universityPage" element={<UniversityPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;