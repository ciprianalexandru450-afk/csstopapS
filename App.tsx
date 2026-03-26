import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

export type Language = 'en' | 'da';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="bg-[#121212] text-gray-300 min-h-screen relative">
      <BackgroundCanvas />
      <Header language={language} setLanguage={setLanguage} />
      <main className="w-full px-4 sm:px-6 lg:px-12">
        <Hero language={language} />
        <BookingSection language={language} />
        <FeaturesSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;