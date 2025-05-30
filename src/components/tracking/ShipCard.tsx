import React from 'react';
import { Package as PackageType } from '../../types';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Package, ExternalLink } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';
import { formatDate, getDeliveryStatusMessage } from '../../utils/dateUtils';

interface PackageCardProps {
  packageData: PackageType;
  compact?: boolean;
}

const ShipCard: React.FC<PackageCardProps> = ({ packageData, compact = false }) => {
  const isExpanded = !compact;
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <StatusBadge status={packageData.status} />
              {packageData.isFavorite && (
                <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                  Favorite
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              {packageData.description || `Package #${packageData.trackingNumber}`}
            </h3>
            
            <div className="flex flex-wrap items-center text-sm text-slate-500 mb-3">
              <span className="mr-3">
                {packageData.carrier} {packageData.service}
              </span>
              <span className="font-mono">{packageData.trackingNumber}</span>
            </div>
          </div>
          
          <Link
            to={`/track/${packageData.trackingNumber}`}
            className="text-teal-600 hover:text-teal-700 ml-2 p-1"
          >
            <ExternalLink className="h-5 w-5" />
            <span className="sr-only">View details</span>
          </Link>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-slate-400 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <div className="text-sm text-slate-600">
                <span className="font-medium">From:</span> {packageData.origin}
              </div>
              <div className="text-sm text-slate-600">
                <span className="font-medium">To:</span> {packageData.destination}
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
            <div>
              <div className="text-sm text-slate-600">
                <span className="font-medium">Estimated Delivery:</span> {formatDate(packageData.estimatedDelivery)}
              </div>
              <div className="text-sm font-medium text-teal-600">
                {getDeliveryStatusMessage(packageData.estimatedDelivery)}
              </div>
            </div>
          </div>
          
          {isExpanded && packageData.weight && (
            <div className="flex items-center">
              <Package className="h-5 w-5 text-slate-400 mr-2" />
              <span className="text-sm text-slate-600">
                <span className="font-medium">Weight:</span> {packageData.weight}
              </span>
            </div>
          )}
        </div>
        
        {isExpanded && packageData.events.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <h4 className="text-sm font-medium text-slate-700 mb-2">Latest Update</h4>
            <div className="text-sm text-slate-600">
              {packageData.events[packageData.events.length - 1].description}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {new Date(packageData.events[packageData.events.length - 1].timestamp).toLocaleString()}
            </div>
          </div>
        )}
        
        <div className="mt-4 pt-2">
          <Link
            to={`/track/${packageData.trackingNumber}`}
            className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center"
          >
            View tracking details
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShipCard;