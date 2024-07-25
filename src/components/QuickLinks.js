import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className="flex justify-around ">
      <div className="py-10">
        <Link to="/about-us" className="text-blue-500 hover:text-sky-700 ">About Us</Link>
      </div>
      <div className="py-10">
        <Link to="/academics" className="text-blue-500 hover:text-sky-700 ">Academics</Link>
      </div>
      <div className="py-10">
        <Link to="/admissions" className="text-blue-500 hover:text-sky-700 ">Admissions</Link>
      </div>
      <div className="py-10">
        <Link to="/contact-us" className="text-blue-500 hover:text-sky-700 ">Contact Us</Link>
      </div>
    </div>
  );
};

export default QuickLinks;
