import React from 'react'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-white py-5 mt-10 '>
            <div className='w-[95%] mx-auto '>
                <div className='text-center'>
                    <h1 className='text-2xl'>Stay in the Loop</h1>
                    <p className='text-gray-400 text-sm'>Subscribe to our newsletter for exclusive offers and design inspiration</p>
                    <div className='flex justify-center mt-3 gap-3'>
                        <input type="email" placeholder='Enter your email' className='px-4 py-2 rounded-md focus:outline-none  border border-gray-600 text-white bg-gray-800' />
                        <button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer'>Subscribe</button>
                    </div>
                </div>
                <div className='border border-y-2 border-x-0 border-gray-700 my-5 py-4 '>
                    <div className='flex justify-center flex-col  gap-3 items-center'>
                        
                            <h1>FURNISH</h1>
                            <p className='text-sm text-gray-400 '>Premium furniture for modern living. Quality craftsmanship meets contemporary design.</p>
                            <div className='flex gap-1'>
                                <a href="#" className=' mx-2'><FaFacebookF /></a>
                                <a href="#" className=' mx-2'><FaTwitter /></a>
                                <a href="#" className=' mx-2'><FaInstagram /></a>
                                <a href="#" className=' mx-2'><FaYoutube /></a>
                            </div>
                        
                        
                    </div>
                </div>
                <div className='text-center mt-5 flex '>
                    <p className='text-gray-400 text-sm'>&copy; 2026 Furniture Store. All rights reserved.</p>
                    <div className='ms-auto text-sm'>
                        <a href="#" className='text-gray-400 text-sm hover:text-white transition-colors mx-2'>Privacy Policy</a>
                        <a href="#" className='text-gray-400 text-sm hover:text-white transition-colors mx-2'>Terms of Service</a>
                        <a href="#" className='text-gray-400 text-sm hover:text-white transition-colors mx-2'>Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
