// import Footer from './components/Footer';
// import Header from './components/Header';
// import CardSection from './components/CardSection';
// import GetConsultation from './components/GetConsultation';
// import Hero from './components/heroSection';
// import CustomerReview from './components/customerReview';
// import Performance from './components/Performance';
// import ContactUs from './components/ContactUs'

// function App() {
//   return (
//     <>

//     <Header />

//     {/* Hero Section */}
//     <div>
//       <Hero/>
//     </div>

//     {/* Card Section */}
//     <div>
//       <CardSection/>
//     </div>

//     {/* Client Review Section */}
//     <div>
//       <CustomerReview/>
//     </div>

//     {/* Get Consultation Section */}
//     <div>
//       <GetConsultation/>
//     </div>

//     {/* Performance Section */}
//     <div>
//       <Performance/>
//     </div>

//     {/* Get in touch Section */}
//     <div>
//       <ContactUs/>
//     </div>

//       <Footer />
//     </>
//   );
// }

// export default App;



// src/App.jsx
import ApplicationTab from "./components/ApplicationTab"; // adjust path if it's in a folder

function App() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <ApplicationTab />
    </div>
  );
}

export default App;
