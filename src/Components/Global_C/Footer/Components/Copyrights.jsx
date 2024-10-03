import React from 'react';
import { APP_NAME } from '../../../../Utils/constants';

const socialLinks = [
    {
        icon: "fa-brands fa-linkedin-in fa-fw",
        href: "https://www.linkedin.com/in/mustafa-sayed-65a40027a/",
    },
    {
        icon: "fa-brands fa-whatsapp fa-fw",
        href: "https://api.whatsapp.com/send?phone=201122124968",
    },
    {
        icon: "fa-brands fa-github fa-fw",
        href: "https://github.com/Mustafa-Sayed-M",
    },
]

function Copyrights() {
    return (
        <div className='copyrights bg-body-color p-5 rounded-full flex flex-col md:flex-row items-center justify-between gap-y-3'>
            {/* Social Links */}
            <ul className='social-links flex items-center gap-1 -mt-7 md:mt-0'>
                {
                    socialLinks.map((link, index) => <li key={index}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-xl text-black bg-primary-color rounded-full p-1 transition duration-300'
                        >
                            <i className={link.icon}></i>
                        </a>
                    </li>)
                }
            </ul>
            {/*  */}
            <p className='text-gray-400'>{APP_NAME} All Rights Reserved</p>
            {/* Right Links */}
            <ul className='right-links flex items-center gap-2 text-gray-400'>
                <li className='cursor-pointer'>
                    Privacy Policy
                </li>
                <li>|</li>
                <li className='cursor-pointer'>
                    Terms of Service
                </li>
            </ul>
        </div>
    )
}

export default Copyrights;