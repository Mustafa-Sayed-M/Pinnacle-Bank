import React from 'react';

function ProductCard({ pro }) {

    const {
        icon,
        name,
        description
    } = pro;

    return (
        <div className='product-card space-y-3 text-center p-5 border border-white/10 rounded-md'>
            {/* Icon */}
            <div className='icon-parent w-20 h-20 rounded-full flex items-center justify-center p-3 bg-primary-color/5 mx-auto'>
                <div className='icon-bg text-primary-color text-xl w-full h-full bg-primary-color/10 rounded-full flex items-center justify-center'>
                    <i className={icon}></i>
                </div>
            </div>
            {/* Name */}
            <h3 className='font-medium text-xl'>{name}</h3>
            {/* Description */}
            <p className='text-gray-400'>{description}</p>
        </div>
    )
}

export default ProductCard;