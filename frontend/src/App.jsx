import Footer from './components/Footer';
import Header from './components/Header';
import CardSection from './components/CardSection';
import GetConsultation from './components/GetConsultation';
import Hero from './components/heroSection';
import CustomerReview from './components/customerReview';
import Performance from './components/Performance';
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>

    <Header />
    <GetConsultation />
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