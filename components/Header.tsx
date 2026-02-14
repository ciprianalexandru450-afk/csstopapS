import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#1a1a1a] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold tracking-wider text-white">
              <span className="text-[#c0a062]">CSS Top</span> ApS
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#servicii" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Servicii</a>
              <a href="#rezervari" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Rezervări</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </nav>
          <div className="md:hidden">
             {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
