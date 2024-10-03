import React from 'react';

function ContactInfo() {
    return (
        <div className='contact-info py-5 border-y border-y-white/20'>
            <ul className='flex flex-wrap items-center justify-center gap-2'>
                <li>
                    <a href='mailto:mustafacoder9@gmail.com' target='_blank' className='flex items-center font-medium' rel="noreferrer">
                        <i className="fa-solid fa-envelope fa-fw text-primary-color me-1"></i>
                        <span>hello@skillbirdge.com</span>
                    </a>
                </li>
                <li>
                    <a href='https://api.whatsapp.com/send?phone=201122124968' target='_blank' className='flex items-center font-medium' rel="noreferrer">
                        <i className="fa-solid fa-phone fa-fw text-primary-color me-1"></i>
                        <span>01122124968</span>
                    </a>
                </li>
                <li>
                    <a href='https://www.google.com/maps' target='_blank' className='flex items-center font-medium' rel="noreferrer">
                        <i className="fa-solid fa-location-dot fa-fw text-primary-color me-1"></i>
                        <span>Google Maps</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ContactInfo;;