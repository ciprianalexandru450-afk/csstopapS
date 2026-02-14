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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1 flex justify-start">
            <a href="#" className="text-2xl font-bold tracking-wider text-white">
              <span className="text-[#c0a062]">CSS Top</span> ApS
            </a>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
          
          <div className="flex-1 flex justify-end items-center">
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