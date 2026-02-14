import React from 'react';
import { InfoIcon, DollarIcon, CheckIcon, PlusIcon, MailIcon } from './icons';

const FeatureItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-[#2a2a2a] p-3 rounded-full border-2 border-[#c0a062]">
      {icon}
    </div>
    <p className="text-gray-400 mt-2">{text}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <section id="servicii" className="py-20 sm:py-28">
      <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-10">Contact ideail: 2</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <FeatureItem 
              icon={<InfoIcon className="w-6 h-6 text-[#c0a062]" />} 
              text="Fine tuortoo auodte curo prrtsmu. Wlih ts pande tdt. Ctingtbe."
            />
            <FeatureItem 
              icon={<DollarIcon className="w-6 h-6 text-[#c0a062]" />} 
              text="Riueer oomgrstutul iloroiea terfe incnalitere-tie eddowri d enseiie we bia ts rterice por niofiibiiq dobida."
            />
            <FeatureItem 
              icon={<CheckIcon className="w-6 h-6 text-[#c0a062]" />} 
              text="Nlee a ngriontca gntoro te tns ta thewireo m imotut eud anicdeat ire tie ctiuolcd te ptotudrb eorpneie pteit."
            />
            <FeatureItem 
              icon={<PlusIcon className="w-6 h-6 text-[#c0a062]" />} 
              text="Rixae learlian doitoe tsedrd as tcoast oxt od pftorns rulaot ooi bst."
            />
             <FeatureItem 
              icon={<InfoIcon className="w-6 h-6 text-[#c0a062]" />} 
              text="Axe si noota eme ilo rete tm coond oxase pio veet sod bn waive hu fi hetee iho ge attsit pii ts hetooe reatias."
            />
             <FeatureItem 
              icon={<MailIcon className="w-6 h-6 text-[#c0a062]" />} 
              text="Meei k reppratnt ia pawsta contie mood pi craneie tiid anad ijut esiens hioner. interoyles pootot kts ep rrananld."
            />
          </div>
          <div>
            <div className="border-4 border-[#c0a062] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://i.imgur.com/7Yf8bL4.png" 
                alt="Map location" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
