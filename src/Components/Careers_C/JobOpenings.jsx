import React from 'react';
import { useSelector } from 'react-redux';
import SectionHeadText from '../Shared_C/SectionHeadText';

const ValueCard = ({ jobOpeningItemData }) => {

    const {
        name,
        location,
        department,
        about,
        requirementsAndQualifications,
    } = jobOpeningItemData;

    return <div className='benefit-card bg-gray-color rounded-md p-5 space-y-7'>
        {/* Header */}
        <div className='header'>
            {/* Name */}
            <h3 className='mb-4 font-medium text-lg'>{name}</h3>
            <div className='location-department flex items-center gap-2 flex-wrap'>
                {/* Location */}
                <div className='location bg-black/50 py-2 px-4 rounded-full opacity-50'>
                    <span>Location: </span>
                    <span>{location}</span>
                </div>
                {/* Department */}
                <div className='department bg-black/50 py-2 px-4 rounded-full opacity-50'>
                    <span>Department: </span>
                    <span>{department}</span>
                </div>
            </div>
        </div>
        {/* About */}
        <div className='about space-y-3'>
            <h4 className='font-medium'>About This Job</h4>
            <p className='text-gray-400'>{about}</p>
        </div>
        {/* Requirements & Qualifications */}
        <div className='requirements-qualifications space-y-3'>
            <h4 className='font-medium'>Requirements & Qualifications</h4>
            <ul className='space-y-2'>
                {requirementsAndQualifications.map((item, index) => <li key={index} className='text-gray-400 flex items-center gap-2'>
                    <i className="fa-solid fa-briefcase"></i>
                    <span className='font-medium line-clamp-1'>{item}</span>
                </li>)}
            </ul>
        </div>
    </div>
};

function JobOpenings() {

    const { jobOpenings } = useSelector(state => state.staticData);

    return (
        <section className='benefits py-10'>
            <div className='container'>
                {/* Section Head Text */}
                <SectionHeadText
                    description={'Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry'}
                    featuredWord={'Job Openings'}
                />
                {/*  */}
                <div className='content-grid grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {jobOpenings.map((jobOpeningItemData, index) => <ValueCard key={index} jobOpeningItemData={jobOpeningItemData} />)}
                </div>
            </div>
        </section>
    )
}

export default JobOpenings;