import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#121212] text-gray-300 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <BookingSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
