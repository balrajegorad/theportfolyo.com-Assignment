import React, { useContext } from 'react'


import { AppContext } from '../../context/AppContext'

const About = () => {
  const { userData } = useContext(AppContext);
  const avatarUrl = userData && userData.user && userData.user.about && userData.user.about.avatar ? userData.user.about.avatar.url : null;
  const description = userData && userData.user && userData.user.about && userData.user.about.description ? userData.user.about.description : 'About information not available';

  return (
    <div className="container" id='about'>
      <div className='mt-24 flex items-center gap-8'>
        <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
        <h2 className='flex-shrink-0'>About Me</h2>
        <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF] shadow-lg'></div>
      </div>

      <div className='flex mt-16 gap-12 justify-evenly flex-wrap'>
        <div>
          {avatarUrl ? <img src={avatarUrl} alt="Avatar" className='object-cover rounded-lg h-[344px] w-[344px]'/> : 'Avatar not available'}
        </div>
        <div className='flex w-[470px] items-center'>
          <div className='flex flex-col gap-6 items-center'>
            <h2 className='font-medium'>My Introduction</h2>
            <p className='text-gray-300'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
