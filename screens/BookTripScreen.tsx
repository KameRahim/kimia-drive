import React from 'react';
import { drivers } from '../data';

interface Props {
  navigate: (path: string) => void;
}

export const BookTripScreen: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="bg-background-dark text-slate-100 font-display min-h-screen flex flex-col pb-32">
      <div className="w-full h-12 flex items-center justify-between px-6 sticky top-0 bg-background-dark/80 backdrop-blur-md z-50">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="material-icons text-sm">signal_cellular_alt</span>
          <span className="material-icons text-sm">wifi</span>
          <span className="material-icons text-sm">battery_full</span>
        </div>
      </div>

      <header className="px-6 py-4 flex items-center justify-between">
        <button 
            onClick={() => navigate('home')}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-dark border border-border-dark shadow-sm hover:bg-slate-800 transition-colors"
        >
          <span className="material-icons text-slate-300">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight text-white">Book Your Trip</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 px-6">
        {/* Date Selection */}
        <section className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Select Date</h2>
            <span className="text-primary text-sm font-bold">October 2023</span>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar py-2 -mx-6 px-6">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => {
              const date = 23 + i;
              const isSelected = date === 24;
              return (
                <div 
                  key={day}
                  className={`flex-shrink-0 w-14 h-20 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105 ring-1 ring-primary/50' 
                      : 'bg-surface-dark border border-border-dark hover:border-slate-500'
                  }`}
                >
                  <span className={`text-xs mb-1 ${isSelected ? 'opacity-90' : 'text-slate-400'}`}>{day}</span>
                  <span className="text-lg font-bold">{date}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Route Details */}
        <section className="mt-8">
          <h2 className="font-semibold text-slate-400 text-[11px] uppercase tracking-widest mb-4">Route Details</h2>
          <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark relative">
            <div className="absolute left-[33px] top-[48px] bottom-[48px] w-0.5 border-l-2 border-dashed border-slate-700"></div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full border-4 border-primary/20 bg-primary flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Pickup Location</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-none p-0 text-white placeholder-slate-500 focus:ring-0 font-medium outline-none" 
                    defaultValue="Corporate HQ - Building A" 
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full border-4 border-primary/20 bg-primary flex items-center justify-center z-10">
                  <span className="material-icons text-[10px] text-white">location_on</span>
                </div>
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Destination</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-none p-0 text-white placeholder-slate-500 focus:ring-0 font-medium outline-none" 
                    defaultValue="International Airport (JFK)" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Driver Selection */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-400 text-[11px] uppercase tracking-widest">Select Driver</h2>
            <span className="text-xs text-slate-500 font-medium">5 Available</span>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-6 px-6">
            {drivers.map((driver, idx) => {
              const isSelected = idx === 3; // Iqbal
              return (
                <div key={driver.id} className={`flex-shrink-0 w-24 text-center group cursor-pointer ${!isSelected && 'opacity-60'}`}>
                  <div className={`relative w-20 h-20 mx-auto mb-2 p-1 rounded-full border-2 ${isSelected ? 'border-primary bg-primary/10' : 'border-transparent'}`}>
                    <img src={driver.image} alt={driver.name} className="w-full h-full rounded-full object-cover" />
                    {isSelected && (
                      <div className="absolute bottom-0 right-1 w-5 h-5 bg-primary border-2 border-surface-dark rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm font-semibold truncate text-white">{driver.name}</p>
                  <p className={`text-[10px] font-bold ${isSelected ? 'text-primary' : 'text-slate-400'}`}>{driver.rating} ★</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Summary */}
        <section className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="material-icons text-primary">directions_car</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Premium Sedan</h4>
              <p className="text-xs text-slate-400 font-medium">Est. 25 mins journey</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block mb-0.5">Estimated Fare</span>
            <span className="text-lg font-black text-primary">$45.00</span>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 inset-x-0 bg-background-dark/95 backdrop-blur-xl border-t border-border-dark p-6 pb-10">
        <button 
          onClick={() => navigate('review')}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 active:scale-95 uppercase tracking-widest text-sm"
        >
          <span>Confirm Booking</span>
          <span className="material-icons text-white">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};