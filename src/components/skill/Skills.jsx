import React, { useContext } from 'react'; 
import { AppContext } from '../../context/AppContext'
import './skills.css'

const Skills = () => {
    const { userData } = useContext(AppContext);
    const skills = userData && userData.user ? userData.user.skills : null;
    

    
    const sortedSkills = skills ? skills.filter(skill => skill.enabled).sort((a, b) => a.sequence - b.sequence) : null;

    return (
        <div className='container' id='skills'>
            <div className='mt-24 flex items-center gap-8 '>
                <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
                <h2 className='flex-shrink-0'>Skills</h2>
                <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
            </div>

            <div>
                <div className='grid grid-cols-5 gap-12 mt-16 items-center skill_container'>
                    {sortedSkills && sortedSkills.map((skill, index) => (
                        <div className="skill_content shadow1 w-full  rounded-lg sahdow-lg p-6 flex flex-col justify-center items-center
                        hover:bg-white hover:bg-opacity-20 transition-all duration-400 ease" key={index}>
                            <div className="mb-8">
                                <div className=" bg-accent text-accent-content ">
                                    <img src={skill.image.url} className= ' p-1 size-[50px] ' alt="" />
                                </div>
                            </div>
                            <div className="flex justify-center items-baseline gap-2 skill_name">
                                <p className="text-xl text-white font-bold mb-2 ">{skill.name}</p>
                                <h2 className='text-[#86CDFF]'>{ skill.percentage}%</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
