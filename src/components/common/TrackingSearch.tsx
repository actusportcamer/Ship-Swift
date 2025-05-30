import React, { useState } from 'react';
import { Search, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TrackingSearchProps {
  large?: boolean;
  placeholder?: string;
  onSearch?: (trackingNumber: string) => void;
}

const TrackingSearch: React.FC<TrackingSearchProps> = ({ 
  large = false, 
  placeholder = "Enter tracking number", 
  onSearch 
}) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    
    setIsSearching(true);
    
    // If onSearch prop is provided, call it
    if (onSearch) {
      onSearch(trackingNumber.trim());
    } else {
      // Otherwise navigate to tracking page
      navigate(`/track/${trackingNumber.trim()}`);
    }
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  const containerClasses = large
    ? "flex w-full max-w-3xl mx-auto"
    : "flex w-full";
    
  const inputClasses = large
    ? "w-full py-4 px-6 text-lg"
    : "w-full py-2 px-4 text-base";
    
  const buttonClasses = large
    ? "py-4 px-6 text-lg"
    : "py-2 px-4 text-base";

  return (
    <form onSubmit={handleSubmit} className={containerClasses}>
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className={`${inputClasses} pl-10 bg-white border border-slate-300 text-slate-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
          placeholder={placeholder}
        />
      </div>
      <button
        type="submit"
        disabled={isSearching || !trackingNumber.trim()}
        className={`${buttonClasses} bg-teal-600 text-white font-medium rounded-r-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition duration-150 flex items-center justify-center min-w-24`}
      >
        {isSearching ? (
          <Loader className="h-5 w-5 animate-spin" />
        ) : (
          "Track"
        )}
      </button>
    </form>
  );
};

export default TrackingSearch;