import React, { useState, useEffect } from 'react';
import carouselImage1 from '../images/carousel1.jpg'; 
import carouselImage2 from '../images/carousel2.jpg';
import carouselImage3 from '../images/carousel3.jpg';

const images = [carouselImage1, carouselImage2, carouselImage3]; 

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="carousel-container relative w-full h-64 sm:h-80 lg:h-96"
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 opacity-30"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full mt-4">
        <h2 className="text-black text-xl sm:text-2xl lg:text-3xl font-bold">
          Welcome to Our School
        </h2>
      </div>
    </div>
  );
}

export default Carousel;
