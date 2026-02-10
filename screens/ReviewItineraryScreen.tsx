import React from 'react';
import { drivers, vehicles } from '../data';

interface Props {
  navigate: (path: string) => void;
}

export const ReviewItineraryScreen: React.FC<Props> = ({ navigate }) => {
  const driver = drivers[3]; // Iqbal
  const vehicle = vehicles[0]; // Fortuner

  return (
    <div className="bg-background-dark font-display text-slate-100 antialiased min-h-screen">
      <div className="h-12 w-full"></div>
      
      <header className="px-5 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('bookTrip')}
              className="h-10 w-10 flex items-center justify-center bg-surface-dark border border-border-dark rounded-full hover:bg-slate-800 transition-colors"
            >
              <span className="material-icons text-slate-300 pl-1">arrow_back_ios</span>
            </button>
            <div>
              <p className="text-[10px] font-black text-secondary uppercase tracking-widest leading-tight">Branded Booking</p>
              <h1 className="text-xl font-bold tracking-tight text-white">Review Itinerary</h1>
            </div>
          </div>
          <div className="bg-white p-1 rounded-lg w-10 h-10 flex items-center justify-center">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0-QxegwKrAMEr7LzTgyembZIOVmfkatk2uRuiOdqDCU5kO2TFpZ_JEWjpiOccEY386NY85GUkbhNkLsgQJtR82ZpEcTJZ_XX4Y6YLp8xbwIfogaj7VQ1NBu1MntOl3v8LhuJTjyxzTn7lc_v0loNkexwRLCWjeip9wRE1vD6TKZVR8BaB98JpyX7H8YZCvmv4UKuvv3Gw95KaENOoYDLsZm5r4lBkpF_FmWf8av2ER4oMqfeZzXeuPI6ofX-GKqq-bpDJhXiHBsB5" 
              alt="Kimia Logo" 
              className="w-8 h-auto object-contain" 
            />
          </div>
        </div>
      </header>

      <main className="px-5 pb-40">
        <section className="mb-8">
          <div className="bg-surface-dark rounded-2xl p-6 border border-border-dark shadow-sm">
            <div className="flex items-start gap-4 mb-6 relative">
              <div className="flex flex-col items-center gap-1 z-10">
                <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
                <div className="w-0.5 h-12 bg-border-dark"></div>
                <div className="w-3 h-3 rounded-full border-2 border-primary bg-surface-dark"></div>
              </div>
              <div className="flex-1">
                <div className="mb-6">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">Pickup Point</p>
                  <p className="text-sm font-semibold text-white">HQ Kimia Malaysia, Petaling Jaya</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">Destination</p>
                  <p className="text-sm font-semibold text-white">KLIA International Airport Terminal 1</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-dark">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">Date</p>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">calendar_today</span>
                  <p className="text-sm font-semibold text-white">24 Oct 2023</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">Time</p>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">schedule</span>
                  <p className="text-sm font-semibold text-white">08:30 AM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-[11px] font-bold text-slate-500 uppercase mb-3 px-1 tracking-widest">Selected Driver & Vehicle</h2>
          <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={driver.image} alt={driver.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{driver.name}</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 font-medium mt-0.5">
                    <span className="material-icons text-[14px] text-secondary">star</span>
                    {driver.rating} • {driver.trips} Trips
                  </p>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">Verified</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-background-dark/50 p-3 rounded-xl border border-white/5">
              <div className="w-16 h-10 rounded-lg overflow-hidden flex-shrink-0">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{vehicle.name}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">{vehicle.category} • {vehicle.plateNumber}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Booking Preferences</h2>
            <button className="text-primary text-xs font-bold">Edit</button>
          </div>
          <div className="space-y-3">
            <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-icons text-primary text-lg">business_center</span>
                <span className="text-sm font-semibold text-white">Business Trip Luggage</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">Standard (2 Large)</span>
            </div>
            <div className="bg-surface-dark p-4 rounded-xl border border-border-dark flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-icons text-primary text-lg">meeting_room</span>
                <span className="text-sm font-semibold text-white">Meet & Greet Service</span>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-t border-border-dark px-5 py-6 pb-10 flex flex-col gap-4">
        <div className="flex items-start gap-3 px-1">
          <div className="mt-0.5">
            <span className="material-icons text-primary text-lg">verified_user</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
            By confirming, this reservation will be logged under your corporate account. No immediate payment is required as per the KIMIA MALAYSIA travel policy.
          </p>
        </div>
        <button 
          onClick={() => navigate('home')}
          className="w-full bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
        >
          <span>Confirm Reservation</span>
          <span className="material-icons text-lg">check_circle</span>
        </button>
      </div>
    </div>
  );
};