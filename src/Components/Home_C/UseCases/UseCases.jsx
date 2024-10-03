import React from 'react';
import SectionHeadText from '../../Shared_C/SectionHeadText';
import { APP_NAME } from '../../../Utils/constants';
import Individuals from './Components/Individuals';
import Business from './Components/Business';

function UseCases() {
    return (
        <section className='use-cases-section'>
            <div className='container py-10'>
                {/* Head Text */}
                <SectionHeadText
                    featuredWord={"Use Cases"}
                    description={`At ${APP_NAME}, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions`}
                />
                <div className='cases-container space-y-10'>
                    {/* Individuals */}
                    <Individuals />
                    {/* Business */}
                    <Business />
                </div>
            </div>
        </section>
    )
}

export default UseCases;