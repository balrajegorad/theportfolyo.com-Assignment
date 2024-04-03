import React, { useContext } from 'react'; 
import { Navigation, Pagination } from 'swiper/modules';
import { AppContext } from '../../context/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaGithub } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import './project.css'


const Projects = () => {

    const { userData } = useContext(AppContext);
    const projects = userData && userData.user ? userData.user.projects : null;


    const sortedProjects = projects ? projects.filter(project => project.enabled).sort((a, b) => a.sequence - b.sequence) : null;

    return (
        <div className='container' id='projects'>
            <div className='mt-24 flex items-center gap-8'>
                <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
                <h2 className='flex-shrink-0'>Projects</h2>
                <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
            </div>

            <div className='mt-16 project_container'>
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{ clickable: true }} navigation={true} modules={[Pagination, Navigation]}>
                    {sortedProjects && sortedProjects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="project_content w-full rounded-lg sahdow-lg gap-12 items-center flex p-16">
                                <div className=''><img src={project.image.url} alt="Project" className='h-[350px] w-560px] rounded-lg'/></div>
                                <div className='project_text_content w-[622px] h-[333px] flex flex-col gap-12 items-center '>
                                    <h2>{project.title}</h2>
                                    <p className=" text-sm w-[422px] text-gray-300">{project.description}</p>
                                    <div className='flex gap-2 text-2xl text-white'>
                                        <a href={project.githuburl}><i className='hover:text-[#86CDFF]'><FaGithub /></i></a>
                                        <a href={project.liveurl}><i className='hover:text-[#86CDFF]'><AiOutlineExport/></i></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Projects;
