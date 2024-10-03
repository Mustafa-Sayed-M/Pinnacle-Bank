import React from 'react';
import LinkStartAccount from './LinkStartAccount';
import { APP_NAME } from '../../Utils/constants';

function PopupStartAccount() {
    return (
        <div className='popup-start-account'>
            <div className='container py-10'>
                <div className='content-container bg-gray-color border border-white/10 rounded-xl p-10 flex flex-col md:flex-row items-center gap-10 relative'>
                    {/* Light Image */}
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/shared/light.png`}
                        alt='Light'
                        className='absolute left-0 top-0 w-36'
                    />
                    {/* Text Area */}
                    <div className='test-area font-medium space-y-2 text-center md:text-start'>
                        <h1 className='text-xl md:text-3xl'>Start your financial journey with <span className='text-primary-color'>{APP_NAME} today!</span></h1>
                        <p className='text-gray-500'>Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service</p>
                    </div>
                    {/* Link Start Account */}
                    <LinkStartAccount className={'text-nowrap'} />
                </div>
            </div>
        </div>
    )
}

export default PopupStartAccount;