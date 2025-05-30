import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { account } from '../../AppwriteConfig';

const LoginModal = ({ isOpen, onClose }) => {

  const [user, setUser] = useState({
    email: "",
    password: ""
})

  const handleLogin = async (e) => {
  e.preventDefault()

  try {
    await account.createEmailPasswordSession(user.email, user.password);
    window.location.reload();

    } catch (error) {
      console.log(error)
      toast.error("Login Failed..........")
    }
  }

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
        <ToastContainer />
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
            placeholder='Email' 
            id='email'
            name='email'
            onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value
                })
              }}
            required
          />

          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
            placeholder="Password"
            id='password'
            name='password'
            onChange={(e) => {
                    setUser({
                      ...user,
                      password: e.target.value
                    })
                  }}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-gray-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default LoginModal;