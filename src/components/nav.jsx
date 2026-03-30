import React from "react";
import {useState} from 'react'
import '@fortawesome/react-fontawesome'
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa'


export default function Nav() {
    const [open, setOpen] = useState(false)


    return (
        <nav className=" sticky top-0 z-50 bg-white shadow-sm py-2">
            <div className="w-[95%] mx-auto">
                <div className="flex gap-5  my-3 align-baseline">
            <div className="flex gap-2 items-center">
                <h1 className="text-2xl font-medium">FURNISH</h1>
            </div>

            <div className="md:flex hidden gap-5 w-full items-center justify-center pt-1">
            <div className="flex gap-5 text-md items-center">
                <a href="/" className="text-md  hover:text-gray-400">
                    Home
                </a>
                <a href="/about" className="text-md  hover:text-gray-400">
                    About Us
                </a>
                <a href="/services" className="text-md  hover:text-gray-400">
                    Services
                </a>
        
                <a href="/products" className="text-md  hover:text-gray-400">
                    Products
                </a>
                <a href="/contact-us" className="text-md  hover:text-gray-400">
                    Contact Us
                </a>
            </div>
            <div className="flex gap-5 ms-auto items-center">
                
            </div>
            </div>
            

            <div className="ms-auto flex gap-2 items-center">
                <a href="/signup" className=" hover:bg-gray-200 cursor-pointer p-1 rounded-md">
                    <FaUser />
                </a>
                <a href="/carts" className=" hover:bg-gray-200 cursor-pointer p-1 rounded-md ms-auto">
                    <FaShoppingCart />
                </a>
            
            <button
                className=" md:hidden cursor-pointer text-xl "
                onClick={() => setOpen(!open)}
            >
                {open ? "X" : <FaBars />}
            </button>
            </div>
        </div>
        <div>
            <div
            className={`md:hidden  w-full bg-gray-100 flex flex-col px-3 transition-all duration-1000 ease-in-out overflow-hidden gap-5 py-5 ${open ? "flex opacity-100" : "hidden opacity-0"}`}
            >
            <a href="/" className="text-md  hover:text-gray-400">
                Home
            </a>
            <a href="#" className="text-md  hover:text-gray-400">
                About Us
            </a>
            <a href="#" className="text-md  hover:text-gray-400">
                Services
            </a>
            <a href="/products" className="text-md  hover:text-gray-400">
                Products
            </a>
            <a href="#" className="text-md  hover:text-gray-400">
                Contact Us
            </a>
            </div>
        </div>
                
                
                
            </div>
        </nav>
    );
}
