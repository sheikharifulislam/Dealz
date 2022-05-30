import React from 'react'
import Categories from '../components/home/categories/Categories'
import Products from '../components/home/products/Products'
import ReviewTestimonial from '../components/home/review testimonial/ReviewTestimonial'
import HeaderSlider from '../components/home/slider/HeaderSlider'

const Home = () => {
    return (
        <>
            <HeaderSlider />
            <Categories />
            <Products />
            <ReviewTestimonial />
        </>
    )
}

export default Home
