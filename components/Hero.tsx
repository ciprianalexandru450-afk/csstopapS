import React from 'react';
import { ClockIcon, ShieldIcon, DiamondIcon, BriefcaseIcon, HeartIcon, PlaneIcon, StarIcon, MoreHorizontalIcon } from './icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-[#2a2a2a] p-6 rounded-lg text-center flex flex-col items-center shadow-lg">
    <div className="mb-4 p-4 border border-[#c0a062] rounded-md inline-block">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
  <div className="bg-[#2a2a2a] p-6 rounded-lg text-center flex flex-col items-center justify-center shadow-lg h-full">
    <div className="mb-4 text-[#c0a062]">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="bg-[#1a1a1a] rounded-lg p-8 md:p-12 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Excelență in Mișcare
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Transformăm fiecare drum într-o experiență VIP.
            </p>
            <div className="mt-8">
              <a href="#rezervari" className="inline-block bg-gradient-to-r from-[#c0a062] to-[#d4b47a] text-black font-bold py-3 px-8 rounded-md shadow-lg hover:opacity-90 transition-opacity">
                Rezervă acum
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center min-h-[200px] md:min-h-0">
            {/* Spotlight effect */}
            <div className="absolute inset-0 rounded-lg bg-[radial-gradient(ellipse_at_center,_rgba(107,114,128,0.2)_0%,_rgba(17,24,39,0)_70%)]"></div>
            <img 
              src="https://di-shared-assets.dealerinspire.com/legacy/rackspace/ldm-images/2020-MB-S-450-Anthracite-Blue-Color.png" 
              alt="Mercedes S-Class" 
              className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ClockIcon className="w-8 h-8 text-[#c0a062]" />} 
            title="Punctualitate" 
            description="Suntem renumiți pentru punctualitate. Sosim cu 15 minute înainte de ora stabilită." 
          />
          <FeatureCard 
            icon={<ShieldIcon className="w-8 h-8 text-[#c0a062]" />} 
            title="Discreție" 
            description="Suntem întotdeauna discreți, oferind servicii de excepție, la orice oră stabilită." 
          />
          <FeatureCard 
            icon={<DiamondIcon className="w-8 h-8 text-[#c0a062]" />} 
            title="Confort Premium" 
            description="Șoferi de prim rang cu Wi-Fi și băuturi premium incluse pentru confortul dumneavoastră." 
          />
        </div>

        <div id="servicii" className="mt-24">
          <p className="text-center max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Suntem o echipă dedicată, formată din soț și soție, specializați în transport de lux în regim privat și corporate. Cu o vastă experiență în servicii premium, ne mândrim cu un stil de condus impecabil și o atitudine profesională adaptată celor mai exigente cerințe.
          </p>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ServiceCard 
                icon={<BriefcaseIcon className="w-10 h-10" />}
                title="Evenimente Corporate"
              />
              <ServiceCard 
                icon={<HeartIcon className="w-10 h-10" />}
                title="Nunți & Evenimente"
              />
              <ServiceCard 
                icon={<PlaneIcon className="w-10 h-10" />}
                title="Transfer Aeroport"
              />
              <ServiceCard 
                icon={<StarIcon className="w-10 h-10" />}
                title="Transport VIP"
              />
            </div>
            <div className="mt-8 flex justify-center">
                <div className="w-full sm:w-[calc(50%-1rem)]">
                    <ServiceCard
                      icon={<MoreHorizontalIcon className="w-10 h-10" />}
                      title="Altele"
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