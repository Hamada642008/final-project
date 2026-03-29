import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Checkout() {
    const total = localStorage.getItem('total')
    return (
        <div className='bg-gray-100 min-h-screen'>
            <Nav />
            <div className='w-[95%] max-w-6xl mx-auto my-10'>
                <h1 className='text-3xl font-bold text-gray-800 mb-8'>Checkout</h1>
                
                <div className='lg:flex gap-10 items-start'>
                    
                    <div className='flex-1 space-y-8'>
                        
                        <form id='check' className='bg-white p-6 rounded-2xl shadow-lg space-y-6'>
                            <h2 className='text-xl font-semibold text-gray-700'>Shipping Information</h2>
                            <div className='grid lg:grid-cols-2 gap-4'>
                                <div className='flex flex-col'>
                                    <label htmlFor="first_name" className='mb-1 text-gray-600'>First Name</label>
                                    <input type="text" name="first_name" placeholder='John' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="last_name" className='mb-1 text-gray-600'>Last Name</label>
                                    <input type="text" name="last_name" placeholder='Doe' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required/>
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="email" className='mb-1 text-gray-600'>Email</label>
                                <input type="email" name="email" placeholder='john.doe@example.com' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required/>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="street" className='mb-1 text-gray-600'>Street Address</label>
                                <input type="text" name="street" placeholder='123 Main Street' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required/>
                            </div>

                            <div className='grid lg:grid-cols-3 gap-4'>
                                <div className='flex flex-col'>
                                    <label htmlFor="city" className='mb-1 text-gray-600'>City</label>
                                    <input type="text" placeholder='New York' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="state" className='mb-1 text-gray-600'>State</label>
                                    <input type="text" placeholder='NY' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="zipcode" className='mb-1 text-gray-600'>Zip Code</label>
                                    <input type="text" placeholder='10001' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required/>
                                </div>
                            </div>
                        </form>

                        
                        <form id='checkcard' className='bg-white p-6 rounded-2xl shadow-lg space-y-6'>
                            <h2 className='text-xl font-semibold text-gray-700'>Payment Method</h2>
                            <div className='grid gap-4'>
                                <div className='flex flex-col'>
                                    <label htmlFor="card_number" className='mb-1 text-gray-600'>Card Number</label>
                                    <input type="text" placeholder='1234 5678 9012 3456' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="cardholder" className='mb-1 text-gray-600'>Cardholder Name</label>
                                    <input type="text" placeholder='John Doe' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required />
                                </div>
                                <div className='grid lg:grid-cols-2 gap-4'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="expiry" className='mb-1 text-gray-600'>Expiry Date</label>
                                        <input type="text" placeholder='MM/YY' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="cvv" className='mb-1 text-gray-600'>CVV</label>
                                        <input type="text" placeholder='123' className='border border-gray-300 p-3 rounded-lg   outline-none bg-gray-50' required />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    
                    <div className='bg-white p-6 space-y-6 w-full lg:w-96 rounded-2xl shadow-lg sticky top-20'>
                        <h2 className='text-2xl font-semibold text-gray-800'>Order Summary</h2>
                        <div className='flex justify-between text-gray-600'>
                            <span>Subtotal</span>
                            <span>$ {total}</span>
                        </div>
                        <div className='flex justify-between text-gray-600'>
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <hr className='border-gray-300' />
                        <div className='flex justify-between font-bold text-gray-800 text-lg'>
                            <span>Total</span>
                            <span>$ {total}</span>
                        </div>
                        <button onClick={()=>{
                            const check = document.getElementById('check');
                            const checkcard = document.getElementById('checkcard');
                            if (check.checkValidity() && checkcard.checkValidity()) {
                            alert('Done ✔');
                            } else {
                                check.reportValidity();
                                checkcard.reportValidity();
                            } 
                        }} type='submit' className='bg-green-500 hover:bg-green-600 text-white font-semibold w-full py-3 rounded-lg transition-all'>Place Order</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}