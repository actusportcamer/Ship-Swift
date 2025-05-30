/**
 * Format a date string into a readable format
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
};

/**
 * Format a date string with time
 */
export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
};

/**
 * Get relative time (e.g., "2 hours ago", "yesterday")
 */
export const getRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'just now';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) {
    return 'yesterday';
  }
  
  if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  }
  
  return formatDate(dateString);
};

/**
 * Calculate days until delivery
 */
export const getDaysUntilDelivery = (deliveryDateString: string): number => {
  const deliveryDate = new Date(deliveryDateString);
  const today = new Date();
  
  // Reset time to compare dates only
  today.setHours(0, 0, 0, 0);
  deliveryDate.setHours(0, 0, 0, 0);
  
  const diffTime = deliveryDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Get delivery status message based on estimated delivery date
 */
export const getDeliveryStatusMessage = (deliveryDateString: string): string => {
  const daysUntil = getDaysUntilDelivery(deliveryDateString);
  
  if (daysUntil < 0) {
    return 'Delivery date passed';
  }
  
  if (daysUntil === 0) {
    return 'Scheduled for delivery today';
  }
  
  if (daysUntil === 1) {
    return 'Arriving tomorrow';
  }
  
  return `Arriving in ${daysUntil} days`;
};