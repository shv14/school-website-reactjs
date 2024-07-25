import React from 'react';
import backgroundImage from '../images/background.jpg';

function AboutUs() {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto p-4 relative z-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">About Us</h1>
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="mb-4">
            Our school was founded in 1980 with the vision of providing quality education to students in our community. Over the years, we have grown and evolved, adapting to the changing educational landscape while maintaining our commitment to excellence.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4 text-black">
            We strive to create a learning environment where students are encouraged to reach their full potential. Our vision is to develop well-rounded individuals who are prepared for the challenges of the future.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4 text-black">
            Our mission is to provide a high-quality education that nurtures academic achievement, critical thinking, and personal growth. We are dedicated to fostering a supportive and inclusive community where every student is valued and respected.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Message from the Principal</h2>
          <p className="mb-4 text-black">
            Welcome to our school! I am honored to lead such a dedicated team of educators and support staff who are committed to providing the best possible education for our students. We believe that education is the key to unlocking potential and creating opportunities, and we are proud to play a part in our students' journeys.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Infrastructure</h2>
          <p className="mb-4 text-black">
            Our school boasts state-of-the-art facilities, including modern classrooms, science labs, a library, sports facilities, and more. We are continually investing in our infrastructure to ensure that our students have access to the best resources and learning environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
