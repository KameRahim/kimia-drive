import React from 'react';
import { currentUser, vehicles, upcomingSchedule } from '../data';
import { Vehicle } from '../types';

interface Props {
  navigate: (path: string) => void;
  setSelectedVehicle: (v: Vehicle) => void;
}

export const HomeScreen: React.FC<Props> = ({ navigate, setSelectedVehicle }) => {
  const handleVehicleClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    navigate('vehicleDetails');
  };

  return (
    <div className="pb-32 font-display bg-background-dark text-slate-100 min-h-screen">
      <div className="h-12 w-full"></div>
      
      <header className="px-5 pt-2 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-lg w-12 h-12 flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBeS5UNApbyK6dm0tT99o6AhPjq6C65zLV14xbITXcv_-GOoUW-iAqDApKRgKghnj4hUvrkPOs5UagyS2pDqJwmd71c26cn7imD92cJSdZgSP8lXqJqUBE0ZUVQlnkDW9bpO9R_BDNZd5XOMtJyKWKzwy2S_s902nO4UKh0YN6J79uCj_RkLgzT6VqdaZZp8h1ktIlVnPsiT1l974a6yf2crbchyZn-wN1DL1-3sLH-8sVGO8mrL2rxcz2JGcsOH7t_R7yOr809QRv" 
                alt="Kimia Malaysia Logo" 
                className="w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-black italic text-secondary tracking-tighter leading-none">KIMIA</h1>
              <p className="text-[10px] font-bold text-white tracking-[0.2em] leading-none">MALAYSIA</p>
            </div>
          </div>
          <div className="h-12 w-12 rounded-full border-2 border-primary/40 p-0.5 overflow-hidden">
            <img src={currentUser.avatar} alt="User Profile" className="h-full w-full object-cover rounded-full" />
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-1">{currentUser.role}</p>
          <h2 className="text-2xl font-bold tracking-tight">Welcome, {currentUser.name}</h2>
        </div>
        
        <div className="relative">
          <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
            <span className="material-icons text-xl">search</span>
          </span>
          <input 
            type="text" 
            placeholder="Search vehicle availability..." 
            className="w-full h-12 pl-12 pr-4 bg-surface-dark border-none rounded-xl text-sm focus:ring-2 focus:ring-primary shadow-sm text-slate-100 placeholder-slate-500 outline-none" 
          />
        </div>
      </header>

      <main>
        {/* Quick Actions */}
        <section className="px-5 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('bookTrip')}
              className="bg-gradient-to-br from-[#3EAC41] to-[#2E8B31] hover:opacity-95 transition-opacity p-4 rounded-xl flex flex-col items-start justify-between h-32 shadow-lg shadow-primary/20"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <span className="material-icons text-white">add_circle_outline</span>
              </div>
              <span className="text-white font-semibold text-lg text-left leading-tight">New<br/>Booking</span>
            </button>
            <button 
              onClick={() => navigate('availability')}
              className="bg-surface-dark p-4 rounded-xl border border-border-dark flex flex-col items-start justify-between h-32 hover:bg-surface-dark/80 transition-colors"
            >
              <div className="bg-primary/10 p-2 rounded-lg">
                <span className="material-icons text-primary">event_note</span>
              </div>
              <span className="font-semibold text-lg text-left leading-tight text-slate-100">My<br/>Schedule</span>
            </button>
          </div>
        </section>

        {/* Premium Fleet */}
        <div className="px-5 flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Premium Fleet</h2>
          <button className="text-primary text-sm font-bold">View All</button>
        </div>
        
        <section className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 px-5 pb-4">
          {vehicles.map(vehicle => (
            <div 
              key={vehicle.id}
              onClick={() => handleVehicleClick(vehicle)}
              className="snap-center shrink-0 w-[85%] bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-border-dark cursor-pointer hover:border-primary/50 transition-colors"
            >
              <div className="h-48 relative overflow-hidden">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary text-background-dark text-[10px] px-2.5 py-1 rounded-full uppercase font-black tracking-tighter shadow-md">
                    {vehicle.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1 tracking-tight text-slate-100">{vehicle.name}</h3>
                <p className="text-xs text-slate-400 mb-4">{vehicle.type}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="material-icons text-lg">person</span>
                      <span className="text-sm font-medium">{vehicle.capacity} Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-icons text-lg">work</span>
                      <span className="text-sm font-medium">{vehicle.luggage} Large</span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary">
                    <span className="material-icons text-lg">check_circle</span>
                    <span className="text-xs font-bold ml-1 uppercase">Available</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Upcoming Schedule */}
        <section className="px-5 mt-6">
          <h2 className="text-lg font-bold mb-4">Upcoming Schedule</h2>
          
          {upcomingSchedule.map(schedule => (
            <div key={schedule.id} className="bg-surface-dark border border-border-dark rounded-xl p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="text-[10px] font-bold bg-primary/20 text-primary px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  {schedule.status}
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-icons text-primary">airport_shuttle</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-100">To: {schedule.destination}</h4>
                  <p className="text-xs text-slate-400">{schedule.date}, {schedule.time}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-border-dark pt-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full overflow-hidden border border-border-dark">
                    <img src={schedule.driver.image} alt="Driver" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-100">{schedule.driver.name}</p>
                    <p className="text-[10px] text-slate-400">Driver • {schedule.driver.rating} ★</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-primary flex items-center gap-1 hover:text-primary-dark transition-colors">
                  Contact <span className="material-icons text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};