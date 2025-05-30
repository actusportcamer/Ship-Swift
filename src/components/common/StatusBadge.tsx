import React from 'react';
import { Package, Check, Clock, Truck, AlertTriangle, RotateCcw } from 'lucide-react';
import { TrackingStatus } from '../../types';
import { statusMap } from '../../data/mockData';

interface StatusBadgeProps {
  status: TrackingStatus['code'];
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status, 
  size = 'md', 
  showLabel = true 
}) => {
  const statusInfo = statusMap[status];
  
  const getStatusIcon = () => {
    switch (status) {
      case 'pending':
        return <Clock className={iconSize} />;
      case 'in_transit':
        return <Truck className={iconSize} />;
      case 'out_for_delivery':
        return <Package className={iconSize} />;
      case 'delivered':
        return <Check className={iconSize} />;
      case 'exception':
        return <AlertTriangle className={iconSize} />;
      case 'returned':
        return <RotateCcw className={iconSize} />;
      default:
        return <Package className={iconSize} />;
    }
  };
  
  // Determine sizes based on the size prop
  let containerClasses = '';
  let iconSize = '';
  let labelClasses = '';
  
  switch (size) {
    case 'sm':
      containerClasses = 'px-2 py-1 text-xs';
      iconSize = 'w-3 h-3';
      labelClasses = 'ml-1';
      break;
    case 'lg':
      containerClasses = 'px-4 py-2 text-base';
      iconSize = 'w-5 h-5';
      labelClasses = 'ml-2 font-medium';
      break;
    default: // md
      containerClasses = 'px-3 py-1.5 text-sm';
      iconSize = 'w-4 h-4';
      labelClasses = 'ml-1.5';
  }
  
  return (
    <div className={`inline-flex items-center rounded-full ${statusInfo.color} text-white ${containerClasses}`}>
      {getStatusIcon()}
      {showLabel && <span className={labelClasses}>{statusInfo.label}</span>}
    </div>
  );
};

export default StatusBadge;