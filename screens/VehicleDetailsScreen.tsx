import React from 'react';
import { Vehicle } from '../types';
import { drivers } from '../data';

interface Props {
  vehicle: Vehicle | null;
  navigate: (path: string) => void;
}

export const VehicleDetailsScreen: React.FC<Props> = ({ vehicle, navigate }) => {
  if (!vehicle) {
    navigate('home');
    return null;
  }

  return (
    <div className="font-display bg-background-dark text-slate-100 min-h-screen pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-12 pb-3 flex justify-between items-center bg-transparent">
        <button 
          onClick={() => navigate('home')}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/60 ios-blur text-white border border-white/10 hover:bg-slate-900/80 transition-colors"
        >
          <span className="material-icons text-xl pl-1">arrow_back_ios</span>
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 ios-blur border border-white/10">
            <span className="text-[10px] font-black text-primary tracking-widest uppercase">Vehicle Details</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/60 ios-blur text-white border border-white/10">
          <span className="material-icons text-xl">share</span>
        </button>
      </header>

      <section className="relative h-[45vh] w-full">
        <div className="w-full h-full relative overflow-hidden">
          <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
        </div>
      </section>

      <main className="px-5 -mt-8 relative z-10">
        <div className="bg-surface-dark rounded-2xl p-6 shadow-xl border border-border-dark mb-6">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                            {vehicle.category}
                        </span>
                        <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            Available
                        </span>
                    </div>
                    <h1 className="text-2xl font-black tracking-tight mb-1 text-slate-100">{vehicle.name}</h1>
                    <p className="text-sm text-slate-400 font-medium">Standard Executive SUV • 2024 Model</p>
                </div>
                <div className="bg-secondary/10 p-2 rounded-lg border border-secondary/20">
                    <span className="material-symbols-outlined text-secondary font-bold">verified</span>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-6">
                <div className="bg-background-dark p-3 rounded-xl flex flex-col items-center justify-center gap-1 border border-border-dark">
                    <span className="material-icons text-primary text-lg">groups</span>
                    <span className="text-[10px] font-medium text-slate-400">{vehicle.capacity} Seats</span>
                </div>
                <div className="bg-background-dark p-3 rounded-xl flex flex-col items-center justify-center gap-1 border border-border-dark">
                    <span className="material-icons text-primary text-lg">settings_input_component</span>
                    <span className="text-[10px] font-medium text-slate-400">Auto</span>
                </div>
                <div className="bg-background-dark p-3 rounded-xl flex flex-col items-center justify-center gap-1 border border-border-dark">
                    <span className="material-icons text-primary text-lg">luggage</span>
                    <span className="text-[10px] font-medium text-slate-400">{vehicle.luggage} Bags</span>
                </div>
                <div className="bg-background-dark p-3 rounded-xl flex flex-col items-center justify-center gap-1 border border-border-dark">
                    <span className="material-icons text-primary text-lg">ac_unit</span>
                    <span className="text-[10px] font-medium text-slate-400">Dual AC</span>
                </div>
            </div>

            <div className="mb-2">
                <h2 className="text-[11px] font-black uppercase tracking-[0.1em] text-slate-500 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Vehicle Description
                </h2>
                <p className="text-sm leading-relaxed text-slate-400 font-medium">
                    {vehicle.type} Ideal for site inspections, long-distance regional travel, and executive transit where reliability and presence are paramount. Featuring premium upholstery and enhanced suspension for maximum passenger comfort.
                </p>
            </div>
        </div>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Select Driver
            </h2>
            <button className="text-primary text-sm font-bold">View All</button>
          </div>
          
          <div className="flex flex-col gap-3">
            {drivers.map(driver => (
              <div 
                key={driver.id} 
                className={`rounded-2xl p-4 flex items-center gap-4 relative transition-colors ${
                  driver.recommended 
                    ? 'bg-primary/10 border-2 border-primary' 
                    : `bg-surface-dark border border-border-dark ${driver.status !== 'Available' ? 'opacity-60' : ''}`
                }`}
              >
                <div className="relative">
                  <img 
                    src={driver.image} 
                    alt={driver.name} 
                    className={`w-14 h-14 rounded-full object-cover ${driver.recommended ? 'border-2 border-primary' : driver.status !== 'Available' ? 'grayscale-[0.5]' : ''}`} 
                  />
                  <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-[#0B1019] ${
                    driver.status === 'Available' ? 'bg-primary' : 'bg-slate-500'
                  }`}></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-base text-slate-100">{driver.name}</h3>
                    {driver.recommended && (
                      <div className="bg-primary text-background-dark text-[9px] font-black px-2 py-0.5 rounded-full tracking-tighter">
                        RECOMMENDED
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex items-center text-secondary scale-90 -ml-1">
                      <span className="material-icons text-xs">star</span>
                      <span className="text-xs font-bold">{driver.rating}</span>
                    </div>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-slate-400 text-xs">{driver.trips} Trips</span>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end gap-1">
                  <span className={`text-[9px] font-black uppercase tracking-widest ${
                    driver.status === 'Available' ? 'text-primary' : 'text-slate-500'
                  }`}>
                    {driver.status === 'Available' ? 'Available' : 'On Trip'}
                  </span>
                  {driver.status === 'Available' ? (
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${driver.recommended ? 'bg-primary' : 'border-2 border-slate-600'}`}>
                      {driver.recommended && <span className="material-icons text-background-dark text-base">check</span>}
                    </div>
                  ) : (
                    <p className="text-[10px] text-slate-500 mt-0.5">ETA: {driver.eta}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-primary/10 rounded-2xl p-5 border border-primary/20 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[10px] uppercase font-bold text-primary tracking-[0.15em] mb-1">Estimated Fare</p>
              <p className="text-3xl font-black text-slate-100">${vehicle.price.toFixed(2)}<span className="text-sm text-slate-500 font-medium ml-1">/day</span></p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Corporate Plan</p>
              <div className="flex items-center justify-end gap-1.5">
                <span className="material-symbols-outlined text-secondary text-lg">verified</span>
                <p className="text-sm font-bold text-slate-200">Platinum</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/80 ios-blur border-t border-white/5 pb-8 z-50">
        <div className="max-w-md mx-auto flex gap-3">
          <button 
            onClick={() => navigate('review')}
            className="flex-1 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <span>Request Reservation</span>
            <span className="material-icons text-xl">arrow_forward</span>
          </button>
        </div>
      </footer>
    </div>
  );
};