import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../Utils/constants';

function Logo({ className }) {
    return (
        <Link
            to={'/'}
            className={`flex items-center gap-2 font-medium ${className}`}
        >
            <img
                src={`${process.env.PUBLIC_URL}/assets/shared/logo.png`}
                alt='Logo'
                className='w-5'
            />
            <span>{APP_NAME}</span>
        </Link>
    )
}

export default Logo;