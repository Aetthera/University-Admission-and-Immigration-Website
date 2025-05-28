import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerSearchSection from "./components/UniversitySelection/BannerSearchSection";
import AdmissionProcess from "./components/UniversitySelection/AdmissionProcess";
import NewsletterSection from "./components/UniversitySelection/NewsletterSection";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <div>
      <Header />
      <BannerSearchSection />
      <AdmissionProcess />
      <NewsletterSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
