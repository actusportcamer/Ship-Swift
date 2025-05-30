import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/common/Layout';
import TrackingSearch from '../components/common/TrackingSearch';
import TrackingTimeline from '../components/tracking/TrackingTimeline';
import TrackingMap from '../components/tracking/TrackingMap';
import StatusBadge from '../components/common/StatusBadge';
import { statusMap } from '../data/mockData';
import { databases } from '../AppwriteConfig';
import { formatDate, getDeliveryStatusMessage } from '../utils/dateUtils';
import { Calendar, Package, MapPin, Truck, Info, Star, Clock, AlertTriangle } from 'lucide-react';
import { Query } from 'appwrite';

const TrackingPage: React.FC = () => {
  const { trackingId } = useParams<{ trackingId: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    const fetchPackage = async () => {
      if (!trackingId) return;
      
      try {
        const response = await databases.listDocuments(
          '6838e548000bf42beb49',
          '6838e5540021f3ef8ad2',
          [Query.equal('trackingNumber', trackingId)]
        );

        if (response.documents.length === 0) {
          console.log('No package found with this tracking number.');
          return;
        }

        setPackageData(response.documents[0]);
      } catch (error) {
        console.error('Error fetching package:', error);
      }
    };

    fetchPackage();
  }, [trackingId]);

  // If no tracking ID is provided, show the tracking form
  if (!trackingId) {
    return (
      <Layout>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Track Your Package
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <p className="text-slate-600 mb-4">
                Enter your tracking number to get real-time updates and detailed information about your shipment.
              </p>
              <TrackingSearch large={true} placeholder="Enter tracking number" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  // If package not found
  if (!packageData) {
    return (
      <Layout>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="text-center py-8">
                <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Package Not Found
                </h2>
                <p className="text-slate-600 mb-6">
                  We couldn't find any package with tracking number <span className="font-mono font-medium">{trackingId}</span>. Please check the tracking number and try again.
                </p>
                <TrackingSearch placeholder="Enter tracking number" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Render package details
  const status = statusMap[packageData.status];
  
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-3 space-x-3">
                  <StatusBadge status={packageData.status} size="lg" />
                  <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-1.5 rounded-full transition duration-150 ${
                      isFavorite 
                        ? 'bg-amber-100 text-amber-600 hover:bg-amber-200' 
                        : 'bg-slate-100 text-slate-400 hover:text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Star className="h-5 w-5" fill={isFavorite ? 'currentColor' : 'none'} />
                  </button>
                </div>
                
                <h1 className="text-2xl font-bold text-slate-800 mb-1">
                  {packageData.description || `Package #${packageData.trackingNumber}`}
                </h1>
                
                <div className="flex items-center text-sm text-slate-500 mb-2">
                  <span className="font-medium">{packageData.carrier}</span>
                  <span className="mx-2">•</span>
                  <span>{packageData.service}</span>
                  <span className="mx-2">•</span>
                  <span className="font-mono">{packageData.trackingNumber}</span>
                </div>
              </div>
              
              <div className="hidden sm:block">
                <TrackingSearch />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Package Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Progress */}
            <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">
                Delivery Progress
              </h2>
              
              <div className="space-y-6">
                {/* Status Card */}
                <div className={`rounded-lg p-4 ${status.color.replace('bg-', 'bg-opacity-10 bg-')}`}>
                  <div className="flex items-start">
                    {packageData.status === 'delivered' ? (
                      <div className="rounded-full bg-green-100 p-2 mr-3">
                        <Package className="h-6 w-6 text-green-600" />
                      </div>
                    ) : (
                      <div className="rounded-full bg-white bg-opacity-90 p-2 mr-3">
                        <Clock className="h-6 w-6 text-slate-600" />
                      </div>
                    )}
                    
                    <div>
                      <h3 className={`font-medium text-lg ${status.color.replace('bg-', 'text-').replace('-500', '-700').replace('-400', '-600')}`}>
                        {status.description}
                      </h3>
                      <p className="text-slate-600 mt-1">
                        {packageData.status === 'delivered' 
                          ? 'Your package has been delivered.' 
                          : getDeliveryStatusMessage(packageData.estimatedDelivery)}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-slate-600">
                    <span>Shipped</span>
                    <span>In Transit</span>
                    <span>Out for Delivery</span>
                    <span>Delivered</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${status.color}`}
                      style={{ 
                        width: packageData.status === 'pending' ? '5%' :
                               packageData.status === 'in_transit' ? '40%' :
                               packageData.status === 'out_for_delivery' ? '75%' :
                               packageData.status === 'delivered' ? '100%' : '25%'
                      }}
                    />
                  </div>
                </div>
                
                {/* Delivery Date */}
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-slate-400 mr-2" />
                  <div>
                    <div className="text-sm text-slate-600">
                      {packageData.status === 'delivered' 
                        ? 'Delivered on:' 
                        : 'Estimated Delivery:'}
                    </div>
                    <div className="font-medium text-slate-800">
                      {formatDate(packageData.estimatedDelivery)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Package Location */}
            <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
              <h2 className="text-lg font-semibold text-slate-800 p-4 border-b border-slate-200">
                Package Location
              </h2>
              <div className="p-4">
                {packageData.currentLocation ? (
                  <TrackingMap 
                    location={packageData.currentLocation} 
                    origin={packageData.origin}
                    destination={packageData.destination}
                  />
                ) : (
                  <div className="bg-slate-100 rounded-lg p-4 text-center text-slate-500">
                    Location data not available
                  </div>
                )}
              </div>
            </div>
            
            {/* Shipment Details */}
            <div className="bg-white rounded-lg shadow-md border border-slate-200">
              <h2 className="text-lg font-semibold text-slate-800 p-4 border-b border-slate-200">
                Shipment Details
              </h2>
              <div className="p-4">
                <dl className="space-y-4">
                  <div className="flex items-start">
                    <dt className="w-28 flex-shrink-0 flex items-center text-slate-500 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      Origin:
                    </dt>
                    <dd className="text-slate-800 text-sm font-medium">
                      {packageData.origin}
                    </dd>
                  </div>
                  
                  <div className="flex items-start">
                    <dt className="w-28 flex-shrink-0 flex items-center text-slate-500 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      Destination:
                    </dt>
                    <dd className="text-slate-800 text-sm font-medium">
                      {packageData.destination}
                    </dd>
                  </div>
                  
                  <div className="flex items-start">
                    <dt className="w-28 flex-shrink-0 flex items-center text-slate-500 text-sm">
                      <Truck className="h-4 w-4 mr-2" />
                      Service:
                    </dt>
                    <dd className="text-slate-800 text-sm font-medium">
                      {packageData.service}
                    </dd>
                  </div>
                  
                  {packageData.weight && (
                    <div className="flex items-start">
                      <dt className="w-28 flex-shrink-0 flex items-center text-slate-500 text-sm">
                        <Package className="h-4 w-4 mr-2" />
                        Weight:
                      </dt>
                      <dd className="text-slate-800 text-sm font-medium">
                        {packageData.weight}
                      </dd>
                    </div>
                  )}
                  
                  <div className="flex items-start">
                    <dt className="w-28 flex-shrink-0 flex items-center text-slate-500 text-sm">
                      <Info className="h-4 w-4 mr-2" />
                      Status:
                    </dt>
                    <dd className="text-slate-800 text-sm font-medium">
                      <StatusBadge status={packageData.status} />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            
            {/* Need Help Card */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-4">
              <h3 className="font-medium text-slate-800 mb-2">Need Help?</h3>
              <p className="text-sm text-slate-600 mb-3">
                Having issues with your delivery or need more information?
              </p>
              <div className="space-y-2">
                <a 
                  href="/contact" 
                  className="block text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  Contact Support
                </a>
                <a 
                  href="/faq" 
                  className="block text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  View FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrackingPage;