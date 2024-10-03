import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleMenuStore } from '../../../../Store/slices/appSlice';

function NavbarMenuToggler() {

    const dispatch = useDispatch();

    const { navbar: { openMenu } } = useSelector(state => state.app);

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(handleMenuStore(!openMenu));
    };

    return (
        <button
            type='button'
            onClick={handleClick}
            title='Navbar Menu Toggler'
            aria-label='Navbar Menu Toggler'
            className='navbar-menu-toggler lg:hidden'
        >
            <div className='space-y-2 overflow-hidden'>
                <span style={{ transformOrigin: "right center" }} className={`w-10 h-0.5 block bg-white rounded-full transition ${openMenu && "-rotate-45"}`}></span>
                <span className={`w-10 h-0.5 block bg-white rounded-full transition ${openMenu && "translate-x-full"}`}></span>
                <span style={{ transformOrigin: "right center" }} className={`w-10 h-0.5 block bg-white rounded-full transition ${openMenu && "rotate-45"}`}></span>
            </div>
        </button>
    )
}

export default NavbarMenuToggler;