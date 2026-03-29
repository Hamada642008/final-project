import React from 'react'
import {useState,useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { get_data_id } from '../api/api'
import { add_to_cart } from '../api/api'

import Nav from '../components/nav'
import Footer from '../components/footer'
import Notfound from './notfound'


export default function Details() {

    const [count,setcount] = useState(1);
    const navigate = useNavigate()

    const {id} = useParams();
    // USE null because the data is object
    const [data, setdata] = useState(null);

    useEffect( ()=>{
        const fetchdata = async()=>{
            const data_id =  await get_data_id(id);
            setdata(data_id);
        }
        fetchdata();
    },[id])

    if (!data) return <Notfound/>
    const features = data.features.split("•").filter(item => item.trim() !== "")||[];

    
    
    return (
        
        <>
            <Nav/>
            <div className='w-[95%] mx-auto my-9 py-3 '>
                <div className='lg:flex gap-12'>
                    <div className=' bg-gray-200 rounded-lg overflow-hidden aspect-square'>
                        <img className=' rounded-xl object-cover h-full w-full' src={`../../public/image/${data.image}`}  alt="" />
                    </div>


                    <div className='shadow-2xl h-lvh p-9 rounded-md bg-white'>
                        <div className='text-3xl my-2 space-y-3'>
                            <h1 className='font-bold'>{data.name}</h1>
                            <p>$ {data.price}</p>
                        </div>

                        <p className='text-gray-700 text-md my-7'>{data.description}</p>

                        <h1 className='text-xl font-bold'>Features:</h1>
                        <ul className="my-4 mb-5 space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">                       
                                <span className="text-gray-500">• {feature}</span>
                            </li>
                        ))}
                        </ul> 
                        <h1 className='text-md font-bold'>Quantity:</h1>
                        <div className='flex gap-12 items-center my-3'>
                            <button onClick={()=>{setcount(count+1)}} className='border px-4 rounded-md py-1 text-2xl font-extralight hover:bg-gray-100 border-gray-300'>+</button>
                            <p>{count}</p>
                            <button onClick={()=>{setcount(count-1)}} disabled={count == 0 } className='border px-4 rounded-md py-1 text-2xl hover:bg-gray-100 border-gray-300'>-</button>
                        </div>
                        <button onClick={async ()=>{ 
                            try{
                                await add_to_cart(data.id, count);
                                navigate('/carts');

                            }catch{
                                alert('Faild to add cart');
                            }
                            }} className='text-2xl bg-gray-950 hover:bg-gray-800 text-white p-3  rounded-lg w-full '>Add to cart</button>
                    </div>
                </div>

                
                
            </div>
            <Footer/>
        </>
    )
}
