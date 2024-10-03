import React from 'react';
import { useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import TestimonialsCard from './Components/TestimonialsCard';
import SectionHeadText from '../../Shared_C/SectionHeadText';
import { APP_NAME } from '../../../Utils/constants';

function Testimonials() {

    const { testimonials } = useSelector(state => state.staticData);

    return (
        <section className='testimonials-section'>
            <div className='container py-10'>
                {/* Head Text */}
                <SectionHeadText
                    titleStart={"Our"}
                    featuredWord={"Testimonials"}
                    description={`Discover how ${APP_NAME} has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey`}
                />
                {/* Testimonials Slider */}
                <div className='testimonials-slider'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        navigation
                    >
                        {
                            testimonials.map((testimonial, index) => <SwiperSlide key={index}>
                                <TestimonialsCard testimonial={testimonial} />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;