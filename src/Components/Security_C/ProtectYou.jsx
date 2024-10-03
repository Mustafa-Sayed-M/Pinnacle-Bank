import React from 'react';
import { useSelector } from 'react-redux';
import SectionHeadText from '../Shared_C/SectionHeadText';

const ProtectYouCard = ({ protectYouItem }) => {

    const {
        icon,
        name,
        description,
    } = protectYouItem;

    return <div className='protect-you-card bg-gray-color p-5 rounded-md'>
        {/* Header */}
        <div className='header mb-3 flex items-center gap-3'>
            {/* Icon */}
            <img src={`${process.env.PUBLIC_URL}${icon}`} alt={name} />
            {/* Name */}
            <h3 className='font-medium'>{name}</h3>
        </div>
        {/* Description */}
        <p className='text-gray-400'>{description}</p>
    </div>
};

function ProtectYou() {
    const { protectYou } = useSelector(state => state.staticData);

    return (
        <section className='benefits py-10'>
            <div className='container'>
                {/* Section Head Text */}
                <SectionHeadText
                    description={'At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times'}
                    titleStart={'How We'}
                    featuredWord={'Protect You'}
                />
                {/*  */}
                <div className='content-grid grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {protectYou.map((protectYouItem, index) => <ProtectYouCard key={index} protectYouItem={protectYouItem} />)}
                </div>
            </div>
        </section>
    )
}

export default ProtectYou;