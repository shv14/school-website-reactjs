import React from 'react';
import backgroundImage from '../images/background.jpg';

function ContactUs() {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto p-4 relative z-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white bg-opacity-50 p-6 rounded-lg shadow-lg">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Address: </h2>
            <p>St. Thomas of Somewhere</p>
            <p>Pune, Maharashtra, 221001</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Email</h2>
            <p>thomas@thomaseduction.edu</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Numbers</h2>
            <p>Phone: (123) 456-7890</p>
            <p>Fax: (123) 456-7891</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-3 py-2 bg-black text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
