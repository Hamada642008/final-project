import React from 'react'
import emailjs from 'emailjs-com';
import Nav from '../components/nav'
import Footer from '../components/footer'

import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbClockHour2 } from "react-icons/tb";

export default function Contact() {
        const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
        'service_k6krksc',
        'template_mw01ait',
        e.target,
        'sies1BU2u4Uunp23u'
        )
        .then(() => {
        alert("Message sent ✅");
        })
        .catch(() => {
        alert("Error ❌");
        });
    };

    const curds = [
        {
            icon : <IoLocationOutline/>,
            name: 'Address',
            desc: '123 Commerce Street, New York, NY 10013'
        },
        {
            icon : <FaPhone />,
            name: 'Phone',
            desc: '+1 (555) 123-4567'
        },
        {
            icon : <MdOutlineMailOutline />,
            name: 'Email',
            desc: 'support@furnish.com'
        },
        {
            icon : <TbClockHour2 />,
            name: 'Business Hours',
            desc: 'Mon - Fri: 9AM - 6PM EST'
        }
    ]

    return (
        <div>
            <Nav />
            <header className='hero-contact flex justify-center p-4 flex-col gap-5 '>
                <div className='w-[95%] mx-auto space-y-6'>
                    <h1 className='text-4xl font-semibold'>Get in Touch</h1>
                    <p className='text-sm text-gray-200'>Have a question or need assistance? We're here to help.</p>
                </div>
            </header>
            <div className='bg-gray-100'>
                <div className='w-[85%] mx-auto '>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  py-15'>
                        {curds.map((curd,index)=>(
                        <div className="bg-white text-center flex flex-col items-center justify-center space-y-2 py-5 rounded-xl " key={index} >
                            <div className='rounded-4xl bg-gray-100 p-3 text-2xl'>{curd.icon}</div>
                            <h1 className='text-2xl'>{curd.name}</h1>
                            <p className='text-sm text-gray-500'>{curd.desc}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <form onSubmit={sendEmail} className='shadow-2xl flex flex-col space-y-4 w-[70%] mx-auto py-10 rounded-2xl'>
                    <h1 className='text-center text-2xl font-semibold mb-6 '>Send Us a Message</h1>
                    <div className='w-[80%] mx-auto space-y-6'>
                        
                        <div className='grid gap-2'>
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="from_name" placeholder="Name" required className='bg-gray-100 p-2 outline-none rounded-lg'/>
                        </div>
                        <div className='grid gap-2'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="from_email" placeholder="Email" required className='bg-gray-100 p-2 outline-none rounded-lg'/>
                        </div>
                        <div className='grid gap-2'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" placeholder="Message" required className='bg-gray-100 p-2 outline-none rounded-lg'/>
                        </div>
                        <button type="submit" className='text-center bg-gray-950 hover:bg-gray-900 w-full p-2 text-white rounded-lg'>Send</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
