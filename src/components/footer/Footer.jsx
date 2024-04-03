import React from 'react'; 

import { AiOutlineMail } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mt-40 bg-[#19376d] p-16' id='contact'>
          <div className='container flex justify-center gap-16 flex-wrap items-center'>
              <div>
                  <h2 className='text-[3.5rem]'>John Doe</h2>
                  <p className='text-[1.5rem]'>Live the Life as you want!</p>
              </div>
              <ul className='text-[1.2rem] flex flex-col gap-3'>
                  <li className='flex items-center gap-2'>
                      <div className='text-[1.8rem] hover:text-[#86CDFF] hover:cursor-pointer'><AiOutlineMail /></div>
                      <a href="mailto:portfolio3@gmail.com">portfolio3@gmail.com</a>
                  </li>
                  <li className='flex items-center gap-2'>
                      <div className='text-[1.8rem]  hover:text-[#86CDFF] hover:cursor-pointer'><CiLinkedin /></div>
                      <a href="#">linkden.com/johndoe</a>
                  </li>
                  <li className='flex items-center gap-2'>
                      <div className='text-[1.8rem]  hover:text-[#86CDFF] hover:cursor-pointer'><FaGithub /></div>
                      <a href="#">github.com/johndoe</a>
                  </li>
              </ul>
      </div>
    </div>
  )
}

export default Footer
