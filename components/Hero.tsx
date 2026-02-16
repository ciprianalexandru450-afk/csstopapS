import React from 'react';
import { ClockIcon, ShieldIcon, DiamondIcon, BriefcaseIcon, HeartIcon, PlaneIcon, StarIcon, MoreHorizontalIcon } from './icons';
import { translations } from '../lib/translations';
import type { Language } from '../App';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-[#2a2a2a] p-6 rounded-lg text-center flex flex-col items-center shadow-lg">
    <div className="mb-4 p-4 border border-[#c0a062] rounded-md inline-block">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; language: Language; }> = ({ icon, title, language }) => {
  const titleClasses = `font-bold text-white ${language === 'da' ? 'text-sm sm:text-xl truncate' : 'text-lg sm:text-xl'}`;

  return (
    <div className="bg-[#2a2a2a] p-6 rounded-lg text-center flex flex-col items-center justify-center shadow-lg h-full">
      <div className="mb-4 text-[#c0a062]">
        {icon}
      </div>
      <h3 className={titleClasses}>{title}</h3>
    </div>
  );
};

const Hero: React.FC<{ language: Language }> = ({ language }) => {
  const t = translations[language].hero;
  
  return (
    <section className="py-20 sm:py-28">
      <div className="bg-[#1a1a1a] rounded-lg p-8 md:p-12 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t.title}
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              {t.subtitle}
            </p>
            <div className="mt-8">
              <a href="#rezervari" className="inline-block bg-gradient-to-r from-[#c0a062] to-[#d4b47a] text-black font-bold py-3 px-8 rounded-md shadow-lg hover:opacity-90 transition-opacity">
                {t.button}
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center min-h-[200px] md:min-h-[300px]">
            {/* Spotlight effect */}
            <div className="absolute inset-0 rounded-lg bg-[radial-gradient(ellipse_at_center,_rgba(107,114,128,0.2)_0%,_rgba(17,24,39,0)_70%)]"></div>
            
            {/* Car Stack */}
            <div className="relative z-10 flex flex-col items-end">
                <img 
                    src="https://di-shared-assets.dealerinspire.com/legacy/rackspace/ldm-images/2020-MB-S-450-Anthracite-Blue-Color.png" 
                    alt="Mercedes S-Class" 
                    className="w-full h-auto object-contain drop-shadow-2xl"
                />
                <img 
                    src="https://media.oneweb.mercedes-benz.com/images/dynamic/europe/IN/297144/804/iris.png?q=COSY-EU-100-1713d0VXqrS7qtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtlKStsd2HtcUfp8qXGEuiBJ0l3IrOB2NzObApRA9I5ux4uQC31SrkzNwL6m7jA6ohKV5SQ%25vqCv%25yLRzAHYax75prH1KM1n8wvT3oiZLkYM4FGIJTg90QT6PDBLNSeWAwItsd5cQcUfCX1XGEz53J0l7rhOB2Ky2bApHtXI5u8c1QC3ikwkzN4Lum7jgMmhKVBSV%25vqAv9yLR5nWYaxCbxrH1zmRn8w7oboiZKeXM4F1RcTg9Ukm6tTnuNpRhhKVHtc%25YhD3Lyr%258cDYax5ahrH1ABfn8wa82oiZH5XM4F8mMTg9iml6PDePoSeWsKjtsLV79MOuljcVGXvGE7dhcfWF0FT3THuPsa28uKxvEOo7em&BKGND=9&IMGT=P27&cp=U7lLKRUtPa6KAFr8s_ubHw&uni=m&POV=BE040,PZM" 
                    alt="Mercedes V-Class" 
                    className="w-full h-auto object-contain drop-shadow-2xl scale-110 origin-right mt-0 md:-mt-12"
                />
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ClockIcon className="w-8 h-8 text-[#c0a062]" />} 
            title={t.feature1Title}
            description={t.feature1Desc}
          />
          <FeatureCard 
            icon={<ShieldIcon className="w-8 h-8 text-[#c0a062]" />} 
            title={t.feature2Title}
            description={t.feature2Desc}
          />
          <FeatureCard 
            icon={<DiamondIcon className="w-8 h-8 text-[#c0a062]" />} 
            title={t.feature3Title}
            description={t.feature3Desc}
          />
        </div>

        <div id="servicii" className="mt-24 scroll-mt-[100px]">
          <p className="text-center max-w-3xl mx-auto text-gray-300 leading-relaxed">
            {t.servicesIntro}
          </p>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <ServiceCard 
                icon={<BriefcaseIcon className="w-10 h-10" />}
                title={t.serviceCorporate}
                language={language}
              />
              <ServiceCard 
                icon={<HeartIcon className="w-10 h-10" />}
                title={t.serviceWeddings}
                language={language}
              />
              <ServiceCard 
                icon={<PlaneIcon className="w-10 h-10" />}
                title={t.serviceAirport}
                language={language}
              />
              <ServiceCard 
                icon={<StarIcon className="w-10 h-10" />}
                title={t.serviceVip}
                language={language}
              />
            </div>
            <div className="mt-4 sm:mt-8 flex justify-center">
                <div className="w-full sm:w-[calc(50%-1rem)]">
                    <ServiceCard
                      icon={<MoreHorizontalIcon className="w-10 h-10" />}
                      title={t.serviceOther}
                      language={language}
                    />
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;