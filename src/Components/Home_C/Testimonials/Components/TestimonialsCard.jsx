import React from 'react';

function TestimonialsCard({ testimonial }) {

    const {
        name,
        description
    } = testimonial;

    return (
        <div className='testimonial-card text-center space-y-3 p-5 border border-white/10 rounded-md shadow-md'>
            {/* Icon */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/home/quote.png`}
                alt='Quote Icon'
                className='mx-auto'
            />
            {/* Description */}
            <p>{description}</p>
            {/* Name */}
            <h5 className='text-primary-color font-medium'>{name}</h5>
        </div>
    )
}

export default TestimonialsCard;