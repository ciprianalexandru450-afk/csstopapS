import React, { useState } from 'react';

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

const BookingSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const message = `Nume: ${name}
Telefon: ${phone}
Data: ${date}
Ora: ${time}
Preluare: ${pickup}
Destinație: ${destination}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/40741050618?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="rezervari" className="py-20 sm:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-white text-3xl font-bold">Contact text</h2>
          <h3 className="font-serif text-5xl text-[#c0a062]">Inayfair Elite 2</h3>
          <p className="text-gray-400 leading-relaxed">
            În edenimasurat, ban ciorfirlee compo cere pisatie coastlafled wdh tot pchastel couxoware cniu pe ca tmpoi uidoi od nvieortre iid utha. makundaativeal fane auinei hdrio arrtiare givet ii ee stonotruzk dofcioroo otot fboantie putdd int tritos thtvegin reoicmreiib.
          </p>
        </div>
        <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Solicită o Călătorie</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput name="name" label="Nume complet" placeholder="Numele dvs. complet" value={name} onChange={(e) => setName(e.target.value)} required />
              <FormInput name="phone" label="Telefon" placeholder="Numărul de telefon" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput name="date" label="Data" placeholder="Selectați data" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              <FormInput name="time" label="Ora" placeholder="Selectați ora" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <FormInput name="pickup" label="Adresă preluare" placeholder="Adresa completă de preluare" value={pickup} onChange={(e) => setPickup(e.target.value)} required />
            <FormInput name="destination" label="Adresă destinație" placeholder="Adresa completă de destinație" value={destination} onChange={(e) => setDestination(e.target.value)} required />
            <div className="pt-4">
              <GoldButton type="submit" className="w-full">Rezervă acum</GoldButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;