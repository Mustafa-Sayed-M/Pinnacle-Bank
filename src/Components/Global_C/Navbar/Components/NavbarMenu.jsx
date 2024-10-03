import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { handleMenuStore } from '../../../../Store/slices/appSlice';
import { APP_LINKS } from '../../../../Utils/constants';

function NavbarMenu() {

    const dispatch = useDispatch();

    const { navbar: { openMenu } } = useSelector(state => state.app);

    const { pathname } = useLocation();

    useEffect(() => {
        const handleClickOutSide = () => {
            if (openMenu) {
                dispatch(handleMenuStore(false));
            }
        }

        document.addEventListener('click', handleClickOutSide);

        return () => {
            document.removeEventListener('click', handleClickOutSide);
        }

    }, [dispatch, openMenu]);

    useEffect(() => {
        if (openMenu) {
            dispatch(handleMenuStore(false));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, pathname]);

    return (
        <div
            style={{
                visibility: openMenu ? "visible" : "hidden",
                transition: "ease 200ms",
                opacity: openMenu ? 1 : 0,
                transform: openMenu ? 'scale(1)' : 'scale(0)',
                transformOrigin: 'right top'
            }}
            onClick={e => e.stopPropagation()}
            className='navbar-menu lg:hidden absolute top-full mt-3 left-0 bg-gray-color border border-white/10 rounded-3xl w-full p-3 shadow-md overflow-hidden'
        >
            <ul className='space-y-1'>
                {
                    APP_LINKS.map((link, index) => <li key={index}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) => {
                                return `block py-2 px-4 rounded-md ${isActive ? "bg-[#252525] text-primary-color" : "hover:bg-[#252525] hover:text-primary-color"} transition font-medium`;
                            }}
                        >
                            {link.label}
                        </NavLink>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default NavbarMenu;