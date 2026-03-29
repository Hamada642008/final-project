import React from 'react'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Category from '../components/category'
import Products from '../components/Featured_products'
import Footer from '../components/footer'

export default function Home() {
    return (
        <>
            <Nav />
            <div className='bg-gray-100 pb-5 mb-5 rounded-md'>
                <Hero />
                <Category />
            </div>
            <Products />
            <Footer />
        </>
    )
}
