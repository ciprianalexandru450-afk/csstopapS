import React from 'react';
import { translations } from '../lib/translations';
import type { Language } from '../App';

const Footer: React.FC<{ language: Language }> = ({ language }) => {
  const t = translations[language].footer;
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;