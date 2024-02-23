import React from 'react'
import { Chart } from "react-google-charts";
import './index.jsx'


export const data = [
    ["Year", "Dev Team", "Design Team"],
    ["Winter", 25, 50],
    ["Spring", 60, 60],
    ["Summer", 60, 20],
    ["Autumn", 80, 40],
  ];
  
  export const options = {
    title: "Team Performance",
    background: '#00000000',
    curveType: "function",
    vAxis: {
        minValue: 0,
        maxValue: 100,
        format: '#\'%\''
    },
    legend: { position: "bottom" },
  };
  
  

const DashboardCharts = () => {
  return (
    <div>

    
                <div className="flex w-full grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-cols-3">
                    <div className="flex flex-col w-full  rounded-xl aspect-auto mt-8 grid-items col-span-2">
                                                <div className=''>
                                
                                <Chart className='charts'
                                chartType="LineChart"
                                width="100%"
                                height="400px"
                                data={data}
                                options={options}
                                />
                            </div>
                        
                    </div>
                    <div className="flex flex-col w-full  rounded-xl aspect-auto mt-8 grid-items">
                            <div className='flex justify-between items-center'>
                                <div className='p-2 text-2xl text-gray-700'>Need Review</div>
                                <div>
                                    <a className='text-blue-700' href="">See all</a>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg'>
                                
                                <div className='flex items-center pl-8 mt-4 hover:bg-gray-100 m-4 hover:rounded-xl p-2'>
                                    <div><img className='h-12 w-12 rounded-full' src="./images/person1.jpeg" alt="" /></div>
                                    <div>
                                        <div className='ml-2 text-gray-500  ' >Wade Warren</div>
                                        <div className='ml-2 text-gray-500  '>Marketing Cordinator</div>
                                    </div>
                                </div>
                                <div className='flex items-center pl-8 mt-4 hover:bg-gray-100 m-4 hover:rounded-xl p-2'>
                                    <div><img className='h-12 w-12 rounded-full' src="./images/person2.jpeg" alt="" /></div>
                                    <div>
                                        <div className='ml-2 text-gray-500  ' >Wade Warren</div>
                                        <div className='ml-2 text-gray-500  '>Marketing Cordinator</div>
                                    </div>
                                </div>
                                <div className='flex items-center pl-8 mt-4 hover:bg-gray-100 m-4 hover:rounded-xl p-2'>
                                    <div><img className='h-12 w-12 rounded-full' src="./images/person3.jpeg" alt="" /></div>
                                    <div>
                                        <div className='ml-2 text-gray-500  ' >Wade Warren</div>
                                        <div className='ml-2 text-gray-500  '>Marketing Cordinator</div>
                                    </div>
                                </div>
                                
                
                            </div>
                        
                    </div>
                    
                    
                </div>
        
    </div>

  )
}

export default DashboardCharts