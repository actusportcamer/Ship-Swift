import { useState } from 'react';
import Layout from '../components/common/Layout';
import { Package } from 'lucide-react';
import { databases } from '../AppwriteConfig';
import { ID } from 'appwrite'
import { toast, ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';

const AddShipmentPage = () => {


  const [trackingNumber, setTrackingNumber] = useState(`TRK-${nanoid(10)}`);
  const [carrier, setCarrier] = useState('');
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [status, setStatus] = useState('');
  const [statusDescription, setStatusDescription] = useState('');
  const [estimatedDelivery, setEstimatedDelivery] = useState('');
  const [weight, setWeight] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [isDelivered] = useState(false);
  const [isFavorite] = useState(false);

  const shipmentData = {
    trackingNumber,
    carrier,
    service,
    description,
    origin,
    destination,
    status,
    status_description: statusDescription,
    estimatedDelivery,
    weight,
    isDelivered,
    isFavorite,
    currentLocation
  };

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const result = await databases.createDocument(
          '6838e548000bf42beb49', 
          '6838e5540021f3ef8ad2',
          ID.unique(), 
          shipmentData
        );
        if (result) {
          toast.success('Shipment created successfully');
        } else {
          toast.error('Failed to create shipment');
        }
      } catch(error) {
        console.log(error)
      }
  };

  return (
    <Layout>
      <ToastContainer />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <Package className="h-6 w-6 text-teal-600" />
                <h1 className="text-2xl font-bold text-slate-800">Add New Shipment</h1>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Shipment Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Tracking Number
                  </label>
                  <input
                    type="text"
                    value={trackingNumber} 
                    onChange={e => setTrackingNumber(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Carrier
                  </label>
                  <input
                    type="text"
                    value={carrier} 
                    onChange={e => setCarrier(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Service Type
                  </label>
                  <input
                    type="text"
                    value={service} 
                    onChange={e => setService(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Origin
                  </label>
                  <input
                    type="text"
                    value={origin} 
                    onChange={e => setOrigin(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Destination
                  </label>
                  <input
                    type="text"
                    value={destination} 
                    onChange={e => setDestination(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Estimated Delivery
                  </label>
                  <input
                    type="datetime-local"
                    value={estimatedDelivery} 
                    onChange={e => setEstimatedDelivery(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Current Location
                  </label>
                  <input
                    type="text"
                    value={currentLocation} 
                    onChange={e => setCurrentLocation(e.target.value)}
                    required
                    placeholder='B.C Watford'
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Weight
                  </label>
                  <input
                    type="text"
                    value={weight} 
                    onChange={e => setWeight(e.target.value)}
                    required
                    placeholder="e.g., 2.5 lbs"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                    required
                  >   
                    <option value=''>Select Status</option>
                    <option value='pending' >pending</option>
                    <option value='in_transit' >in_transit</option>
                    <option value='out_for_delivery' >out_for_delivery</option>
                    <option value='delivered'>delivered</option>
                    <option value='exception'>exception</option>
                    <option value='returned'>returned</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Status Description
                  </label>
                  <input
                    type="text"
                    value={statusDescription} 
                    onChange={e => setStatusDescription(e.target.value)}
                    required
                    placeholder="Arrived at local facility"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <button
                   type='submit'
                  className="w-full sm:w-auto px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Create Shipment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddShipmentPage;