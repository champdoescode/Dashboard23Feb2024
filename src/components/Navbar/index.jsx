import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <nav className='shadow-lg fixed w-full bg-white'>
            <div className='flex justify-between'>
                <div>
                    <div className='pl-32 text-3xl text-[#0d635c] font-extrabold'>SMART SCHOOL</div>
                </div>
                <div className='flex m-2'>
                    <div className='mx-2 bg-orange-600 flex justify-center items-center rounded-full'><button className='text-sm bg-orange-600 text-white rounded-full px-2'>Under Implementation Track Progress</button></div>
                    <div className='mx-2 bg-blue-700 flex justify-center items-center rounded-full px-2'>
                        <button className='text-sm bg-blue-700 text-white rounded-full'>Get Help</button>
                        <img className='pl-2 h-[14px]' src="./images/arrow-down.png" alt="more" />
                    </div>
                    <div className='text-sm mx-2'>AY: 2023-2024</div>
                    <div><button><img className='h-5 mx-4' src="./images/home.png" alt="home" /></button></div>
                    <div><img className='h-5 mx-4' src="./images/bell.png" alt="home" /></div>
                    <div><img className='h-5 mx-4' src="./images/search.png" alt="home" /></div>
                    <div><svg className='h-5 mx-4' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <rect x="4" y="4" width="40" height="40" stroke="#0d635c" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"></rect> <path d="M24 4V44" stroke="#0d635c" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 24H44" stroke="#0d635c" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
                    <div><img className='h-5 mx-4' src="./images/contacts.png" alt="home" /></div>
                </div>
            </div>
            <div className='flex'>
                <div className='ml-16 text-gray-600'>Staff Details</div>
                <div className='ml-16 text-gray-600'>Staff Attendance</div>
                <div className='ml-16 text-gray-600'>Biometric Attendance</div>
                <div className='ml-16 text-gray-600'>Feedback</div>
                <div className='ml-16 text-gray-600'>Staff Leaves</div>
                <div className='ml-16 text-gray-600'>Staff</div>
                <div className='ml-16 text-gray-600'>Report</div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar