import React from 'react';
import backgroundImage from '../images/background.jpg';

function Academics() {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto p-4 relative z-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Academics</h1>
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
          <p className="mb-4 text-black">
            Our school offers a comprehensive curriculum that caters to the educational needs of students at different levels. We provide a balanced education that includes core subjects, electives, and extracurricular activities to ensure the all-round development of our students.
          </p>
          <h3 className="text-xl font-semibold mb-2">Primary Level</h3>
          <p className="mb-4 text-black">
            At the primary level, we focus on foundational skills in literacy, numeracy, and critical thinking. Our curriculum includes subjects like Mathematics, English, Science, Social Studies, and Physical Education.
          </p>
          <h3 className="text-xl font-semibold mb-2">Secondary Level</h3>
          <p className="mb-4 text-black">
            The secondary level builds on the primary foundation and introduces more specialized subjects. Students study subjects such as Advanced Mathematics, Literature, History, Geography, Biology, Chemistry, Physics, and Information Technology.
          </p>
          <h3 className="text-xl font-semibold mb-2">Senior Secondary Level</h3>
          <p className="mb-4 text-black">
            At the senior secondary level, students have the option to choose their streams based on their interests and career aspirations. We offer Science, Commerce, and Arts streams with a wide range of subjects to prepare students for higher education and professional courses.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Teaching Methodologies</h2>
          <p className="mb-4 text-black">
            Our teaching methodologies are student-centered and focus on active learning. We use a blend of traditional and modern teaching techniques, including lectures, interactive sessions, group discussions, projects, and hands-on experiments. Our goal is to make learning engaging and effective.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
          <p className="mb-4 text-black">
            We provide a wealth of educational resources to support student learning. Our library is stocked with a vast collection of books, journals, and digital resources. We also have well-equipped laboratories, computer labs, and access to online learning platforms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Academics;

