import React from 'react'

function FAQCard({ faq }) {

    const {
        question,
        answer
    } = faq;

    return (
        <div className='faq-card space-y-3 border border-white/10 p-5 rounded-lg sm:hover:border-white/50 transition'>
            <h2 className='font-medium text-xl'>{question}</h2>
            <hr className='border-white/10' />
            <p className='text-gray-400'>{answer}</p>
        </div>
    )
}

export default FAQCard;