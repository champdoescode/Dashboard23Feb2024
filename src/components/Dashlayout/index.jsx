import React from 'react'
import DashboardGrid from '../DashboardGrid'
import DashboardCharts from '../DashboardCharts'

const Dashlayout = () => {
  return (
    <div className='bg-gray-100'>
        <div className='flex justify-center'>
            <div className='w-11/12'>
                <div className='flex justify-between items-center'>

                
                    <div className='text-3xl '>Our Teams Management</div>
                    <div className='flex items-center'>
                        <div><img className=' ' src="./images/add.png" alt="" /></div>
                        <div><img className=' ml-2' src="./images/chat.png" alt="" /></div>
                        <div className='ml-2'><button className='px-4 py-2 rounded bg-blue-600 text-white'>Upgrad Plan</button></div>
                    </div>
                </div>
                <div>
                    <DashboardGrid></DashboardGrid>
                    <DashboardCharts></DashboardCharts>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Dashlayout