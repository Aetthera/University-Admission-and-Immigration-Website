import Footer from '../components/Footer';
import Header from '../components/Header';
import CardSection from '../components/CardSection';
import GetConsultation from '../components/GetConsultation';
import Hero from '../components/heroSection';
import CustomerReview from '../components/customerReview';
import Performance from '../components/Performance';
import ContactUs from '../components/ContactUs';

export default function HomePage() {
  return (
    <>

    <Header />

     {/* Hero Section */}
    <div>
      <Hero/>
    </div>

    {/* Card Section */}
    <div>
      <CardSection/>
    </div>

    {/* Client Review Section */}
    <div>
      <CustomerReview/>
    </div>

    {/* Get Consultation Section */}
    <div>
      <GetConsultation/>
    </div>

    {/* Performance Section */}
    <div>
      <Performance/>
    </div>

    {/* Get in touch Section */}
    <div>
      <ContactUs/>
    </div>

    </>
  );

}