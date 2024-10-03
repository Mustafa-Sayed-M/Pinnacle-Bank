import React from 'react';
import TextArea from './Components/TextArea';
import HeroArea from './Components/HeroArea';

function Landing() {
    return (
        <div className='landing relative'>
            {/* Pattern 1 */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/home/landingPattern1.png`}
                alt='Landing Pattern 1'
                className='absolute top-0 left-0'
            />
            {/* Pattern 1 */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/home/landingPattern2.png`}
                alt='Landing Pattern 2'
                className='absolute top-1/2 right-0 -translate-y-1/2'
            />
            {/* Pattern 2 */}
            <div className='container pt-32 pb-16 flex flex-col md:flex-row items-center justify-center gap-10 relative z-10'>
                {/* Text Area */}
                <TextArea />
                {/* Hero Area */}
                <HeroArea />
            </div>
        </div>
    )
}

export default Landing;