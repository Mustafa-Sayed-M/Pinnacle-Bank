import React from 'react';
import Logo from '../../Shared_C/Logo';
import NavbarLinks from './Components/NavbarLinks';
import NavbarMenu from './Components/NavbarMenu';
import NavbarRightBox from './Components/NavbarRightBox';

function Navbar() {

    return (
        <nav className='navbar absolute w-full z-50'>
            <div className='container py-5'>
                {/* Content Container */}
                <div className='bg-gray-color border-white/10 border min-h-[60px] flex items-center justify-between gap-2 px-5 rounded-full relative'>
                    {/* Logo */}
                    <Logo />
                    {/* Navbar Links */}
                    <NavbarLinks />
                    {/* Right Box */}
                    <NavbarRightBox />
                    {/* Navbar Menu */}
                    <NavbarMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;