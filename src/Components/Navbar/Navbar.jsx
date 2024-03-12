import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import Button from '../Button'

const Navbar = () => {
    const [open,setOpne]=useState(false);
  return (
   <nav className=' bg-[#034a68] shadow-xl'>
    <div className=' flex items-center font-medium  justify-between mx-10'>
        <div className=' z-50 p-1 md:w-auto  w-full flex '>
            <img src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/11/IPS-Logo-Full-Trans-200.png" alt=""
             className='md:w-[200px] h-[100px] md:cursor-pointer' />
            <div>
               {
                open?( <div
                    onClick={()=>setOpne(!open)} 
                    className=' text-2xl font-bold md:hidden mt-2'> &#10060;</div>):
                (
                    <div
                    onClick={()=>setOpne(!open)} 
                    className=' text-5xl font-bold md:hidden '> &#8801;</div>
                )
               }
            </div>
        </div>
        <div>
       <div className='hidden md:flex text-[12px] text-gray-300  justify-end pb-4 gap-3 -mt-1'>
        <Link to="" className=' border-e-2 px-3 border-gray-400'>Contact Us</Link>
        <Link>Registration Form</Link>
       </div>
       <div> <ul className=' md:flex hidden flex uppercase items-center md:gap-8 text-gray-300 text-sm mt-3'>
            
            <NavLinks/>
            <div>
            <Link to="/updatedetails" className=' bg-[#a3ad40] p-[5px] rounded-sm px-2 text-gray-100 uppercase'>Update Details</Link>
        </div>
        </ul></div>
        </div>
       
        {/* <div className=' md:block overflow-y-hidden'>
            <Button/>
        </div> */}
      {/* Mobile view  */}
      <ul className={
        `md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? 'left-0 ':'left-[-100%]'}`
      }>
            <li>
                <Link to="/" className=' py-7 px-3 inline-block'>
                Home
                </Link>
            </li>
            <NavLinks/>
            
        </ul>
    </div>
   </nav>
  )
}

export default Navbar