import {useState, useEffect} from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'

import {get_cart} from '../api/api'
import { remove_from_cart } from '../api/api'

import {RiDeleteBin6Line} from 'react-icons/ri'

export default function Carts() {
    const [cart,setcart] = useState([])
    const [total,settotal] = useState(0)

    localStorage.setItem('total',total)

    useEffect(  ()=>{
        const fetchCart = async () => {
        const data = await get_cart();
        setcart(data);
    };
    fetchCart();

    },[])

    useEffect(() => {
        const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        settotal(subtotal);
    }, [cart])
    return (
        <div className='bg-gray-200'>
            <Nav />
            <div className='w-[95%] mx-auto my-10'>
                <h1 className='text-3xl font-semibold'>Shopping Cart</h1>
                <div className='lg:flex gap-12 my-10'>
                    <div>
                        {cart.length === 0 ? (
                            <p>No items yet</p>
                        ) : (
                            cart.map(item => (
                                <div key={item.product_id} className="lg:flex gap-4 my-4 bg-white p-3 rounded-lg">
                                    <img src={`/image/${item.image}`} alt={item.name} className=" h-96 w-full object-cover" />
                                    <div>
                                        <h2 className="font-semibold">{item.name}</h2>
                                        <p>{item.price} EGP</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <button 
                                            className="text-gray-500 mt-2 cursor-pointer"
                                            onClick={async () => {
                                                await remove_from_cart(item.product_id);
                                                setcart(cart.filter(c => c.product_id !== item.product_id)); // تحديث الـ state
                                            }}
                                        >
                                            <RiDeleteBin6Line/> 
                                        </button>
                                    </div>
                                </div>
                                
                            ))
                        )}
                    </div>
                    <div className='bg-white p-4 space-y-4 h-full sticky top-60 rounded-2xl shadow-2xs'>
                        <h1 className='text-2xl font-semibold'>Order Summary</h1>
                        <div className='flex justify-between'>
                            <p className='text-gray-500'>Subtotal</p>
                            <p>$ {total}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-gray-500'>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr className='border border-gray-500' />
                        <div className='flex justify-between'>
                            <p>Total</p>
                            <p>$ {total}</p>
                        </div>
                        <a href="/checkout" className='bg-gray-950 hover:bg-gray-900 block text-white text-center p-3 rounded-lg'>Proceed to checkout</a>
                        <a href="/products" className='border border-gray-500 text-gray-900 p-3 rounded-lg block text-center'>Continue Shopping</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
