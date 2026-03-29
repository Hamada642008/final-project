import React, { useState } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { login } from '../api/api'; 

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    const result = await login(email, password);

    if (result?.token) {
      localStorage.setItem('token', result.token); 
      alert('Logged in successfully!');
      
      window.location.href = '/welcome';
    }
  };

return (
    <div className='bg-gray-200 '>
        <Nav />
        <div className='flex justify-center items-center content-center '>
            <div className='bg-white mt-10 p-7 rounded-2xl shadow-2xs'>
            <div className='my-4'>
                <h1 className='text-2xl'>Welcome Back</h1>
                <p className='text-sm text-gray-500'>Sign in to your account to continue</p>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input
                    className='bg-gray-200 rounded-md p-2 outline-none'
                    type="email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input
                    className='bg-gray-200 rounded-md p-2 outline-none'
                    type="password"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>

                <button type="submit" className='bg-gray-950 text-white p-2 rounded-lg hover:bg-gray-900'>
                    Sign in
                </button>
                </form>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}