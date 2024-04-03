import React from 'react';
import './hero.css';
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import main from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className="container section">
      <div className="bio">
        <div className="bio_content flex flex-col w-[680PX] h-[375PX] backdrop-filter backdrop-blur-lg backdrop-saturate-180 bg-blue-900 bg-opacity-75 
         border border-white border-opacity-25 rounded-lg mr-[-5rem] z-10 gap-[0.8rem] p-[1.8rem]">
          <h5 className='font-medium'>Hello,I’m</h5>
          <h1 className='text-[2.5rem] font-medium ml-10'>John doe</h1>
          <p className='font-medium ml-10'><span>Software Developer</span></p>
          <p className='font-medium ml-10'>I develop 3D visuals, user interfaces and web applications</p>
          <p className='font-medium ml-10'>Live the Life as you want</p>
          <div className="glass_info_icon">
            <a href=""><VscGithub /></a>
            <a href=""><CiMail /></a>
            <a href=""><CiLinkedin /></a>
            <a href=""><PiTelegramLogo /></a>
            <a href=""><AiOutlineWhatsApp /></a>
          </div>
        </div>

        <div className="hero_img">
          <img className='john_img' src={main} alt="Main Img" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
