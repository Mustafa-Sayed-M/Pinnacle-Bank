import React from 'react';
import { useSelector } from 'react-redux';
import SectionHeadText from '../../Shared_C/SectionHeadText';
import { APP_NAME } from '../../../Utils/constants';
import FeatureCard from './Components/FeatureCard';

function OurFeatures() {

    const { ourFeatures } = useSelector(state => state.staticData);

    return (
        <section className='our-features'>
            <div className='container'>
                {/* Head Text */}
                <SectionHeadText
                    titleStart={"Our"}
                    featuredWord={"Features"}
                    description={`Experience a host of powerful features at ${APP_NAME}, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance ${APP_NAME} experience`}
                />
                {/* Features Container */}
                <div className='features-container grid grid-cols-1 md:grid-cols-2 gap-2'>
                    {
                        ourFeatures.map((feature, index) => <FeatureCard
                            key={index}
                            feature={feature}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}

export default OurFeatures;