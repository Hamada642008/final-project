import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import { get_data } from '../api/api'
import Nav from '../components/nav'
import Footer from '../components/footer'



export default function Products() {

    const navigate = useNavigate();

    const [data,setdata] = useState([])
    useEffect(()=>{
        const fetchdata = async () => {
            const res = await get_data();
            setdata(res)
        }
        fetchdata()
    })

    const [category, setCategory] = useState([])

    const handlechange = (e) => {
        const value = e.target.value;
        if (category.includes(value)) {
            setCategory(category.filter((item) => item !== value))
        } else {
            setCategory([...category, value])
        }
    }

    const filteredProducts = data.filter((product) => {
        if (category.length === 0) return true
        return category.includes(product.category)
    })
    return (

        <div className='bg-gray-100'>
            <Nav/>
                <div className='my-9 w-[95%] mx-auto py-5 '>
                    <header className=''>
                        <h1 className='text-3xl'>All Products</h1>
                        <p className='text-gray-500 text-md'>Showing 8 results</p>
                    </header>
                    <section className='flex gap-5 py-5'>
                        <aside className='shadow-2xs bg-white p-6 rounded-md h-full w-2xs sticky top-64'>
                            <h1 className='text-2xl my-3'>Filters</h1>
                            <div className='py-3'>
                                <p className='pt-2 pb-1'>Categories</p>
                                <div>
                                    <div className='flex gap-1'>
                                        <input type="checkbox" name="" id="" value={'living'}  onChange={handlechange}/>
                                        <p>Living Room</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <input type="checkbox" name="" id="" value={'bedroom'} onChange={handlechange}/>
                                        <p>BedRoom</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <input type="checkbox" name="" id="" value={'dining'} onChange={handlechange}/>
                                        <p>Dining</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <input type="checkbox" name="" id="" value={'office'} onChange={handlechange}/>
                                        <p>Office</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </aside>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  '>
                            {filteredProducts.map((product, index) => (
                                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer'>
                                    <img src={`image/${product.image}`} alt={product.name} className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105' />
                                    <div className='p-4 z-30'>
                                        <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
                                        <p className='text-gray-700 font-bold'>{product.price}</p>
                                        
                                        <button onClick={()=>{navigate(`/product/${product.id}`)}} className='text-blue-500 cursor-pointer hover:text-blue-700'>View Details</button>
                                    </div>
                                </div>  
                            ))}
                        </div>
                    </section>
                </div>
            <Footer/>
        </div>
    )
}
