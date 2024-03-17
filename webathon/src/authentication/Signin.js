/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import axios from 'axios';
import "./Entry.css";


const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email   || !formData.password ) {
      alert('Please enter both email and password.');
      return;
    }
    else
    {
      try {
            const res = await axios.post('http://localhost:5000/signin', formData);
            console.log(res.data);
           
             window.location.href='./home';

      } catch (error) {
        console.error('Error signing in:', error);
        alert('Failed to sign in');
      }
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>
      
        <h1>Sign in</h1>

       
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <div className='boo'>
        <button type="submit">Sign In</button>
        </div>
        
        

        
      </form>
    </div>
  );
};

export default Signin;
