import React from 'react';
import { NavLink } from 'react-router-dom';
import { APP_LINKS } from '../../../../Utils/constants';

function NavbarLinks() {
    return (
        <ul className='hidden lg:flex items-center gap-2'>
            {
                APP_LINKS.map((link, index) => <li key={index}>
                    <NavLink
                        to={link.to}
                        className={({ isActive }) => {
                            return `block py-2 px-4 rounded-full ${isActive ? "bg-[#252525] text-primary-color" : "hover:bg-[#252525] hover:text-primary-color"} transition font-medium`;
                        }}
                    >
                        {link.label}
                    </NavLink>
                </li>)
            }
        </ul>
    )
}

export default NavbarLinks;