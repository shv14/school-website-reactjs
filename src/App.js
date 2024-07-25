// // import './App.css';
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Home from './pages/Home';
// // import AboutUs from './pages/AboutUs';
// // import Academics from './pages/Academics';
// // import Admissions from './pages/Admissions';
// // import Faculty from './pages/Faculty';
// // import Students from './pages/Students';
// // import Gallery from './pages/Gallery';
// // import ContactUs from './pages/ContactUs';

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //           <Route exact path="/" element={Home} />
// //           <Route exact path="/about-us" element={AboutUs} />
// //           <Route exact path="/academics" element={Academics} />
// //           <Route exact path="/admissions" element={Admissions} />
// //           <Route exact path="/faculty" element={Faculty} />
// //           <Route exact path="/students" element={Students} />
// //           <Route exact path="/gallery" element={Gallery} />
// //           <Route exact path="/contact-us" element={ContactUs} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Academics from './pages/Academics';
// import Admissions from './pages/Admissions';
// import Faculty from './pages/Faculty';
// import Students from './pages/Students';
// import Gallery from './pages/Gallery';
// import ContactUs from './pages/ContactUs';
// import Header from './components/Header';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <main>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/about-us" element={<AboutUs />} />
//             <Route exact path="/academics" element={<Academics />} />
//             <Route exact path="/admissions" element={<Admissions />} />
//             <Route exact path="/faculty" element={<Faculty />} />
//             <Route exact path="/students" element={<Students />} />
//             <Route exact path="/gallery" element={<Gallery />} />
//             <Route exact path="/contact-us" element={<ContactUs />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/academics" element={<Academics />} />
            <Route exact path="/admissions" element={<Admissions />} />
            <Route exact path="/faculty" element={<Faculty />} />
            <Route exact path="/students" element={<Students />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
