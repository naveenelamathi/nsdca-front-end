import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import SignupPage from './Signup';
import Online from "./Online";
import Banner from './banner';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
     

        <Routes>
         
          <Route path="/" element={<Banner />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/online-verification" element={<Online/>} />
     
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


