import React from 'react';

function HeroArea({ heroImage }) {
    return (
        <div className='area-hero w-full lg:w-3/4'>
            <img
                src={heroImage}
                alt='Hero'
            />
        </div>
    )
}

export default HeroArea;