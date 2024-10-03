import React from 'react';
import { useSelector } from 'react-redux';
import SectionHeadText from '../../Shared_C/SectionHeadText';
import { APP_NAME } from '../../../Utils/constants';
import ProductCard from './Components/ProductCard';

function OurProducts() {

    const { ourProducts } = useSelector(state => state.staticData);

    return (
        <section className='our-products-section'>
            <div className='container'>
                {/* Head Text */}
                <SectionHeadText
                    titleStart={"Our"}
                    featuredWord={"Products"}
                    description={`Discover a range of comprehensive and customizable banking products at ${APP_NAME}, designed to suit your unique financial needs and aspirations.`}
                />
                {/* Products Container */}
                <div className='products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {
                        ourProducts.map((pro, index) => <ProductCard key={index} pro={pro} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default OurProducts;