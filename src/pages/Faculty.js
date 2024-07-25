import React from 'react';
import teacher1 from '../images/t1.jpg';
import teacher2 from '../images/t2.jpg';
import teacher3 from '../images/t3.jpg';

function Faculty() {
  return (
    <div className="relative bg-cover bg-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Faculty</h1>
        <p className="text-center mb-8">
          Our teachers are dedicated to providing the best education and support to our students. They are experts in their respective fields and are always ready to help students achieve their academic goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={teacher1} alt="Teacher 1" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Madam Joe</h2>
              <p className="text-gray-700">Mathematics</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={teacher2} alt="Teacher 2" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Pallavi Srivastava</h2>
              <p className="text-gray-700">History</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={teacher3} alt="Teacher 3" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Albert Einstein</h2>
              <p className="text-gray-700">Science</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">How Our Teachers Help Students</h2>
          <p className="mb-4">
            Our teachers are not only educators but also mentors who guide students through their academic journey. They provide personalized attention, additional resources, and extra support to ensure that every student can succeed. Whether it's through after-school tutoring, one-on-one sessions, or extra practice materials, our teachers go above and beyond to help students excel.
          </p>
          <p>
            They also foster a positive learning environment by encouraging questions, promoting critical thinking, and creating engaging lessons that make learning enjoyable. Our teachers are always available to provide advice, support, and encouragement, helping students to overcome challenges and achieve their full potential.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faculty;

