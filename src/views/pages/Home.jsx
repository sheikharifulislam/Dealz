import React from 'react';
import Categories from '../components/home/categories/Categories';
import Products from '../components/home/products/Products';
import ReviewTestimonial from '../components/home/review testimonial/ReviewTestimonial';
import HeaderSlider from '../components/home/slider/HeaderSlider';
import SuperDeals from '../components/home/super deals/SuperDeals';

const Home = () => {
    return (
        <div className="bg-zinc-100">
            <HeaderSlider />
            <Categories />
            <SuperDeals />
            <Products />
            <ReviewTestimonial />
        </div>
    );
};

export default Home;
