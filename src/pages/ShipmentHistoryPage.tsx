import React, { useEffect, useState } from 'react';
import Layout from '../components/common/Layout'
import { databases } from '../AppwriteConfig';
import { Package as PackageIcon, Check, Truck, Clock, AlertTriangle, Search } from 'lucide-react';
import { TrackingStatus } from '../types';
import ShipCard from '../components/tracking/Shipcard';
import { account } from '../AppwriteConfig';

const ShipmentHistoryPage: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<TrackingStatus['code'] | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const [userData, setUserData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])

  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchPackage = async () => {
      
      try {
        const response = await databases.listDocuments(
          '6838e548000bf42beb49',
          '6838e5540021f3ef8ad2'
        );

        if (response.documents.length === 0) {
          console.log('No package found with this tracking number.');
          return;
        }

        setData(response.documents);
      } catch (error) {
        console.error('Error fetching package:', error);
      }
    };

    fetchPackage();
  }, []);
  
  // Filter packages based on status and search term
  const filteredPackages = Data.filter(pkg => {
    const matchesStatus = statusFilter === 'all' || pkg.status === statusFilter;
    const matchesSearch = searchTerm === '' || 
      
      pkg.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.carrier.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });
  
  const getStatusCount = (status: TrackingStatus['code']) => {
    return Data.filter(pkg => pkg.status === status).length;
  };

  return (
    <>
    {
      userData ? (
        
        <Layout>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-2xl font-bold text-slate-800 mb-4 md:mb-0">
                Shipment History
              </h1>
              
              {/* Search */}
              <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border border-slate-300 text-slate-800 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Search by tracking #, carrier..."
                />
              </div>
            </div>
            
            {/* Status Filter */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              <button
                onClick={() => setStatusFilter('all')}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${
                  statusFilter === 'all' 
                    ? 'bg-slate-100 border-slate-300 text-slate-800' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <PackageIcon className="h-6 w-6 mb-1" />
                <span className="text-sm font-medium">All</span>
                <span className="text-xs mt-1">{Data.length}</span>
              </button>
              
              <button
                onClick={() => setStatusFilter('in_transit')}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${
                  statusFilter === 'in_transit' 
                    ? 'bg-blue-50 border-blue-200 text-blue-700' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Truck className="h-6 w-6 mb-1" />
                <span className="text-sm font-medium">In Transit</span>
                <span className="text-xs mt-1">{getStatusCount('in_transit')}</span>
              </button>
              
              <button
                onClick={() => setStatusFilter('out_for_delivery')}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${
                  statusFilter === 'out_for_delivery' 
                    ? 'bg-teal-50 border-teal-200 text-teal-700' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <PackageIcon className="h-6 w-6 mb-1" />
                <span className="text-sm font-medium">Out for Delivery</span>
                <span className="text-xs mt-1">{getStatusCount('out_for_delivery')}</span>
              </button>
              
              <button
                onClick={() => setStatusFilter('delivered')}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${
                  statusFilter === 'delivered' 
                    ? 'bg-green-50 border-green-200 text-green-700' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Check className="h-6 w-6 mb-1" />
                <span className="text-sm font-medium">Delivered</span>
                <span className="text-xs mt-1">{getStatusCount('delivered')}</span>
              </button>
              
              <button
                onClick={() => setStatusFilter('pending')}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${
                  statusFilter === 'pending' 
                    ? 'bg-slate-100 border-slate-300 text-slate-700' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Clock className="h-6 w-6 mb-1" />
                <span className="text-sm font-medium">Pending</span>
                <span className="text-xs mt-1">{getStatusCount('pending')}</span>
              </button>
              
              <button
                onClick={() => setStatusFilter('exception')}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${
                  statusFilter === 'exception' 
                    ? 'bg-red-50 border-red-200 text-red-700' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <AlertTriangle className="h-6 w-6 mb-1" />
                <span className="text-sm font-medium">Exceptions</span>
                <span className="text-xs mt-1">{getStatusCount('exception')}</span>
              </button>
            </div>
            
            {/* Packages List */}
            {filteredPackages.length === 0 ? (
              <div className="bg-white rounded-lg border border-slate-200 p-8 text-center">
                <PackageIcon className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-2">No packages found</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                  {searchTerm
                    ? `No packages match your search for "${searchTerm}". Try a different search term.`
                    : 'You have no packages with this status. Change the filter to see other packages.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredPackages.map(pkg => (
                  <ShipCard key={pkg.id} packageData={pkg} />
                ))}
              </div>
            )}
          </div>
        </Layout>

      ) : (
        <div className='flex flex-col sm:flex-row gap-3 justify-center items-center min-h-screen'>
        <img src='https://img.freepik.com/vecteurs-libre/robot-vectoriel-graident-ai_78370-4114.jpg?semt=ais_hybrid&w=740' alt="" className='w-80'/>
        <h1 className='text-2xl font-bold'>Access Denied</h1>
      </div>
      )
    }
    </>
  );
};

export default ShipmentHistoryPage;