import React from 'react'

import livingroom from '../assets/living room.jfif'
import bedroom from '../assets/bedroom.jfif'
import dining from '../assets/dinig.jfif'
import office from '../assets/office.jfif'
import hero from '../assets/hero.jfif'
import chair from '../assets/chair.jfif'
import diningchair from '../assets/dining-chair.jfif'
import table from '../assets/table.jfif'

export default function Products() {
    const products = [
        {
            name: "Modern Grey Sofa",
            price: "$1,299",
            image: livingroom
        },
        {
            name: "Scandinavian Dining Chair",
            price: "$249",
            image: diningchair
        },
        {
            name: "Minimalist Coffee Table",
            price: "$599",
            image: table
        },
        {
            name: "Ergonomic Office Chair",
            price: "$399",
            image: chair
        },
        {
            name: "Luxury Bedroom Set",
            price: "$2,499",
            image: bedroom
        },
        {
            name: "Contemporary Dining Table",
            price: "$1,099",
            image: dining
        },
        {
            name: "Executive Desk",
            price: "$899",
            image: office
        },
        {
            name: "Modern Living Room Set",
            price: "$3,299",
            image: hero
        }
    ]
    return (
        <section className='w-[95%] mx-auto my-10 '>
            <div className='text-center my-5'>
                <h1 className='text-4xl '>Featured Products</h1>
                <p className='text-gray-600 text-sm'>Carefully curated pieces that combine exceptional design with lasting quality</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 '>
                {products.map((product, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer'>
                        <img src={product.image} alt={product.name} className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105' />
                        <div className='p-4 z-30'>
                            <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
                            <p className='text-gray-700 font-bold'>{product.price}</p>
                            <a href="#" className='text-blue-500 hover:text-blue-700'>View Details</a>
                        </div>
                    </div>  
                ))}
            </div>
        </section>
    )
}
