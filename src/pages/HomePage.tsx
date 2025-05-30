import React from 'react';
import Layout from '../components/common/Layout';
import TrackingSearch from '../components/common/TrackingSearch';
import PackageCard from '../components/tracking/PackageCard';
import { Package, Truck, Bell, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {

  return (
    <Layout withPadding={false}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Track Your Packages in Real-Time
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Get real-time updates and detailed information for all your shipments in one place.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-slate-800 text-xl font-semibold mb-4">
                Track Your Shipment
              </h2>
              <TrackingSearch large={true} placeholder="Enter product tracking number" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12">
            Powerful Shipping Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <div className="rounded-full bg-teal-100 w-14 h-14 flex items-center justify-center mb-4">
                <Package className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Real-Time Tracking</h3>
              <p className="text-slate-600">
                Monitor your packages in real-time with accurate location updates and detailed status information.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <div className="rounded-full bg-amber-100 w-14 h-14 flex items-center justify-center mb-4">
                <Bell className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Smart Notifications</h3>
              <p className="text-slate-600">
                Receive timely alerts for package updates, delivery exceptions, and successful deliveries.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center mb-4">
                <Truck className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Multi-Carrier Support</h3>
              <p className="text-slate-600">
                Track packages from multiple carriers in one unified dashboard with consistent information.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <div className="rounded-full bg-indigo-100 w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Delivery Estimates</h3>
              <p className="text-slate-600">
                Get accurate delivery time windows and know exactly when your packages will arrive.
              </p>
            </div>
          </div>
        </div>
      </div>


        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800">
                Recent Shipments
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PackageCard />
            </div>
          </div>
        </div>
      {/* CTA Section */}
      <div className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Track Your Packages?
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Sign up for free and start tracking all your shipments in one place with real-time updates and notifications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to='/track'
              className="px-6 py-3 bg-teal-700 text-white font-medium rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 transition duration-150"
            >
              Track a Package
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;