import React, { useState, useEffect } from 'react';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './screens/HomeScreen';
import { VehicleDetailsScreen } from './screens/VehicleDetailsScreen';
import { BookTripScreen } from './screens/BookTripScreen';
import { ReviewItineraryScreen } from './screens/ReviewItineraryScreen';
import { AvailabilityScreen } from './screens/AvailabilityScreen';
import { Vehicle } from './types';

// Simple custom hash router hook to avoid external dependencies
function useHashRouter() {
  const [hash, setHash] = useState(window.location.hash.slice(1) || 'home');
  
  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash.slice(1) || 'home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  const navigate = (path: string) => {
    window.location.hash = path;
  };
  
  return { currentPath: hash, navigate };
}

export default function App() {
  const { currentPath, navigate } = useHashRouter();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  // Determine if BottomNav should be shown
  const showBottomNav = ['home', 'availability', 'inbox', 'profile'].includes(currentPath);

  return (
    <div className="bg-[#0B1019] min-h-screen text-slate-100 font-display selection:bg-primary/30">
      {currentPath === 'home' && (
        <HomeScreen navigate={navigate} setSelectedVehicle={setSelectedVehicle} />
      )}
      
      {currentPath === 'availability' && (
        <AvailabilityScreen navigate={navigate} />
      )}
      
      {currentPath === 'vehicleDetails' && (
        <VehicleDetailsScreen navigate={navigate} vehicle={selectedVehicle} />
      )}
      
      {currentPath === 'bookTrip' && (
        <BookTripScreen navigate={navigate} />
      )}
      
      {currentPath === 'review' && (
        <ReviewItineraryScreen navigate={navigate} />
      )}
      
      {/* Placeholder for un-implemented tabs */}
      {['inbox', 'profile'].includes(currentPath) && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-slate-500">
           <span className="material-icons text-6xl mb-4 opacity-20">{currentPath === 'inbox' ? 'notifications' : 'person'}</span>
           <p className="font-bold text-lg capitalize">{currentPath} Content</p>
           <p className="text-sm mt-2">Section under construction.</p>
        </div>
      )}

      {showBottomNav && <BottomNav currentPath={currentPath} navigate={navigate} />}
    </div>
  );
}