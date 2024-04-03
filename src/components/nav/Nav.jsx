import React from 'react'
import './nav.css'

const Nav = () => {
  return (
      <div className="container section ">
          <div className='m-5 flex gap-9 justify-end p-2 items-center'>
              <div className='section_a flex gap-9'>
                  <a className='link1' href="#about">About</a>
                  <a className='link1' href="#services">Services</a>
                  <a className='link1' href="#projects">Projects</a>
                  <a className='link1' href="#contact">Contact</a>
                </div>
                <button className=" shadow1 px-6 rounded-md bg-black text-white border1 hover:bg-white hover:text-black">
                  Resume
              </button>
             

          </div>
      </div>
  ) 
}
 
export default Nav