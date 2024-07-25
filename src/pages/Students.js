import React from 'react';
import backgroundImage from '../images/studentbackground.jpeg';

function Students() {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto p-4 relative z-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Students</h1>
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Student Life</h2>
          <p className="mb-4">
            At our school, student life is vibrant and diverse. We offer a variety of extracurricular activities, clubs, and societies that cater to a wide range of interests. Whether you're passionate about sports, arts, science, or technology, there's something for everyone.
          </p>
          <p className="mb-4">
            Our students have achieved numerous accolades in various fields, showcasing their talent and dedication. The student council plays an active role in organizing events and representing student interests, providing leadership opportunities and fostering a sense of community.
          </p>
        </div>
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Student Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="studentId">Student ID</label>
              <input
                type="text"
                id="studentId"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-3 py-2 bg-black text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Students;


