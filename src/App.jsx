


import React from 'react';
import { Link } from 'react-router-dom';import './App.css';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import Student from './Components/Student';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {

  return (
    <Router>
      <div>
        <nav className="bg-blue-900 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex space-x-4">
            
              <li>
                <Link to="/" className="text-2xl font-serif">Home</Link>
              </li>
              <li>
                <Link to="/student" className="text-2xl font-serif">Student</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-2xl font-serif">Contact Us</Link>
              </li>

            </ul>
          
          </div>
        </nav>
       
     <button >ADD STUDENT</button>
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/contact-us" element={<ContactUs />} />
        
        </Routes>
      </div>
    </Router>
  );
}


export default App;