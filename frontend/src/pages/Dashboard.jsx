// src/pages/Dashboard.jsx
import React from 'react';
import Header from '../components/Header';
import DashboardNav from '../components/DashboardNav';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Dashboard Section */}
      <main className="flex-1 bg-gray-50 p-6 md:p-12">
      <DashboardNav />

        {/* Top Counters */}
        <section className="grid grid-cols-3 gap-4 mb-8 text-center">
          {['Approved', 'Unread', 'Saved'].map((label, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <div className="text-3xl font-bold">{index + 1}</div>
              <div className="text-gray-500 mt-2">{label}</div>
            </div>
          ))}
        </section>

        {/* Application Progress Timeline */}
        <section className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold mb-4">Application Progress</h2>
          <div className="flex items-center justify-between text-sm">
            {["Sent", "Received", "Processing", "Complete"].map((stage, i) => (
              <div key={stage} className="flex flex-col items-center">
                <div className={`w-6 h-6 rounded-full border-2 ${i < 2 ? 'bg-green-500 border-green-500' : 'bg-gray-300 border-gray-300'}`}></div>
                <span className="mt-2">{stage}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Applications and Documents */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {["My Applications", "My Documents"].map((title, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">{title}</h2>
              <ul className="space-y-2 text-sm">
                <li>University of Montreal - Bachelor</li>
                <li>UQAM - Sciences</li>
                <li>LaSalle College</li>
              </ul>
              <div className="grid grid-cols-5 text-center mt-4 gap-2 text-xs">
                {[5, 2, 3, 2, 1].map((num, j) => (
                  <div key={j} className="bg-gray-100 p-2 rounded">
                    {num}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Saved Institutions */}
        <section className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold mb-4">My Saved Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="border rounded-lg p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full mr-2"></div>
                    <span className="font-medium">LaSalle College</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex justify-between text-sm">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded">Apply</button>
                  <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded">More Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;