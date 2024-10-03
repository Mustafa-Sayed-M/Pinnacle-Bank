import React from 'react';
import { useSelector } from 'react-redux';
import HeadText from './HeadText';
import FeatureCard from './FeatureCard';

function Individuals() {

    const { individualsData: { features } } = useSelector(state => state.useCases);

    return (
        <div className='individuals'>
            <div className='content-container grid grid-cols-1 md:grid-cols-2 gap-5'>
                {/* Features Area */}
                <div className='features-area relative overflow-hidden p-5 border border-white/10 bg-gray-color rounded-xl'>
                    {/* Light Image */}
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/shared/light.png`}
                        alt='Light'
                        className='absolute top-0 left-0'
                    />
                    {/* Features Container */}
                    <div className='features-container grid grid-cols-2 gap-5 relative'>
                        {
                            features.map((feature, index) => <FeatureCard key={index} feature={feature} />)
                        }
                    </div>
                </div>
                {/* Text Area */}
                <div className='text-area'>
                    {/* Head Text */}
                    <HeadText
                        title={"For Individuals"}
                        description={"For individuals, our mortgage services pave the way to home owner ship, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"}
                    />
                    {/* Boxes */}
                    <div className='boxes grid grid-cols-1 md:grid-cols-3 my-5'>
                        <div className='box p-3 space-y-2'>
                            <h1 className='text-5xl font-medium text-primary-color'>78%</h1>
                            <p className='text-gray-400'>Secure Retirement Planning</p>
                        </div>
                        <div className='box p-3 space-y-2'>
                            <h1 className='text-5xl font-medium text-primary-color'>63%</h1>
                            <p className='text-gray-400'>Manageable Debt Consolidation</p>
                        </div>
                        <div className='box p-3 space-y-2'>
                            <h1 className='text-5xl font-medium text-primary-color'>91%</h1>
                            <p className='text-gray-400'>Reducing financial burdens</p>
                        </div>
                        {/* Load More */}
                        <button
                            title='Load More'
                            aria-label='Load More'
                            className='bg-gray-color border border-white/10 py-2 px-4 rounded-full mt-4'
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Individuals;