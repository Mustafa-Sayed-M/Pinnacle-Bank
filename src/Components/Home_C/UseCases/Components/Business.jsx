import React from 'react';
import { useSelector } from 'react-redux';
import { APP_NAME } from '../../../../Utils/constants';
import HeadText from './HeadText';
import FeatureCard from './FeatureCard';

function Business() {

    const { businessData: { features } } = useSelector(state => state.useCases);

    return (
        <div className='business'>
            <div className='content-container grid grid-cols-1 md:grid-cols-2 gap-5'>
                {/* Text Area */}
                <div className='text-area order-1 md:-order-1'>
                    {/* Head Text */}
                    <HeadText
                        title={"For Business"}
                        description={`For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, ${APP_NAME} is committed to providing the right tools and support to achieve them`}
                    />
                    {/* Boxes */}
                    <div className='boxes grid grid-cols-1 md:grid-cols-3 my-5'>
                        <div className='box p-3 space-y-2'>
                            <h1 className='text-5xl font-medium text-primary-color'>65%</h1>
                            <p className='text-gray-400'>Cash Flow Management</p>
                        </div>
                        <div className='box p-3 space-y-2'>
                            <h1 className='text-5xl font-medium text-primary-color'>70%</h1>
                            <p className='text-gray-400'>Drive Business Expansion</p>
                        </div>
                        <div className='box p-3 space-y-2'>
                            <h1 className='text-5xl font-medium text-primary-color'>45%</h1>
                            <p className='text-gray-400'>Streamline payroll processing</p>
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
                {/* Features Area */}
                <div className='features-area relative overflow-hidden p-5 border border-white/10 bg-gray-color rounded-xl'>
                    {/* Light Image */}
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/shared/light.png`}
                        alt='Light'
                        className='absolute top-0 left-0'
                    />
                    {/* Features Container */}
                    <div className='features-container grid grid-cols-2 gap-2 relative'>
                        {
                            features.map((feature, index) => <FeatureCard key={index} feature={feature} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business;