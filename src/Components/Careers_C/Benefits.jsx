import React from 'react';
import SectionHeadText from '../Shared_C/SectionHeadText';
import { useSelector } from 'react-redux';

const BenefitCard = ({ benefitData }) => {

    const {
        icon,
        name,
        description,
    } = benefitData;

    return <div className='benefit-card bg-gray-color p-5 rounded-md'>
        {/* Header */}
        <div className='header mb-3 flex items-center gap-3'>
            {/* Icon */}
            <img src={`${process.env.PUBLIC_URL}${icon}`} alt={name} />
            {/* Name */}
            <h3 className='font-medium'>{name}</h3>
        </div>
        {/* Description */}
        <p className='text-gray-400'>{description}</p>
    </div>
};

function Benefits() {

    const { benefits } = useSelector(state => state.staticData);

    return (
        <section className='benefits py-10'>
            <div className='container'>
                {/* Section Head Text */}
                <SectionHeadText
                    description={'At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.'}
                    featuredWord={'Benefits'}
                    titleStart={'Our'}
                />
                {/*  */}
                <div className='content-grid grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {benefits.map((benefitItem, index) => <BenefitCard key={index} benefitData={benefitItem} />)}
                </div>
            </div>
        </section>
    )
}

export default Benefits;