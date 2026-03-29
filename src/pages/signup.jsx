import { useState } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { signup } from '../api/api';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if (!email || !password) {
        alert('Please enter email and password');
        return;
        }

        
        const result = await signup(email, password);
        console.log(result);
    };

return (
    <div className='bg-gray-200 '>
        <Nav />
        <div className='flex justify-center items-center content-center '>
            <div className='bg-white mt-10 p-7 rounded-2xl shadow-2xs'>
            <div className='my-4'>
                <h1 className='text-2xl'>Create Account</h1>
                <p className='text-sm text-gray-500'>Sign up to start shopping with us</p>
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
                    placeholder='Create a password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>

                <div className='flex gap-2 my-2'>
                    <input type="checkbox" id="terms" required />
                    <label className='text-gray-500 text-sm' htmlFor="terms">
                    I agree to the <span className='text-black'>Terms of Service</span> and <span className='text-black'>Privacy Policy</span>
                    </label>
                </div>

                <button type="submit" className='bg-gray-950 text-white p-2 rounded-lg hover:bg-gray-900'>
                    Create Account
                </button>

                <div className='text-sm text-center space-x-1'>
                    <span className='text-gray-500'>Already have an account?</span>
                    <a href="/signin">Sign in</a>
                </div>
                </form>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}