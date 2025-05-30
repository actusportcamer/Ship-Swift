import React, { useEffect, useRef } from 'react';
import { TrackingLocation } from '../../types';

interface TrackingMapProps {
  location?: TrackingLocation;
  origin?: string;
  destination?: string;
}

const TrackingMap: React.FC<TrackingMapProps> = ({ location, origin, destination }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  // In a real implementation, we would use a mapping library like Mapbox, Google Maps, or Leaflet
  // For this example, we'll create a placeholder with styling
  
  useEffect(() => {
    if (mapRef.current) {
      // In a real implementation, we would initialize the map here
      // For now, we'll just add a placeholder with some styling
    }
  }, [location]);

  if (!location) {
    return (
      <div className="bg-slate-100 rounded-lg p-4 h-64 flex items-center justify-center">
        <p className="text-slate-500 text-center">
          Location data not available
        </p>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md">
      <div
        ref={mapRef}
        className="h-64 bg-slate-200 rounded-lg"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4318236/pexels-photo-4318236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3">
        <div className="text-sm font-medium text-slate-900">
          Current Location: {location.name}
        </div>
        
        {(origin || destination) && (
          <div className="mt-1 text-xs text-slate-600 flex flex-wrap">
            {origin && <span className="mr-2">From: {origin}</span>}
            {destination && <span>To: {destination}</span>}
          </div>
        )}
      </div>
      
      {/* Simulated package marker */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="h-6 w-6 bg-teal-500 rounded-full border-2 border-white shadow-md flex items-center justify-center animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrackingMap;