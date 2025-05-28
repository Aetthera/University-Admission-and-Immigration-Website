import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerSearchSection from "./components/UniversitySelection/BannerSearchSection";
import AdmissionProcess from "./components/UniversitySelection/AdmissionProcess";

function App() {
  return (
    <div>
      <Header />
      <BannerSearchSection />
      <AdmissionProcess />
      <Footer />
    </div>
  );
}

export default App;
