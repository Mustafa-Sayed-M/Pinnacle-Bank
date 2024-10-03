import React from 'react';
import Header from './Components/Header';
import ContactInfo from './Components/ContactInfo';
import Copyrights from './Components/Copyrights';

function Footer() {
    return (
        <footer className='footer bg-gray-color'>
            <div className='container py-10 space-y-5'>
                {/* Header */}
                <Header />
                {/* Contact Info */}
                <ContactInfo />
                {/* Copyrights */}
                <Copyrights />
            </div>
        </footer>
    )
}

export default Footer;