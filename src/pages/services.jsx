import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'

import { FiTruck } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";
import { TfiReload } from "react-icons/tfi";
import { IoShieldOutline } from "react-icons/io5";


export default function Services() {

    const curds = [
        {
            icon:<FiTruck />,
            head: 'Free Shipping',
            desc: 'Get free shipping on all orders over $50. Express delivery available for urgent orders'
        },{
            icon:< IoShieldOutline/>,
            head: 'Secure Shopping',
            desc: 'Shop with confidence knowing your personal and payment information is protected.'
        },{
            icon:<FiHeadphones />,
            head: '24/7 Support',
            desc: 'Our dedicated support team is here to help you anytime, anywhere.'
        },{
            icon:<TfiReload />,
            head: 'Easy Returns',
            desc: 'Not satisfied? Return any item within 30 days for a full refund.'
        }
    ];
    
    const values = [
        {
            id:1,
            name: 'Browse & Select',
            desc: 'Explore our collection and add items to your cart.'
        },{
            id:2,
            name: 'Checkout',
            desc: 'Complete your purchase with our secure checkout.'
        },{
            id:3,
            name: 'Receive & Enjoy',
            desc: 'Get your items delivered and enjoy your purchase!'
        }
    ]

    return (
        <div>
            <Nav />
            <div>
                <header className='hero-serv flex justify-center p-4 flex-col gap-5 '>
                    <div className='w-[95%] mx-auto'>
                        <h1 className='text-3xl font-semibold'>Our Services</h1>
                        <p className='text-sm text-gray-200'>We're committed to providing you with the best shopping experience</p>
                    </div>
                </header>
                <div className='bg-gray-100'>
                <div className='w-[85%] mx-auto '>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6  py-15'>
                            {curds.map((curd,index)=>(
                            <div className="bg-white text-center flex flex-col items-center justify-center space-y-4 py-5 rounded-xl p-3 w-[70%]" key={index} >
                                <div className='rounded-4xl bg-gray-100 p-3 text-2xl'>{curd.icon}</div>
                                <h1 className='text-2xl'>{curd.head}</h1>
                                <p className=' text-gray-500'>{curd.desc}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <div>
                    
                    <div className='my-10 py-10 w-[95%] mx-auto text-center space-y-16'>
                        <h1 className='text-3xl font-semibold'>How It Works</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-center text-center gap-6 '>
                            {values.map((value,index)=>(
                                <div key={index} className='space-y-3'>
                                    <div className='bg-gray-950 text-white p-3 w-[10%] rounded-3xl mx-auto'>{value.id}</div>
                                    <h1 className='text-2xl'>{value.name}</h1>
                                    <p className='text-sm text-gray-500'>{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
