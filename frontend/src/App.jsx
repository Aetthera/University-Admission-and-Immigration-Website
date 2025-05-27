import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/heroSection';
import CustomerReview from './components/customerReview';
import Performance from './components/Performance';
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      <Header />
      <div>
        <Hero />
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