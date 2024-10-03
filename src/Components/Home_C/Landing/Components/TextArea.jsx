import React from 'react';
import { APP_NAME } from '../../../../Utils/constants';
import LinkStartAccount from '../../../Shared_C/LinkStartAccount';

function TextArea() {
    return (
        <div className='text-area w-full md:w-1/2 order-1 md:-order-1 text-center md:text-start' >
            <div className='bg-gray-color border border-white/10 rounded-full py-2 px-5 flex items-center justify-center md:justify-start gap-2 mb-4 md:w-fit'>
                <i className="fa-solid fa-circle-check text-primary-color"></i>
                <p>No LLC Required, No Credit Check.</p>
            </div>
            <h1 className='font-medium text-2xl md:text-3xl md:w-3/4 mb-3'>
                Welcome to {APP_NAME}
                Empowering Your <span className='text-primary-color'>Financial Journey</span>
            </h1>
            <p className='text-gray-400 font-medium mb-7'>
                At Pinnacle Bank, our mission is to provide comprehensive banking solutions that empower individuals
                and businesses to achieve their financial goals. We are committed to delivering personalized and
                innovative services that prioritize our customers' needs.
            </p>
            {/* Link Open Account Bank */}
            <LinkStartAccount />
        </div>
    )
}

export default TextArea;