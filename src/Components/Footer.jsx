import React from 'react'
import { SlSocialFacebook,SlSocialTwitter,SlSocialInstagram  } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <div className=''>
      <div className=' flex text-sm text-gray-600 justify-center py-7 bg-[#f7f7f8]'>
        <div className=' border-e-2 border-gray-400 px-5' >OFFICE BEARERS</div>
        <div className=' border-e-2 border-gray-400 px-5'  >COUNCIL MEMBERS</div>
        <div className=' border-e-2 border-gray-400 px-5'  >ZONAL REPRESENTATIVES </div>
        <div className=' border-e-2 border-gray-400 px-5'  >SUB-COMMITTEES</div>
        <div className=' border-e-2 border-gray-400 px-5'  >TASK FORCES</div>
        <div className=' border-e-2 border-gray-400 px-5'  > SPECIALTY SECTIONS</div>
      </div>
     <div className=' bg-[#ededef] flex justify-between'> 
     <div className=' flex gap-5 py-20 mx-10'>
        <div className=' flex justify-center items-center'>
          <img src="./h.png" alt=""
          className=' w-[120px] h-[120px]' />
        </div>
        <div className=' w-[300px] text-justify flex flex-col gap-5 text-gray-500'>
          <h1>ABOUT IPS</h1>
          <h1 className=' text-sm leading-[25px]'>The IPS is the oldest & largest organization of mental
             health professionals in India. Founded in 1947, the IPS endeavors to advance the field of mental health in India.</h1>
             <div className='flex gap-3'>
            <div className=' bg-gray-400 w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl text-white hover:bg-blue-500'> <SlSocialFacebook /></div>
            <div className=' bg-gray-400 w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl text-white  hover:bg-blue-500'><SlSocialTwitter /></div>
            <div className=' bg-gray-400 w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl text-white  hover:bg-blue-500'>  <TiSocialYoutube /></div>
            <div className=' bg-gray-400 w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl text-white  hover:bg-blue-500'>  <SlSocialInstagram /></div>
            
           
            
             </div>
        </div>
      </div>
      <div className='flex py-20 mx-20 gap-48 text-gray-500'>
       <div>
        <h1>MEMBERSHIP</h1>
        <div className=' flex flex-col gap-5 mt-3'>
          <img src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/WCP-logo5-600x244.png" alt=""
          className='w-[150px] h-[50px]' />
          <img src="https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/WMFH-600x244.png" alt=""
           className='w-[150px] h-[50px]'  />
        </div>
       </div>
       <div>
        <h1>QUICK divS</h1>
        <div className=' mt-3 text-sm flex  flex-col gap-2'>
           <li>Contact IPS</li>
            <li>Constitution</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
        </div>
       </div>
       <div>
        <h1>HEADQUARTERS</h1>
        <h1 className='mt-3'>Patna</h1>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Footer