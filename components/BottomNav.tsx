import React from 'react';

interface Props {
  currentPath: string;
  navigate: (path: string) => void;
}

export const BottomNav: React.FC<Props> = ({ currentPath, navigate }) => {
  // If we are in a sub-flow (like booking or details), we might not show the full nav, 
  // but for this demo, we'll keep it simple and hide it on certain screens in App.tsx instead.

  const navItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'availability', icon: 'calendar_month', label: 'Availability', isCenter: true },
    { id: 'inbox', icon: 'notifications_none', label: 'Inbox' },
    { id: 'profile', icon: 'person_outline', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white dark:bg-[#0B1019] flex items-start justify-around border-t border-white/5 px-4 pt-3 z-40">
      {navItems.map((item) => {
        const isActive = currentPath === item.id;
        
        if (item.isCenter) {
           return (
             <button 
               key={item.id}
               onClick={() => navigate(item.id)}
               className="flex flex-col items-center gap-1"
             >
               <div className={`w-14 h-14 rounded-full -mt-10 flex items-center justify-center text-white shadow-xl border-4 border-background-dark transition-colors ${isActive ? 'bg-primary shadow-primary/30' : 'bg-slate-700'}`}>
                 <span className="material-icons text-2xl" style={isActive ? {} : { color: '#94a3b8'}}>
                    {item.icon}
                 </span>
               </div>
               <span className={`text-[10px] font-semibold ${isActive ? 'text-primary' : 'text-slate-500'}`}>{item.label}</span>
             </button>
           );
        }

        return (
          <button 
            key={item.id}
            onClick={() => navigate(item.id)}
            className={`flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-400'}`}
          >
            <span className={`material-icons text-[24px] ${isActive ? '' : 'opacity-80'}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-semibold">{item.label}</span>
          </button>
        );
      })}
      
      {/* iOS Home Indicator Space */}
      <div className="fixed bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full opacity-50 z-50 pointer-events-none"></div>
    </nav>
  );
};