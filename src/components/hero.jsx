import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FaArrowRight } from 'react-icons/fa'
import '../App.css'

export default function Hero() {
    return (
        <header className='hero flex justify-center p-4 flex-col gap-5 '>
            <h1 className='text-5xl'>Transform Your Space</h1>
            <p className='text-2xl md:w-1/2'>Discover premium furniture that combines style, comfort, and quality craftsmanship</p>
            <a href='/products' className='bg-white text-sm text-black w-40 p-2 rounded-md hover:bg-gray-100 flex items-center gap-2'>Shop Collection <span><FaArrowRight /></span></a>
        </header>
    )
}
