import React, { useContext } from 'react'; 
import { AppContext } from '../../context/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './testimonials.css'


const Testimonials = () => {
    const { userData } = useContext(AppContext);
    const testimonials = userData && userData.user ? userData.user.testimonials : null;
   

    const filteredTestimonials = testimonials ? testimonials.filter(testimonial => testimonial.enabled) : [];

    return (
        <div className='container'>
            <div className='mt-24 flex items-center gap-8'>
                <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
                <h2 className='flex-shrink-0'>Testimonial</h2>
                <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
            </div>

            <div className='mt-16 border1 shadow1 rounded-full bg-slate-500 bg-opacity-20 testi_content'>
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} autoplay={{ delay: 1000 }} pagination={{ clickable: true }} modules={[Pagination]}>
                    {filteredTestimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center gap-16 justify-center w-full p-16'>
                                <div className='rounded-full overflow-hidden size-[150px] testi_img'>
                                    <img src={testimonial.image.url} alt="Testimonial" className='h-full w-full object-cover rounded-full ' />
                                </div>
                                <div className='testi_text'>
                                    <h2 className='text-lg font-bold'>{testimonial.name}</h2>
                                    <span className='font-medium text-neutral-500'>{testimonial.position}</span>
                                    <p className="text-neutral-500 dark:text-neutral-300 w-[540px]">{testimonial.review}</p>
                                </div>
                            </div>
                        </SwiperSlide> 
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
