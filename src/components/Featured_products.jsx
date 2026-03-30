import {useState ,useEffect} from 'react'

import { get_data } from '../api/api'

export default function Products() {
    
    const [data,setdata] = useState([])
    useEffect(()=>{
        const fetchdata = async () => {
            const res = await get_data();
            setdata(res)
        }
        fetchdata()
    })

    return (
        <section className='w-[95%] mx-auto my-10 '>
            <div className='text-center my-5'>
                <h1 className='text-4xl '>Featured Products</h1>
                <p className='text-gray-600 text-sm'>Carefully curated pieces that combine exceptional design with lasting quality</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 '>
                {data.map((product, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer'>
                        <img src={`/image/${product.image}`} alt={product.name} className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105' />
                        <div className='p-4 z-30'>
                            <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
                            <p className='text-gray-700 font-bold'>$ {product.price}</p>
                            <a href={`/product/${product.id}`} className='text-blue-500 hover:text-blue-700'>View Details</a>
                        </div>
                    </div>  
                ))}
            </div>
        </section>
    )
}
