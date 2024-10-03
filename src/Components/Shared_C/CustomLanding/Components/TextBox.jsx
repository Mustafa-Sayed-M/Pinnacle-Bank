import React from 'react';

function TextBox({ textBoxData }) {

    const {
        firstText,
        titleStart,
        titleEnd,
        featuredWords,
        description
    } = textBoxData;

    return (
        <div className='text-box lg:absolute w-full lg:w-1/2 top-0 left-0 bg-body-color border border-white/10 p-5 rounded-3xl rounded-br-3xl lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-none -mt-16 lg:mt-0 space-y-2 order-1'>
            <p className='mb-2 text-gray-400'>{firstText}</p>
            <h1 className='text-xl lg:text-4xl font-medium'>{titleStart} <span className='text-primary-color'>{featuredWords}</span> {titleEnd}</h1>
            <p className='text-gray-400'>{description}</p>
        </div>
    )
}

export default TextBox;