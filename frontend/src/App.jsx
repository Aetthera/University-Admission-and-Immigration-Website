import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UniversityList from "./pages/UniversityList";
import UniversityDetails from "./pages/UniversityDetails";
import UniversityPage from './pages/UniversityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/universities" element={<UniversityList />} />
        <Route path="/universities/:country/:name" element={<UniversityDetails />} />
        <Route path="/universityPage" element={<UniversityPage />} />
      </Routes>
    </Router>
  );
}

export default App;