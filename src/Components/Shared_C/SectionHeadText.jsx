import React from 'react';

function SectionHeadText({ titleStart, titleEnd, featuredWord, description }) {
    return (
        <div className='section-head-text space-y-2 font-medium mb-5 text-center'>
            <h1 className='text-xl md:text-3xl'>{titleStart} <span className='text-primary-color'>{featuredWord}</span> {titleEnd}</h1>
            <p className='text-gray-400 md:w-[600px] mx-auto'>{description}</p>
        </div>
    )
}

export default SectionHeadText;