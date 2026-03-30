import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function About() {
    const curds = [{
        numbers: '10+',
        description:'Years in Business'
    },{
        numbers: '50K+',
        description:'Happy Customers'
    },{
        numbers: '1M+',
        description:'Products Sold'
    },{
        numbers: '25+',
        description:'Countries Served'
    }
    ];
    const values = [
        {
            head: 'Quality First',
            description: 'We carefully curate our product selection to ensure only the highest quality items.'
        },{
            head: 'Customer Focus',
            description: 'Our customers are at the heart of everything we do. We strive to provide exceptional service.'
        },{
            head: 'Sustainability',
            description: 'Committed to eco-friendly practices and partnering with sustainable brands.'
        }
    ]
    return (
        <div>
            <Nav />
            <header className='hero-about flex justify-center p-4 flex-col gap-5 '>
                <div className='w-[95%] mx-auto'>
                    <h1 className='text-3xl font-semibold'>About Us</h1>
                    <p className='text-sm text-gray-200'>Crafting beautiful spaces with premium furniture since 2016</p>
                </div>
            </header>
            <div className='w-[85%] mx-auto my-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5'>
                    {curds.map((curd,index)=>(
                        <div key={index}>
                            <h1 className='text-3xl'>{curd.numbers}</h1>
                            <p className='text-sm text-gray-600'>{curd.description}</p>
                        </div>
                    ))}
                </div>
                
            </div>
            <div className='py-20 my-10 bg-gray-100 '>
                <div className='w-[65%] mx-auto space-y-6'>
                    <h1 className='text-3xl font-semibold text-center'>our Story</h1>
                    <p className='text-gray-600'>
                        Founded in 2016, FURNISH started with a simple mission: make quality furniture accessible to everyone. What began as a small startup has grown into a trusted e-commerce platform serving customers across 25 countries.

                        We believe that everyone deserves a beautiful home. That's why we've built our platform with user-friendly features, secure payment options, and a carefully curated selection of products from trusted brands.

                        Today, we're proud to serve over 50,000 happy customers and continue to grow our product catalog with items that meet our strict quality standards. Our team works tirelessly to ensure every customer receives the best possible service.
                    </p>
                </div>
            </div>
            <div className='my-10 py-10 w-[95%] mx-auto text-center space-y-8'>
                <h1 className='text-3xl font-semibold'>Our Values</h1>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-between text-center gap-6 mt-5'>
                    {values.map((value,index)=>(
                        <div key={index}>
                            <h1 className='text-2xl'>{value.head}</h1>
                            <p className='text-sm text-gray-500'>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
