import React from 'react';
import { useSelector } from 'react-redux';
import SectionHeadText from '../Shared_C/SectionHeadText';

const ValueCard = ({ valueItemData }) => {

    const {
        name,
        description,
    } = valueItemData;

    return <div className='value-card border-s border-s-primary-color p-5'>
        {/* Name */}
        <h3 className='mb-3 text-2xl opacity-50'>{name}</h3>
        {/* Description */}
        <p className='text-gray-400'>{description}</p>
    </div>
};

function Values() {

    const { values } = useSelector(state => state.staticData);

    return (
        <section className='benefits py-10'>
            <div className='container'>
                {/* Section Head Text */}
                <SectionHeadText
                    description={'At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.'}
                    featuredWord={'Values'}
                    titleStart={'Our'}
                />
                {/*  */}
                <div className='content-grid grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {values.map((valueItem, index) => <ValueCard key={index} valueItemData={valueItem} />)}
                </div>
            </div>
        </section>
    )
}

export default Values;