import React from 'react';
import Faq from '../../Components/Shared_C/FAQ/Faq';
import PopupStartAccount from '../../Components/Shared_C/PopupStartAccount';
import CustomLanding from '../../Components/Shared_C/CustomLanding/CustomLanding';
import { APP_NAME } from '../../Utils/constants';
import Values from '../../Components/Careers_C/Values';
import Benefits from '../../Components/Careers_C/Benefits';
import JobOpenings from '../../Components/Careers_C/JobOpenings';

function Careers() {
    return (
        <div className='careers-page pt-24'>
            {/* Custom Landing */}
            <CustomLanding
                textBoxData={{
                    titleStart: "Welcome to",
                    titleEnd: "Careers!",
                    featuredWords: APP_NAME,
                    description: `Join our team and embark on a rewarding journey in the banking industry. At ${APP_NAME}, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.`
                }}
                heroImage={`${process.env.PUBLIC_URL}/assets/careers/landingHero.png`}
            />
            {/* Values */}
            <Values />
            {/* Benefits */}
            <Benefits />
            {/* Job Openings */}
            <JobOpenings />
            {/* FAQ */}
            <Faq />
            {/* Popup Start Account */}
            <PopupStartAccount />
        </div>
    )
}

export default Careers;