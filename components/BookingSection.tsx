import React, { useState } from 'react';
import { translations } from '../lib/translations';
import type { Language } from '../App';

const GoldButton: React.FC<{ children: React.ReactNode; className?: string; type?: 'button' | 'submit' | 'reset' }> = ({ children, className = '', type = 'button' }) => (
  <button type={type} className={`bg-gradient-to-r from-[#c0a062] to-[#d4b47a] text-black font-bold py-3 px-8 rounded-md shadow-lg hover:opacity-90 transition-opacity ${className}`}>
    {children}
  </button>
);

const FormInput: React.FC<{ 
  label: string; 
  placeholder: string; 
  type?: string; 
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name: string;
}> = ({ label, placeholder, type = 'text', className = '', value, onChange, required = false, name }) => (
  <div className={className}>
    <label htmlFor={name} className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
    <input 
      id={name}
      name={name}
      type={type} 
      placeholder={placeholder} 
      className="w-full bg-[#333] border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c0a062] focus:border-transparent transition" 
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

const BookingSection: React.FC<{ language: Language }> = ({ language }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  
  const t = translations[language].booking;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const message = `Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Pickup: ${pickup}
Destination: ${destination}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/40741050618?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="rezervari" className="py-20 sm:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="tracking-widest text-sm font-bold text-gray-400 uppercase">
            {t.title}
          </h2>
          <h3 className="font-serif text-5xl text-[#c0a062]">{t.heading}</h3>
          <p className="text-gray-400 leading-relaxed">
            {t.description}
          </p>
        </div>
        <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">{t.formTitle}</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput name="name" label={t.formName} placeholder={t.formNamePlaceholder} value={name} onChange={(e) => setName(e.target.value)} required />
              <FormInput name="phone" label={t.formPhone} placeholder={t.formPhonePlaceholder} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput name="date" label={t.formDate} placeholder={t.formDatePlaceholder} type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              <FormInput name="time" label={t.formTime} placeholder={t.formTimePlaceholder} type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <FormInput name="pickup" label={t.formPickup} placeholder={t.formPickupPlaceholder} value={pickup} onChange={(e) => setPickup(e.target.value)} required />
            <FormInput name="destination" label={t.formDestination} placeholder={t.formDestinationPlaceholder} value={destination} onChange={(e) => setDestination(e.target.value)} required />
            <div className="pt-4">
              <GoldButton type="submit" className="w-full">{t.formButton}</GoldButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;