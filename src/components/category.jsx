import React from 'react'

import { FaArrowRight } from 'react-icons/fa'

import livingroom from '../assets/living room.jfif'
import bedroom from '../assets/bedroom.jfif'
import dining from '../assets/dinig.jfif'
import office from '../assets/office.jfif'

export default function Category() {
    const categories = [
        {
            name: "Living Room",
            items: 243,
            image: livingroom
        },
        {
            name: "Bedroom",
            items: 189,
            image: bedroom
        },
        {
            name: "Dining",
            items: 156,
            image: dining
        },
        {
            name: "Office",
            items: 98,
            image: office
        }
    ]
    return (
        <section className='w-[95%] mx-auto my-10 '>
            <h1 className='text-4xl '>Shop by Category</h1>
            <p className='text-gray-600 text-sm'>Find the perfect pieces for every room</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 '>
                {categories.map((category, index) => (
                    <a href='/products' key={index} className=' group relative overflow-hidden rounded-lg aspect-3/4 block cursor-pointer'>
                        <img src={category.image} alt={category.name} className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl mb-1">{category.name}</h3>
                            <p className="text-sm text-white/80 mb-3">{category. items} items</p>
                            <span className="inline-flex items-center text-sm group-hover:gap-2 transition-all">
                            Explore
                            <FaArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
