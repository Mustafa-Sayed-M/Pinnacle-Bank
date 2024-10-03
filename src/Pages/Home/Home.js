import React from 'react';
import Landing from '../../Components/Home_C/Landing/Landing';
import OurProducts from '../../Components/Home_C/OurProducts/OurProducts';
import UseCases from '../../Components/Home_C/UseCases/UseCases';
import Testimonials from '../../Components/Home_C/Testimonials/Testimonials';
import Faq from '../../Components/Shared_C/FAQ/Faq';
import PopupStartAccount from '../../Components/Shared_C/PopupStartAccount';
import OurFeatures from '../../Components/Home_C/OurFeatures/OurFeatures';

function Home() {
    return (
        <div className='home-page'>
            {/* Landing */}
            <Landing />
            {/* Our Products */}
            <OurProducts />
            {/* Use Cases */}
            <UseCases />
            {/* Our Features */}
            <OurFeatures />
            {/* FAQ */}
            <Faq />
            {/* Testimonials */}
            <Testimonials />
            {/* Popup Start Account */}
            <PopupStartAccount />
        </div>
    )
}

export default Home;