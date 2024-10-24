// // src/SignupPage.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './signup.css'; // Import CSS file for styling

// const SignupPage = () => {
//     const [userType, setUserType] = useState('');
//     const [district, setDistrict] = useState('');
//     const [name, setName] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

  
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }
    
//         try {
//              const response = await axios.post('https://nsdca-node.onrender.com/sign', {
//                 userType,
//                 district,
//                 name,
//                 mobile,
//                 email,
//                 password,
//             });
//             console.log('User signed up successfully:', response.data);
//         } catch (error) {
//             console.error('Error signing up:', error);
//             alert('Signup failed! Please try again.');
//         }
//     };

//     return (
//         <div className="signup-container">
//             <div className="signup-box">
//                 <h2>Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="input-group">
//                         <label htmlFor="userType">User Type</label>
//                         <select
//                             id="userType"
//                             value={userType}
//                             onChange={(e) => setUserType(e.target.value)}
//                             required
//                         >
//                             <option value="" disabled>Select User Type</option>
//                             <option value="student">Student</option>
//                             <option value="teacher">Teacher</option>
//                             <option value="admin">Admin</option>
//                         </select>
//                         <label htmlFor="district">District</label>
//                         <select
//                             id="district"
//                             value={district}
//                             onChange={(e) => setDistrict(e.target.value)}
//                             required
//                         >
//                             <option value="" disabled>Select District</option>
//                             <option value="villupuram">villupuram</option>
//                             <option value="thiruvannamali">text</option>
//                             <option value="Tindivanam">Tindivanam</option>
//                         </select>
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="name">Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="mobile">Mobile Number</label>
//                         <input
//                             type="tel"
//                             id="mobile"
//                             value={mobile}
//                             onChange={(e) => setMobile(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="confirmPassword">Confirm Password</label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit">Sign Up</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignupPage;

import React, { useState } from 'react';
import './signup.css'; // Import CSS file for styling

const SignupPage = () => {
    const [userType, setUserType] = useState('');
    const [district, setDistrict] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const url = 'https://nsdca-node.onrender.com/sign'; // Make sure this URL is correct

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userType,
                    district,
                    name,
                    mobile,
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('User signed up successfully:', data);
            alert('Signup successful!');

        } catch (error) {
            console.error('Error signing up:', error);
            alert('Signup failed! Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="userType">User Type</label>
                        <select
                            id="userType"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select User Type</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="admin">Admin</option>
                        </select>
                        <label htmlFor="district">District</label>
                        <select
                            id="district"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select District</option>
                            <option value="villupuram">Villupuram</option>
                            <option value="thiruvannamali">Thiruvannamalai</option>
                            <option value="Tindivanam">Tindivanam</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
