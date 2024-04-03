import React from 'react'
import './contact.css'
import ContactImg from '../../assets/Group15.png'

const Contact = () => {
  return (
    <div className='container'>
      <div className='mt-48 container1 flex items-center gap-8 '>
        <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF]'></div>
        <h2 className='flex-shrink-0'>Contact</h2>
        <div className='shadow1 h-2 w-full rounded-md bg-[#86CDFF] shadow-lg'></div>
      </div>
          
      <div className='p-6 mt-12' id='contact'>
        <div className='flex gap-12 justify-center flex-wrap items-center'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <img src={ContactImg } alt="" />
            <h2 className='text-[2.5rem]'>Get in Touch</h2>
            <p className='text-[1.2rem] -mt-4'>Feel free to reach out!</p>
          </div>
          <form className='flex flex-col gap-6 '>
            <input type="text" name='name' placeholder='Enter Your Name' className='w-full' required/>
            <input type="mail" name='mail' placeholder='Enter Your Email' className='w-full' required/>
            <textarea name="text" id="" rows="7" placeholder='Enter Your Message' className='w-full' required></textarea>
            <button type='submit' className='border1 shadow1 hover:bg-[#86CDFF] '>Send Message</button>
          </form>     
        </div>
      </div>
    </div>
  )
}

export default Contact
