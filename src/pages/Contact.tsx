import { Mail, MapPin } from 'lucide-react';
import Layout from '../components/common/Layout';
import logo from '../img/logo.png'

const Contact = () => {
  return (
    <Layout withPadding={true}>
         <div className='max-w-5xl mx-auto p-2 text-justify'>
            <h1 className='text-4xl text-center font-bold mb-2'>About</h1>
            <span className='text-6xl uppercase text-center font-bold mb-6 flex gap-3 justify-center mx-auto'>
                <span className='text-blue-500 text-center'>Ship</span> <span className= 'text-center text-purple-700'>Swift</span>
            </span>
            <p className='mb-3'>
            At ShipSwift, we’re redefining fast, reliable shipping from the heart of England. Based in Coventry, we specialize in streamlined logistics, secure handling, and timely delivery—whether across the country or around the globe.
            </p>
            <p>
            Our mission is simple: Deliver with speed. Handle with care. Support with integrity.
            With a passionate team and a commitment to excellence, ShipSwift is more than just a courier—we’re your trusted shipping partner.
            </p>

            <div className='mt-8'>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">
                      123 Web Avenue, Suite 456<br />
                      Conventry, CA 94105<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:hello@insightblog.com" className="text-blue-600 hover:underline">
                        shipswift@proton.me
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      We aim to respond within 24 - 48 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/WhatsApp_Logo_green.svg/1200px-WhatsApp_Logo_green.svg.png' className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+14155550123" className="text-blue-600 hover:underline">
                       +4 47737419085
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Mon-Sat, 8:00 AM - 10:00 PM PST
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                <p className="text-gray-600 mb-4">
                  Stay connected with us on social media for the latest updates and content.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <img src={logo} width={300} className='mt-4 mb-4 rounded-full mx-auto' />
         </div>
    </Layout>
  )
}

export default Contact
