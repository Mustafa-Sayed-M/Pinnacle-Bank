import React from 'react';

function FeatureCard({ feature }) {

    const {
        name,
        icon
    } = feature;

    return (
        <div className='feature-card p-5 bg-body-color rounded-md text-center space-y-4 border border-white/10'>
            {/* Icon */}
            <div className='icon-parent w-20 h-20 rounded-full flex items-center justify-center p-3 bg-primary-color/5 mx-auto'>
                <div className='icon-bg text-primary-color text-xl w-full h-full bg-primary-color/10 rounded-full flex items-center justify-center'>
                    <i className={icon}></i>
                </div>
            </div>
            {/* Name */}
            <h4 className='font-medium'>{name}</h4>
        </div>
    )
}

export default FeatureCard;