import React from 'react';

function HeadText({ title, description }) {
    return (
        <div className='head-text space-y-2'>
            <h1 className='font-medium text-lg'>{title}</h1>
            <p className='text-gray-400'>{description}</p>
        </div>
    )
}

export default HeadText;