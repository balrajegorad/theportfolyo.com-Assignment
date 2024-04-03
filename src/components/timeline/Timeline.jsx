import React, { useContext, useState } from 'react'; 
import { AppContext } from '../../context/AppContext';
import { IoLocationOutline } from "react-icons/io5";
import './timeline.css'

const Timeline = () => {
    const { userData } = useContext(AppContext);
    const timeline = userData && userData.user ? userData.user.timeline : null;
    
    const [selectedOption, setSelectedOption] = useState('education');

    const educationTimeline = timeline ? timeline.filter(item => item.forEducation && item.enabled) : [];
    const experienceTimeline = timeline ? timeline.filter(item => !item.forEducation && item.enabled) : [];
  
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US');
    }

    return (
        <div className='container'>
            <div className='mt-24 flex items-center gap-8'>
                <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
                <h2 className='flex-shrink-0'>Education/Experience</h2>
                <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
            </div>
            
            <div className="mt-16">
                <div className="flex justify-center gap-6 mb-12">
                    <button className={` border1 px-4 py-2 rounded-lg ${selectedOption === 'education' ? 'bg-blue-400 text-white' : 'bg-black text-white'}`} onClick={() => handleOptionChange('education')}>Education</button>
                    <button className={` border1 px-4 py-2 rounded-lg ${selectedOption === 'experience' ? 'bg-blue-400 text-white' : 'bg-black text-white'}`} onClick={() => handleOptionChange('experience')}>Experience</button>
                </div>
                {selectedOption === 'education' && (
                    <div className='flex gap-8 timeline_content'>
                        
                        {educationTimeline.map((item, index) => (
                            <div key={index} className="mt-4 border1 p-4 shadow1 w-[420px] timeline_content_main">
                              <div className='flex gap-1 text-sm text-gray-300'>
                                <p>{item.jobTitle}</p>
                                <p>({formatDate(item.startDate)} - {formatDate(item.endDate)})</p>
                              </div>
                            <h1 className=' text-[2rem]'>{item.company_name}</h1>
                            <p className='flex gap-1 items-baseline text-blue-400'><IoLocationOutline/>{ item.jobLocation}</p>
                            <p>Summary : {item.summary}</p>
                            <ul className='text-sm text-gray-300 mt-2'>
                              {item.bulletPoints.map((point, index) => (
                                <li key={index} className='ml-2'>{point} </li>
                              ))}
                            </ul>
                            </div>
                        ))}
                    </div>
                )}
                {selectedOption === 'experience' && (
                    <div className='flex gap-8 timeline_content'>
                       
                        {experienceTimeline.map((item, index) => (
                            <div key={index} className="mt-4 border1 p-4 shadow1 w-[420px] timeline_content_main">
                              <div className='flex gap-1 text-sm text-gray-300'>
                                <p>{item.jobTitle}</p>
                                <p>({formatDate(item.startDate)} - {formatDate(item.endDate)})</p>
                              </div>
                            <h1 className=' text-[2rem]'>{item.company_name}</h1>
                            <p className='flex gap-1 items-baseline text-blue-400'><IoLocationOutline/>{ item.jobLocation}</p>
                            <p>Summary : {item.summary}</p>
                            <ul className='text-sm text-gray-300 mt-2'>
                              {item.bulletPoints.map((point, index) => (
                                <li key={index} className='ml-2'>{point} </li>
                              ))}
                            </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Timeline;
