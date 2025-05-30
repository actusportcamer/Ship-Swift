export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface TrackingStatus {
  code: 'pending' | 'in_transit' | 'out_for_delivery' | 'delivered' | 'exception' | 'returned';
  label: string;
  description: string;
  color: string;
}

export interface TrackingEvent {
  id: string;
  timestamp: string;
  location: string;
  status: TrackingStatus['code'];
  description: string;
}

export interface TrackingLocation {
  lat: number;
  lng: number;
  name: string;
}

export interface Package {
  id: string;
  trackingNumber: string;
  carrier: string;
  service: string;
  description?: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  weight?: string;
  status: TrackingStatus['code'];
  events: TrackingEvent[];
  currentLocation?: TrackingLocation;
  isDelivered: boolean;
  isFavorite?: boolean;
}

export interface Notification {
  id: string;
  packageId: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'status_update' | 'delivery' | 'exception' | 'general';
}