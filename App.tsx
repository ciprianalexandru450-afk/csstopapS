import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

export type Language = 'en' | 'da';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="bg-[#121212] text-gray-300 min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero language={language} />
        <BookingSection language={language} />
        <FeaturesSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;