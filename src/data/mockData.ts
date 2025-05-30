import { Package, TrackingStatus, User, Notification } from '../types';

export const currentUser: User = {
  id: 'user1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
};

export const statusMap: Record<TrackingStatus['code'], TrackingStatus> = {
  pending: {
    code: 'pending',
    label: 'Pending',
    description: 'Shipment information received',
    color: 'bg-slate-400'
  },
  in_transit: {
    code: 'in_transit',
    label: 'In Transit',
    description: 'Shipment in transit',
    color: 'bg-blue-500'
  },
  out_for_delivery: {
    code: 'out_for_delivery',
    label: 'Out for Delivery',
    description: 'Out for delivery today',
    color: 'bg-teal-500'
  },
  delivered: {
    code: 'delivered',
    label: 'Delivered',
    description: 'Delivered successfully',
    color: 'bg-green-500'
  },
  exception: {
    code: 'exception',
    label: 'Exception',
    description: 'Delivery exception',
    color: 'bg-red-500'
  },
  returned: {
    code: 'returned',
    label: 'Returned',
    description: 'Package returned to sender',
    color: 'bg-amber-500'
  }
};

export const mockPackages: Package[] = [
  {
    id: 'pkg1',
    trackingNumber: 'SHP12345678',
    carrier: 'FastShip Express',
    service: 'Priority',
    description: 'Laptop from TechStore',
    origin: 'San Francisco, CA',
    destination: 'New York, NY',
    estimatedDelivery: '2025-06-15T16:00:00',
    weight: '4.5 lbs',
    status: 'in_transit',
    isDelivered: false,
    isFavorite: true,
    currentLocation: {
      lat: 39.8283,
      lng: -98.5795,
      name: 'Denver, CO'
    },
    events: [
      {
        id: 'evt1',
        timestamp: '2025-06-10T09:30:00',
        location: 'San Francisco, CA',
        status: 'pending',
        description: 'Shipment information received'
      },
      {
        id: 'evt2',
        timestamp: '2025-06-11T14:25:00',
        location: 'San Francisco, CA',
        status: 'in_transit',
        description: 'Package picked up'
      },
      {
        id: 'evt3',
        timestamp: '2025-06-12T07:15:00',
        location: 'Denver, CO',
        status: 'in_transit',
        description: 'Arrived at sort facility'
      }
    ]
  },
  {
    id: 'pkg2',
    trackingNumber: 'SHP87654321',
    carrier: 'Global Logistics',
    service: 'Standard',
    description: 'Books from BookWorld',
    origin: 'Chicago, IL',
    destination: 'Seattle, WA',
    estimatedDelivery: '2025-06-13T12:00:00',
    weight: '2.3 lbs',
    status: 'out_for_delivery',
    isDelivered: false,
    currentLocation: {
      lat: 47.6062,
      lng: -122.3321,
      name: 'Seattle, WA'
    },
    events: [
      {
        id: 'evt4',
        timestamp: '2025-06-08T11:20:00',
        location: 'Chicago, IL',
        status: 'pending',
        description: 'Shipment information received'
      },
      {
        id: 'evt5',
        timestamp: '2025-06-09T08:45:00',
        location: 'Chicago, IL',
        status: 'in_transit',
        description: 'Package picked up'
      },
      {
        id: 'evt6',
        timestamp: '2025-06-10T19:30:00',
        location: 'Minneapolis, MN',
        status: 'in_transit',
        description: 'In transit'
      },
      {
        id: 'evt7',
        timestamp: '2025-06-12T07:15:00',
        location: 'Seattle, WA',
        status: 'in_transit',
        description: 'Arrived at local facility'
      },
      {
        id: 'evt8',
        timestamp: '2025-06-13T06:30:00',
        location: 'Seattle, WA',
        status: 'out_for_delivery',
        description: 'Out for delivery'
      }
    ]
  },
  {
    id: 'pkg3',
    trackingNumber: 'SHP55667788',
    carrier: 'AirFreight',
    service: 'Express',
    description: 'Camera equipment',
    origin: 'Los Angeles, CA',
    destination: 'Miami, FL',
    estimatedDelivery: '2025-06-12T14:00:00',
    weight: '5.7 lbs',
    status: 'delivered',
    isDelivered: true,
    events: [
      {
        id: 'evt9',
        timestamp: '2025-06-09T10:15:00',
        location: 'Los Angeles, CA',
        status: 'pending',
        description: 'Shipment information received'
      },
      {
        id: 'evt10',
        timestamp: '2025-06-09T15:40:00',
        location: 'Los Angeles, CA',
        status: 'in_transit',
        description: 'Package picked up'
      },
      {
        id: 'evt11',
        timestamp: '2025-06-10T08:25:00',
        location: 'Dallas, TX',
        status: 'in_transit',
        description: 'In transit'
      },
      {
        id: 'evt12',
        timestamp: '2025-06-11T11:50:00',
        location: 'Miami, FL',
        status: 'in_transit',
        description: 'Arrived at local facility'
      },
      {
        id: 'evt13',
        timestamp: '2025-06-12T07:30:00',
        location: 'Miami, FL',
        status: 'out_for_delivery',
        description: 'Out for delivery'
      },
      {
        id: 'evt14',
        timestamp: '2025-06-12T13:15:00',
        location: 'Miami, FL',
        status: 'delivered',
        description: 'Delivered - Signed for by J. Smith'
      }
    ]
  },
  {
    id: 'pkg4',
    trackingNumber: 'SHP11223344',
    carrier: 'QuickPost',
    service: 'Standard',
    description: 'Clothing items',
    origin: 'Boston, MA',
    destination: 'Austin, TX',
    estimatedDelivery: '2025-06-16T17:00:00',
    weight: '1.2 lbs',
    status: 'exception',
    isDelivered: false,
    currentLocation: {
      lat: 39.1031,
      lng: -84.5120,
      name: 'Cincinnati, OH'
    },
    events: [
      {
        id: 'evt15',
        timestamp: '2025-06-11T09:10:00',
        location: 'Boston, MA',
        status: 'pending',
        description: 'Shipment information received'
      },
      {
        id: 'evt16',
        timestamp: '2025-06-11T14:35:00',
        location: 'Boston, MA',
        status: 'in_transit',
        description: 'Package picked up'
      },
      {
        id: 'evt17',
        timestamp: '2025-06-12T11:20:00',
        location: 'Cincinnati, OH',
        status: 'in_transit',
        description: 'Arrived at sort facility'
      },
      {
        id: 'evt18',
        timestamp: '2025-06-13T08:45:00',
        location: 'Cincinnati, OH',
        status: 'exception',
        description: 'Delivery exception - Address incomplete'
      }
    ]
  }
];
