// src/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; 
// 
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle login logic here
    //     console.log('Username:', username);
    //     console.log('Password:', password);
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email: username, // Adjust this to match your backend (e.g., username or email)
                password: password,
            });
    
            console.log('Login successful:', response.data);
            // Handle successful login (e.g., redirect or save user data)
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
            // Optionally show error to the user
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                    <button type="submit" className='button'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
