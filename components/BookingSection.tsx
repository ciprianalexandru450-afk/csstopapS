import React from 'react';

const GoldButton: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <button className={`bg-gradient-to-r from-[#c0a062] to-[#d4b47a] text-black font-bold py-3 px-8 rounded-md shadow-lg hover:opacity-90 transition-opacity ${className}`}>
    {children}
  </button>
);

const FormInput: React.FC<{ label: string; placeholder: string; type?: string; className?: string }> = ({ label, placeholder, type = 'text', className = '' }) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full bg-[#333] border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c0a062] focus:border-transparent transition" 
    />
  </div>
);

const BookingSection: React.FC = () => {
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
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput label="Nume" placeholder="Nume" />
              <FormInput label="Număr tău complet" placeholder="Număr tău complet" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput label="Data" placeholder="data" type="date" />
              <FormInput label="Ora" placeholder="ora" type="time" />
            </div>
            <FormInput label="Preluare" placeholder="Preluare" />
            <FormInput label="Destinație" placeholder="Destinație" />
            <div className="pt-4">
              <GoldButton className="w-full">Rezervă acum</GoldButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;