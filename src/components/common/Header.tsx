import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, XCircleIcon } from 'lucide-react';
import logo from '../../img/logo.png'
import LoginModal from './LoginModal';
import { account } from '../../AppwriteConfig';
import { toast } from 'react-toastify';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])
  
  const Signout = async () => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    toast.error('Logout failed:', error.message);
  }
  window.location.reload();
 };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} width={50} className='rounded-full' />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-700 hover:text-teal-600 font-medium transition duration-150">
              Dashboard
            </Link>
            <Link to="/track" className="text-slate-700 hover:text-teal-600 font-medium transition duration-150">
              Track Package
            </Link>
            {
              userData && (
            <Link to="/history" className="text-slate-700 hover:text-teal-600 font-medium transition duration-150">
              Shipment History
            </Link> 
              )
            }
            <Link to="/contact" className="text-slate-700 hover:text-teal-600 font-medium transition duration-150">
              Contact
            </Link>
              { userData ? (
                <>
                <span className='flex text-blue-700 gap-2 text-md font-bold px-2 py-1'> 
                  <h1>
                    {userData?.name}
                  </h1>
                  <XCircleIcon onClick={Signout} color='red' size={25} className='cursor-pointer' />
                </span>
                  <Link to="/add-shipping" className="">
                   <button className='px-2 py-1 text-white rounded-md bg-blue-600 hover:text-teal-600 font-medium transition duration-150 cursor-pointer'>
                     Add Shipping
                   </button>
                  </Link>
                </>
               ) : (
              <span
                onClick={() => setShowModal(true)}
                className="text-blue-800 hover:text-teal-600 font-medium transition duration-150 cursor-pointer"
              >
                Login
              </span>
              )}
          </nav>

            <LoginModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-teal-600 hover:bg-slate-100 rounded-full transition duration-150"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-slate-200 mt-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="px-2 py-1 text-slate-700 hover:text-teal-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/track" 
                className="px-2 py-1 text-slate-700 hover:text-teal-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Track Package
              </Link>
              {
              userData && (
            <Link to="/history" className="text-slate-700 hover:text-teal-600 font-medium transition duration-150">
              Shipment History
            </Link> 
              )
            }
              <Link to="/contact" className="px-2 py-1 text-slate-700 hover:text-teal-600 font-medium transition duration-150">
                Contact
              </Link>
              { userData ? (
                <>
                <span className='flex text-blue-700 gap-2 text-md font-bold px-2 py-1'> 
                  <h1>
                    {userData?.name}
                  </h1>
                  <XCircleIcon onClick={Signout} color='red' size={25} className='cursor-pointer' />
                </span>
                  <Link to="/add-shipping" className="px-2 ">
                   <button className='px-2 py-1 text-white rounded-md bg-blue-600 hover:text-teal-600 font-medium transition duration-150 cursor-pointer'>
                     Add Shipping
                   </button>
                  </Link>
                </>
               ) : (
                <span
                onClick={() => setShowModal(true)}
                className="px-2 py-1 text-blue-800 hover:text-teal-600 font-medium transition duration-150 cursor-pointer"
              >
                Login
              </span>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;