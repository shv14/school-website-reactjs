import React from 'react';
import { Link } from 'react-router-dom';
import schoolLogo from '../images/school.jpg';

function Header() {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center rounded-full">
          <img src={schoolLogo} alt="School Logo" className="h-10 w-10 mr-3 rounded-full" />
        </div>
        <nav>
          <Link to="/" className="px-3">Home</Link>
          <Link to="/about-us" className="px-3">About Us</Link>
          <Link to="/academics" className="px-3">Academics</Link>
          <Link to="/admissions" className="px-3">Admissions</Link>
          <Link to="/faculty" className="px-3">Faculty</Link>
          <Link to="/students" className="px-3">Students</Link>
          <Link to="/gallery" className="px-3">Gallery</Link>
          <Link to="/contact-us" className="px-3">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
