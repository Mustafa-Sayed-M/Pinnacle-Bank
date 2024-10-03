import React from 'react';
import { APP_LINKS } from '../../../../Utils/constants';
import { Link } from 'react-router-dom';
import Logo from '../../../Shared_C/Logo';

function Header() {
    return (
        <div className='header'>
            {/* Logo */}
            <Logo className={'justify-center mb-5'} />
            {/* App Links */}
            <ul className='flex items-center gap-2 justify-center'>
                {
                    APP_LINKS.map((link, index) => <li key={index}>
                        <Link
                            to={link.to}
                            className='font-medium hover:text-primary-color transition'
                        >
                            {link.label}
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Header;