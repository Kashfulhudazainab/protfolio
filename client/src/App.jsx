import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';

// Page Imports
import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Testimonials from './pages/Testimonials';
// import Contact from './pages/Contact';

function App() {
  // role is 'guest' by default. No login required for them.
 // const [role, setRole] = useState('guest'); 

  return (
    // <Router>
    //   {/* Pass role to Layout so Navbar knows what to show */}
    //   <Layout role={role}>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/testimonials" element={<Testimonials />} />
    //       <Route path="/contact" element={<Contact />} />
          
    //       {/* Secret route for you to "log in" and change role to admin */}
    //       <Route path="/admin-access" element={
    //          <div className="p-20 text-center bg-[var(--bg-main)]">
    //            <button 
    //              onClick={() => setRole('admin')}
    //              className="bg-[var(--text-heading)] text-white p-4 rounded"
    //            >
    //              Enable Admin Mode
    //            </button>
    //          </div>
    //       } />
    //     </Routes>
    //   </Layout>
    // </Router>
<Home/>
  );
}

export default App;