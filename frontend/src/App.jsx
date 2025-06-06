import Footer from './components/Footer';
import Header from './components/Header';
import CardSection from './components/CardSection';
import GetConsultation from './components/GetConsultation';
<<<<<<< HEAD
import BannerSearchSection from './components/BannerSearchSection';
import FilterUniSelection from './components/FilterUniSelection';
import UniversityCardsAfterSearch from './components/UniversityCardsAfterSearch';
=======
import Hero from './components/heroSection';
import CustomerReview from './components/customerReview';
import Performance from './components/Performance';
import ContactUs from './components/ContactUs'
>>>>>>> f0407e8fc341258cc5269be15a075909884c4151

function App() {
  return (
    <>
<<<<<<< HEAD
    {//<Header />
    //<CardSection />
    //<GetConsultation />
    //<Footer />
    }
    <Header />
    <BannerSearchSection />
    <FilterUniSelection />
=======

    <Header />
    <GetConsultation />
>>>>>>> f0407e8fc341258cc5269be15a075909884c4151
    <Footer />
      <Header />
      <div>
        <Hero />
      </div>
      <div>
        <CardSection />
      </div>
      <div>
        <CustomerReview />
      </div>
      <div>
        <Performance/>
      </div>
      <div>
        <ContactUs/>
      </div>
      <Footer />
    </>
  );
}

export default App;