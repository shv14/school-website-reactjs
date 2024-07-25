import React from 'react';
import bannerBackground from '../images/background.jpg'; 

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center h-64 mb-4 flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerBackground})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h2 className="text-3xl font-bold">Explore Our Programs</h2>
        <p className="text-lg mt-2">Discover the diverse programs we offer to help you achieve your academic goals.</p>
      </div>
    </section>
  );
}

export default Banner;
