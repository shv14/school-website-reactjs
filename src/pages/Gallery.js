import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

function Gallery() {
  return (
    <div className="container mx-auto p-4">
      <section>
        <h2 className="text-3xl font-bold mb-4 flex justify-center">Gallery</h2>
        <p className="text-lg mb-8 flex justify-center">Photo and video gallery showcasing school events, activities, and infrastructure.</p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="gallery-item bg-gray-100 p-4 rounded-lg hover:cursor-pointer">
          <img src={img1} alt="img1" className="w-full h-full"/>
        </div>
        <div className="gallery-item bg-gray-100 p-4 rounded-lg hover:cursor-pointer">
          <img src={img2} alt="img2" className="w-full h-full"/>
        </div>
        <div className="gallery-item bg-gray-100 p-4 rounded-lg hover:cursor-pointer">
          <img src={img3} alt="img3" className="w-full h-full"/>
        </div>
        <div className="gallery-item bg-gray-100 p-4 rounded-lg hover:cursor-pointer">
          <img src={img4} alt="img4" className="w-full h-full"/>
        </div>
        <div className="gallery-item bg-gray-100 p-4 rounded-lg hover:cursor-pointer">
          <img src={img5} alt="img5" className="w-full h-full"/>
        </div>
        <div className="gallery-item bg-gray-100 p-4 rounded-lg hover:cursor-pointer">
          <img src={img6} alt="img6" className="w-full h-full"/>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
