import React from 'react';
import { availabilityTimeline } from '../data';

interface Props {
  navigate: (path: string) => void;
}

export const AvailabilityScreen: React.FC<Props> = ({ navigate }) => {
  // Helper to get color classes based on event type
  const getEventStyle = (type: string) => {
    switch(type) {
      case 'active': return 'bg-primary/10 border-primary text-primary';
      case 'resting': return 'bg-slate-500/10 border-slate-500 text-slate-400';
      case 'maintenance': return 'bg-secondary/10 border-secondary text-secondary';
      case 'reserved': return 'bg-primary/10 border-primary text-primary';
      default: return 'bg-slate-800 border-slate-600 text-slate-300';
    }
  };

  const getStatusDot = (status: string) => {
    switch(status) {
      case 'On Duty': return 'bg-primary';
      case 'Off Duty': return 'bg-slate-500';
      case 'Service': return 'bg-secondary';
      case 'Ready': return 'bg-primary';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="bg-background-dark text-slate-100 font-display min-h-screen">
      <div className="h-12 w-full flex items-center justify-between px-6 bg-background-dark sticky top-0 z-50">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex gap-1.5 items-center">
          <span className="material-icons text-xs">signal_cellular_alt</span>
          <span className="material-icons text-xs">wifi</span>
          <span className="material-icons text-xs">battery_full</span>
        </div>
      </div>

      <header className="px-5 py-4 bg-background-dark border-b border-white/5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold tracking-tight">Availability</h1>
          <button className="bg-primary/10 text-primary p-2 rounded-lg">
            <span className="material-icons text-base">calendar_today</span>
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          <button className="flex-shrink-0 px-4 py-2 bg-primary text-white rounded-full text-xs font-semibold">Today</button>
          <button className="flex-shrink-0 px-4 py-2 bg-white/5 text-slate-400 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors">Oct 24</button>
          <button className="flex-shrink-0 px-4 py-2 bg-white/5 text-slate-400 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors">Oct 25</button>
          <button className="flex-shrink-0 px-4 py-2 bg-white/5 text-slate-400 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors">Oct 26</button>
          <button className="flex-shrink-0 px-4 py-2 bg-white/5 text-slate-400 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors">Oct 27</button>
        </div>
      </header>

      <div className="px-5 py-3 flex gap-4 border-b border-white/5 text-[10px] uppercase tracking-wider font-bold text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span>Active</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span>Maintenance</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-slate-500"></span>
          <span>Resting</span>
        </div>
      </div>

      <main className="relative flex overflow-hidden bg-[#0A0E17]">
        {/* Sticky Sidebar */}
        <div className="w-28 flex-shrink-0 border-r border-white/5 bg-[#0B1019] z-20">
          <div className="h-10 flex items-center px-3 border-b border-white/5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Asset</span>
          </div>
          <div className="flex flex-col">
            {availabilityTimeline.map(asset => (
              <div key={asset.id} className="h-16 flex flex-col justify-center px-3 border-b border-white/5 bg-[#0B1019]">
                <span className="text-xs font-bold truncate text-slate-200">{asset.name}</span>
                <span className="text-[9px] text-slate-400 flex items-center gap-1 font-medium mt-0.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(asset.status)}`}></span> {asset.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Timeline Content */}
        <div className="flex-grow overflow-x-auto hide-scrollbar">
          <div className="w-[1440px] relative"> 
            {/* Time Header */}
            <div className="h-10 flex border-b border-white/5 timeline-grid">
              {[8,9,10,11,12,13,14,15,16,17,18,19].map(hour => (
                <div key={hour} className="w-[60px] flex-shrink-0 flex items-center justify-center text-[10px] font-medium text-slate-500">
                  {hour.toString().padStart(2, '0')}:00
                </div>
              ))}
            </div>
            
            {/* Timeline Rows */}
            <div className="relative timeline-grid" style={{ height: `${availabilityTimeline.length * 4}rem` }}>
              {availabilityTimeline.map((asset, index) => (
                <div key={asset.id} className="h-16 flex items-center relative border-b border-white/5 hover:bg-white/5 transition-colors">
                  {asset.events.map(event => {
                    const left = (event.startHour - 8) * 60; // 60px per hour, starting at 8:00
                    const width = event.duration * 60;
                    const styles = getEventStyle(event.type);
                    
                    return (
                      <div 
                        key={event.id}
                        className={`absolute h-10 border-l-4 rounded-lg flex flex-col justify-center px-3 overflow-hidden ${styles}`}
                        style={{ left: `${left}px`, width: `${width}px` }}
                      >
                        <span className="text-[9px] font-black truncate uppercase tracking-widest">{event.title}</span>
                        <span className="text-[8px] opacity-70 font-medium mt-0.5">
                          {event.startHour.toString().padStart(2, '0')}:00 - {(event.startHour + event.duration).toString().padStart(2, '0')}:00
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
              
              {/* Current Time Indicator (Static for demo, e.g., 11:30 = (11.5 - 8) * 60 = 210px) */}
              <div className="absolute left-[210px] top-0 bottom-0 w-px bg-primary z-10 shadow-[0_0_8px_rgba(57,173,74,0.5)] pointer-events-none">
                <div className="absolute top-0 -left-1 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-background-dark"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-20 left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-t border-white/5 px-5 pt-4 pb-6 z-40">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-icons">contact_support</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Need assistance?</h3>
              <p className="text-[10px] text-slate-400 font-medium">Contact admin for urgent scheduling shifts.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-xl text-xs font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
              <span className="material-icons text-base">call</span>
              Call Admin
            </button>
            <button className="flex items-center justify-center gap-2 bg-surface-dark border border-border-dark text-primary py-3 px-4 rounded-xl text-xs font-bold active:scale-95 transition-all hover:bg-slate-800">
              <span className="material-icons text-base">mail</span>
              Email Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};