import React from 'react';
import { BuildingIcon, HashIcon, MapPinIcon, GlobeIcon, PhoneIcon, MailIcon } from './icons';
import { translations } from '../lib/translations';
import type { Language } from '../App';

const FeatureItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 bg-[#2a2a2a] p-3 rounded-full border-2 border-[#c0a062] mt-1">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-lg text-white">{value}</p>
      </div>
    </div>
  );
  
const FeaturesSection: React.FC<{ language: Language }> = ({ language }) => {
    const t = translations[language].features;

    return (
      <section id="contact" className="py-20 sm:py-28 scroll-mt-[100px]">
        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-lg shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center font-serif text-4xl font-bold text-white mb-12">{t.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              <FeatureItem 
                icon={<BuildingIcon className="w-6 h-6 text-[#c0a062]" />} 
                label={t.companyName}
                value="Csstop ApS"
              />
              <FeatureItem 
                icon={<HashIcon className="w-6 h-6 text-[#c0a062]" />} 
                label={t.cvr}
                value="44571021"
              />
               <FeatureItem 
                icon={<PhoneIcon className="w-6 h-6 text-[#c0a062]" />} 
                label={t.whatsapp}
                value="+40741050618"
              />
              <FeatureItem 
                icon={<MapPinIcon className="w-6 h-6 text-[#c0a062]" />} 
                label={t.address}
                value={t.addressValue}
              />
              <FeatureItem 
                icon={<GlobeIcon className="w-6 h-6 text-[#c0a062]" />} 
                label={t.operationArea}
                value={t.operationAreaValue}
              />
              <FeatureItem 
                icon={<MailIcon className="w-6 h-6 text-[#c0a062]" />} 
                label={t.email}
                value="acceslimo888@gmail.com"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

export default FeaturesSection;