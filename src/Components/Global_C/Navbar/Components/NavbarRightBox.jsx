import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import NavbarMenuToggler from './NavbarMenuToggler';

function NavbarRightBox() {

    const { user } = useUser()

    return (
        <div className='flex gap-2'>
            {/* Auth Links */}
            {
                user ? (
                    <UserButton />
                ) : (
                    <SignInButton
                        mode='modal'
                        fallbackRedirectUrl={'/Pinnacle-Bank'}
                        className='text-black bg-primary-color rounded-full py-2 px-5 font-medium'
                    />
                )
            }
            {/* Navbar Menu Toggler */}
            <NavbarMenuToggler />
        </div>
    )
}

export default NavbarRightBox;