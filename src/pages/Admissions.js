import React from 'react';
import backgroundImage from '../images/admissions.jpg';

function Admissions() {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto p-4 relative z-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Admissions</h1>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          <p className="mb-4">
            Welcome to our admissions page! We are thrilled that you are considering joining our school community. Our admission process is designed to be straightforward and transparent, ensuring a smooth experience for both students and parents.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Steps to Apply</h2>
          <ol className="list-decimal ml-6 mb-4">
            <li className="mb-2">
              <strong>Application Form:</strong> Download and fill out the admission form available on our website.
            </li>
            <li className="mb-2">
              <strong>Submit Documents:</strong> Submit the completed application form along with the required documents to the admissions office.
            </li>
            <li className="mb-2">
              <strong>Entrance Test:</strong> Eligible candidates will be notified about the date and time of the entrance test.
            </li>
            <li className="mb-2">
              <strong>Interview:</strong> Shortlisted candidates will be invited for an interview with the admissions committee.
            </li>
            <li className="mb-2">
              <strong>Final Decision:</strong> Successful applicants will receive an offer letter from the school.
            </li>
          </ol>
          <h2 className="text-2xl font-semibold mb-4">Important Dates</h2>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Application Deadline:</strong> August 15, 2024</li>
            <li className="mb-2"><strong>Entrance Test:</strong> August 30, 2024</li>
            <li className="mb-2"><strong>Interview Dates:</strong> August 10-15, 2024</li>
            <li className="mb-2"><strong>Final Decision Notification:</strong> August 20, 2024</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            For any queries regarding admissions, please contact our admissions office:
          </p>
          <p className="mb-4">
            <strong>Email:</strong> thomass@thomaseduction.edu
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> (123) 456-7892
          </p>
          <h2 className="text-2xl font-semibold mb-4">Download Admission Form</h2>
          <p className="mb-4">
            <a href="/admission-form.pdf" download className="text-indigo-600 hover:underline">
              Click here to download the admission form
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
