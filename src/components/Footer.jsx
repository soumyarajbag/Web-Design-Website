import React from 'react'
import {BsInstagram , BsLinkedin , BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='bg-[#0B3470] flex flex-col gap-5 pt-8 pb-10 '>
<div className='bg-[#0B3470]  flex flex-row items-center justify-evenly'>
        <div className='flex flex-col items-center text-slate-100 gap-5'>
            <div className='text-center'>
            <h1 className='text-white font-bold text-5xl'>LOGO</h1>
            </div>
              <div className='flex flex-col items-start gap-2 text-lg font-semibold'>
              <h1>Location : Kolkata , India</h1>
              <h1>Phone : +91 8337040160 </h1>
              <h1>E-mail : wedesign@gmail.com</h1>
              </div>
              
        </div>

        <div className='flex flex-col items-center gap-3 text-white'>
            <h1 className='text-white font-semibold text-2xl'>Quick Links</h1>
            <div className='flex flex-col items-center justify-center gap-4 text-slate-200 font-semibold text-lg '>
                <h1>Home</h1>
                <h1>Portfolio</h1>
                <h1>Services</h1>
            </div>
        </div>

        
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl font-semibold text-white'>Follow Us</h1>
            <div className='text-white flex flex-row items-center gap-10'>
      <BsFacebook className='h-[40px] w-[40px]' />
      <BsLinkedin className='h-[40px] w-[40px]' />
      <BsInstagram className='h-[40px] w-[40px]' />
            </div>
        </div>



    </div>
    <div className='flex flex-row items-center justify-between px-[300px]'>
    <h1 className='text-white text-md'>Terms & Conditions / Privacy Policy</h1>
    <h1 className='text-white text-md' >© 2022 We-Sign</h1>
</div>
    </div>
    
  )
}

export default Footer