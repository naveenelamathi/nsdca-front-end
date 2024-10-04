// import React, { useState } from 'react';
// import './online.css'; 

// const Online = () => {
//   const [aadhaar, setAadhaar] = useState('');
//   const [verificationResult, setVerificationResult] = useState('');
  
//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Replace with your API endpoint and request method
//     const apiUrl = 'https://your-api-endpoint.com/verify-aadhaar'; 
//     const requestData = {
//       aadhaarNumber: aadhaar
//     };

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestData)
//       });
      
//       const result = await response.json();
//       if (response.ok) {
//         setVerificationResult(`Verification successful: ${result.message}`);
//       } else {
//         setVerificationResult(`Verification failed: ${result.error}`);
//       }
//     } catch (error) {
//       setVerificationResult(`An error occurred: ${error.message}`);
//     }
//   };

//   return (
//     <div className="verification-container">
//       <h1>Online Verification</h1>
//       <div className="verification-box">
//         <h2>Certificate Verification</h2>
//         <form className="verification-form" onSubmit={handleSubmit}>
//           <label htmlFor="certificateId">Serial / Aadhar / Register No</label>
//           <input
//             type="text"
//             id="certificateId"
//             placeholder="Enter Serial / Aadhar / Register No"
//             value={aadhaar}
//             onChange={(e) => setAadhaar(e.target.value)}
//           />
//           <button type="submit" className="submit-button">Verify</button>
//         </form>
//         {verificationResult && <div className="result">{verificationResult}</div>}
//       </div>
//       <div className="verification-box">
//         <h2>Student Enrollment Verification</h2>
//         {/* This section can be similarly updated */}
//         <form className="verification-form">
//           <label htmlFor="studentId">Student Register No / Enrollment No</label>
//           <input
//             type="text"
//             id="studentId"
//             placeholder="Enter Student Register No / Enrollment No"
//             value={aadhaar}
//             onChange={(e) => setAadhaar(e.target.value)}
//           />
//           <button type="submit" className="submit-button">Verify</button>
//         </form>
//         {verificationResult && <div className="result">{verificationResult}</div>}
//       </div>
//     </div>
//   );
// };

// export default Online;

import React, { useState } from 'react';
import './online.css'; 

const Online = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [studentId, setStudentId] = useState('');
  const [verificationResult, setVerificationResult] = useState('');
  
  // Handle Aadhaar verification form submission
  const handleAadhaarSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = 'http://localhost:3000/verify'; // Update this URL

    const requestData = { aadhar: aadhaar }; // Create the request body

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      
      const result = await response.json();
      if (response.ok) {
        setVerificationResult(`Verification successful: ${result.message}`);
      } else {
        setVerificationResult(`Verification failed: ${result.message}`);
      }
    } catch (error) {
      setVerificationResult(`An error occurred: ${error.message}`);
    }
  };

  // Handle Student Enrollment verification form submission
  const handleStudentIdSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = 'http://localhost:3000/verification'; // Update this URL

    const requestData = { student: studentId }; // Create the request body

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      
      const result = await response.json();
      if (response.ok) {
        setVerificationResult(`Enrollment verification successful: ${result.message}`);
      } else {
        setVerificationResult(`Enrollment verification failed: ${result.message}`);
      }
    } catch (error) {
      setVerificationResult(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="verification-container">
      <h1>Online Verification</h1>

      <div className="verification-box">
        <h2>Certificate Verification</h2>
        <form className="verification-form" onSubmit={handleAadhaarSubmit}>
          <label htmlFor="certificateId">Serial / Aadhar / Register No</label>
          <input
            type="text"
            id="certificateId"
            placeholder="Enter Serial / Aadhar / Register No"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Verify</button>
        </form>
      </div>

      <div className="verification-box">
        <h2>Student Enrollment Verification</h2>
        <form className="verification-form" onSubmit={handleStudentIdSubmit}>
          <label htmlFor="studentId">Student Register No / Enrollment No</label>
          <input
            type="text"
            id="studentId"
            placeholder="Enter Student Register No / Enrollment No"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Verify</button>
        </form>
      </div>

      {verificationResult && <div className="result">{verificationResult}</div>}
    </div>
  );
};

export default Online;
