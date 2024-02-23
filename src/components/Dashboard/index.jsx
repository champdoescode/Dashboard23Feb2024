import React from 'react'
import Navbar from '../Navbar'
import Dashlayout from '../Dashlayout'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='flex'>
            <div className='w-3/12 relativie  h-screen pt-24 sm:hidden md:hidden lg:flex flex-col xs:hidden hidden'>
                <div className='fixed pr-16 h-screen bg-white shadow-lg  '>
                    <div className='ml-10'>
                        <div className='text-gray-600'>Main</div>
                    </div>
                    <div className='flex items-center pl-8 mt-4 hover:bg-gray-100 m-2 hover:rounded p-2'>
                        <div><img className='h-4 w-4' src="./images/home.png" alt="" /></div>
                        <div><NavLink to='/home'  className='ml-2 text-gray-500 hover:text-black hover:underline'>Go To Home</NavLink></div>
                    </div>
                    <div className='flex items-center pl-8 mt-4 hover:bg-gray-100 m-2 hover:rounded p-2'>
                        <div><img className='h-4 w-4' src="./images/group.png" alt="" /></div>
                        <div><NavLink className='ml-2 text-gray-500 hover:text-black hover:underline' to="/teams">Teams</NavLink></div>
                    </div>
                    <div className='flex items-center pl-8 mt-4 hover:bg-gray-100 m-2 hover:rounded p-2'>
                        <div><img className='h-4 w-4' src="./images/compass.png" alt="" /></div>
                        <div><a className='ml-2 text-gray-500 hover:text-black hover:underline' href="./">Goals</a></div>
                    </div>
                    <div className='flex items-center pl-8 mt-4 hover:bg-gray-100 m-2 hover:rounded p-2'>
                        <div><img className='h-4 w-4' src="./images/star.png" alt="" /></div>
                        <div><a className='ml-2 text-gray-500 hover:text-black hover:underline' href="./">Private Tasks</a></div>
                    </div>
                    <div className='flex items-center pl-8 mt-4 hover:bg-gray-100 m-2 hover:rounded p-2'>
                        <div><img className='h-4 w-4' src="./images/graph.png" alt="" /></div>
                        <div><a className='ml-2 text-gray-500 hover:text-black hover:underline' href="./">Analytics</a></div>
                    </div>
                    
                    <div className='ml-10 mt-16'>
                        <div className='text-gray-600'>Other</div>
                    </div>
                    <div className='flex items-center pl-8 mt-4 hover:bg-gray-100 m-2 hover:rounded p-2'>
                        <div><img className='h-4 w-4' src="./images/folder.png" alt="" /></div>
                        <div><a className='ml-2 text-gray-500 hover:text-black hover:underline' href="./">Documents</a></div>
                    </div>
                    <div className='flex items-center pl-8 mt-4 hover:bg-gray-100 m-2 hover:rounded p-2'>
                        <div><img className='h-4 w-4' src="./images/settings.png" alt="" /></div>
                        <div><a className='ml-2 text-gray-500 hover:text-black hover:underline' href="./">Settings</a></div>
                    </div>
    
                </div>
            </div>
            <div className='w-full pt-24'>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard