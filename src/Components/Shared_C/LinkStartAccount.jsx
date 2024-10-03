import React from 'react'
import { Link } from 'react-router-dom';

function LinkStartAccount({ className }) {
    return (
        <Link
            to={'/'}
            title='Open Account'
            className={`bg-primary-color font-medium text-black py-2 px-5 rounded-full hover:bg-white transition ${className}`}
        >
            Open Account
        </Link>
    )
}

export default LinkStartAccount;