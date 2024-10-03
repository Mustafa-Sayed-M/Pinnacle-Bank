import React from 'react';

function FeatureCard({ feature }) {

  const {
    name,
    description
  } = feature;

  return (
    <div className='feature-card bg-gray-color border border-white/10 p-5 rounded-md relative'>
      {/* Arrow Icon */}
      <div className='absolute top-2 right-5 text-3xl text-primary-color'>
        <i className="fa-solid fa-arrow-up rotate-45"></i>
      </div>
      {/* Content */}
      <div className='content space-y-2'>
        {/* Name */}
        <h3 className='font-medium text-xl'>{name}</h3>
        {/* Description */}
        <p className='text-gray-400'>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard;