import React from 'react';
import TextBox from './Components/TextBox';
import HeroArea from './Components/HeroArea';

function CustomLanding({ textBoxData, heroImage }) {
    return (
        <div className='custom-landing'>
            <div className='container'>
                <div className='container-container bg-gray-color border border-white/10 p-5 rounded-xl relative'>
                    {/* Light Image */}
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/shared/light.png`}
                        alt='Light'
                        className='absolute top-0 right-0 rotate-90'
                    />
                    {/* Landing Content */}
                    <div className='landing-content relative flex flex-col items-end'>
                        {/* Text Box */}
                        <TextBox textBoxData={textBoxData} />
                        {/* Hero Area */}
                        <HeroArea heroImage={heroImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomLanding;