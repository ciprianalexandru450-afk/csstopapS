import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
        <p>Ttiovioiem tiatim tjor ti tinseeno tievoeneede trease ponoie he teote tinoem peise netohuno seoty beet nemtoimo peaa inates.</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Elite Drive. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
