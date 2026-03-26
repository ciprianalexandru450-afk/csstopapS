import React, { useState } from 'react';
import { MenuIcon, XIcon } from './icons';
import { translations } from '../lib/translations';
import type { Language } from '../App';

interface HeaderProps {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language].header;

  const navLinks = [
    { href: '#servicii', text: t.services },
    { href: '#rezervari', text: t.bookings },
    { href: '#contact', text: t.contact },
  ];

  const LanguageSwitcher: React.FC = () => (
    <div className="flex items-center space-x-2 text-sm font-medium">
        <button
            onClick={() => setLanguage('en')}
            className={`transition-colors ${language === 'en' ? 'text-[#c0a062] font-bold' : 'text-gray-400 hover:text-white'}`}
        >
            EN
        </button>
        <span className="text-gray-600">/</span>
        <button
            onClick={() => setLanguage('da')}
            className={`transition-colors ${language === 'da' ? 'text-[#c0a062] font-bold' : 'text-gray-400 hover:text-white'}`}
        >
            DA
        </button>
    </div>
  );

  return (
    <header className="bg-[#1a1a1a] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="https://ibb.co/n85s9kRg" className="flex items-center mr-4">
              <img 
                src="https://i.ibb.co/93C96YG8/13839933-5390-40bb-81da-5f7d1f220ba7.png" 
                alt="Csstop Logo" 
                style={{ height: '50px', objectFit: 'contain', border: 0 }}
              />
            </a>
          </div>

          <div className="flex-1 flex justify-end items-center space-x-8">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <nav className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">{link.text}</a>
                ))}
              </div>
            </nav>
            <div className="flex items-center md:hidden">
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="ml-4 bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               <a 
                 key={link.href} 
                 href={link.href} 
                 className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                 onClick={() => setIsOpen(false)}
               >
                 {link.text}
               </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;