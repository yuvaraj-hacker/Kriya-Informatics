import React from 'react'
function ContactUs() {
   return (
      <div className="max-w-[80rem] mx-auto  px-5  lg:p-0 p-5   md:mx-auto  lg:mx-auto    lg:my-10  rounded-2xl ">
         <div className='lg:grid lg:grid-cols-2 grid-col-1 grid gap-5  px-5 '>
            <div className="flex justify-center items-center flex-wrap  lg:gap-28 ">
               <div className=" text-justify " >
                  <p className="text-center text-3xl text-[#0B4671]  font-bold ">Contact Us</p>
                  <div className='space-y-5 mt-5'>
                     <input className="rounded-md w-full p-3   border focus:outline" placeholder='Your Name' />
                     <input className="rounded-md  w-full p-3  border  focus:outline" placeholder='E-mail' />
                     <input className="rounded-md   w-full p-3  border focus:outline" placeholder='Phone Number' />
                     <input className="rounded-md   w-full p-3  border focus:outline" placeholder='Subject' />
                     <textarea className="rounded-md w-full p-3  border  focus:outline  " rows="6" placeholder='write Your Message' />
                  </div>
                  <div className='flex justify-center  items-center  mt-5 '>
                     <button className="rounded-md w-full  border text-center text-[#0B4671]  border-[#0B4671] hover:text-white hover:bg-[#0B4671]  px-5 py-3 font-bold "     > Send Your Message </button>
                  </div>
               </div>
            </div>
            <div className='flex items-center justify-center' >
               <img src='/Images/conn.jpg' alt='contact' />
            </div>
         </div>
      </div>
   )
}
export default ContactUs
