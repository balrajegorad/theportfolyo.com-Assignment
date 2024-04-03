import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './sercives.css'

const Services = () => {
    const { userData } = useContext(AppContext);
    const services = userData && userData.user ? userData.user.services : null;

    const filteredServices = services ? services.filter(service => service.enabled) : null;

    return (
        <div className="container " id='services'>
            <div className='mt-48 container1 flex items-center gap-8 '>
                <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
                <h2 className='flex-shrink-0'> What I Can Do ?</h2>
                <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF] shadow-lg'></div>
            </div>

            <div className='grid grid-cols-3 gap-12 mt-40 section'>
                {filteredServices && filteredServices.map((service, index) => (
                    <div key={index} className={`section_item bg-[#A1D8FF] shadow1 bg-opacity-20 px-8 pt-6 pb-4 shadow-2xl shadow-black/[0.2] rounded-3xl text-center ${index > 2 ? 'mt-12' : ''} flex flex-col justify-between`}>
                        <div className="select-none section_img">
                            <img src={service.image.url} className="shadow-2xl bg-white shadow-pink/[0.2] rounded-3xl h-40 w-40 mx-auto -mt-20 transform-gpu hover:scale-125" alt="avatar" />
                        </div>
                        <div>
                            <h1 className="mt-6 text-xl font-bold text-white ">{service.name}</h1>
                            <p className="mt-2 text-sm text-gray-300">{service.desc}</p>
                        </div>
                        <p className="mt-4 rounded-l text-white ">
                            <span className='text-sm mr-2'>Start from</span> {service.charge}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
