import React from 'react';
import { useSelector } from 'react-redux';
import FAQCard from './Components/FAQCard';
import SectionHeadText from '../SectionHeadText';

function Faq() {

    const { faq } = useSelector(state => state.staticData);

    return (
        <section className='faq-section'>
            <div className='container py-10'>
                {/* Head Text */}
                <SectionHeadText
                    titleEnd={"Asked Questions"}
                    featuredWord={"Frequently"}
                    description={`Still you have any questions? Contact our Team via support@yourbank.com`}
                />
                {/* Faq Container */}
                <div className='faq-container grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        faq.map((faq, index) => (
                            <FAQCard key={index} faq={faq} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Faq