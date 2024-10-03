import React from 'react';
import CustomLanding from '../../Components/Shared_C/CustomLanding/CustomLanding';
import { APP_NAME } from '../../Utils/constants';

function About() {
    return (
        <div className='about-page pt-24'>
            {/* Custom Landing */}
            <CustomLanding
                textBoxData={{
                    firstText: `Welcome to ${APP_NAME}`,
                    titleStart: "Where Banking Meets",
                    featuredWords: "Excellence!",
                    description: `At ${APP_NAME}, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.`
                }}
                heroImage={`${process.env.PUBLIC_URL}/assets/about/landingHero.png`}
            />
        </div>
    )
}

export default About;