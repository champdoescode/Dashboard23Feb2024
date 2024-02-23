import React from 'react'

const DashboardGrid = () => {
  return (
    <div className=''>
        <div className='w-full'>
                <div className="flex w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-3">
                    <div className="flex flex-col w-full px-8 py-4 rounded-xl aspect-auto mt-8 grid-items bg-violet-300">
                        <div className='flex w-full  justify-between  '>
                            <div className='text-sm text-gray-500'>Efficiency</div>
                            <div className='text-sm flex'>Dev Team <img className='h-4 w-4' src="./images/down-arrow.png" alt="" /></div>
                        </div>
                        <div>
                            <div className='text-3xl'>87%</div>
                        </div>
                        <div className='mt-8 flex'>
                            <div><img className='h-10 w-10 rounded-full border border-white' src="./images/person1.jpeg" alt="" /></div>
                            <div><img className='h-10 w-14 -ml-4 rounded-full border border-white' src="./images/person2.jpeg" alt="" /></div>
                            <div><img className='h-10 w-[72px] -ml-8 rounded-full border border-white' src="./images/plus.png" alt="" /></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full px-8 py-4 rounded-xl aspect-auto mt-8 grid-items bg-white">
                        <div className='flex w-full  justify-between  '>
                            <div className='text-sm text-gray-500'>Task This Week</div>
                            <div className='text-sm flex'><img className='h-6 w-6' src="./images/menu.png" alt="" /></div>
                        </div>
                        <div>
                            <div className='text-3xl'>15</div>
                        </div>
                        <div className='mt-8 w-full flex justify-between'>
                            <div className='text-sm'>Performance Review</div>
                            <div className='flex'>
                                <div className='border mr-2 border-gray-400 rounded-full'></div>
                                <div className='text-sm text-gray-500'>35% left</div>
                            </div>
                        </div>
                        <div className='flex w-full mt-2'>
                            <div className='border-4 border-indigo-500 w-2/12 rounded-full mr-2'></div>
                            <div className='border-4 border-indigo-500 w-6/12 rounded-full mr-2'></div>
                            <div className='border-4 w-4/12 rounded-full '></div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full px-8 py-4 rounded-xl aspect-auto mt-8 grid-items border-2 border-dashed border-gray-400">
                        <div className='flex w-full  justify-between items-center '>
                            <div className='text-sm text-gray-500'>Online Time Per Day</div>
                            <div className='text-sm flex bg-yellow-200 px-4 py-2 rounded-xl flex justify-center items-center'><img className='h-3 w-3' src="./images/up-arrow.png" alt="" />3%</div>
                        </div>
                        <div className='flex'>
                            <div className='text-3xl'>9.2</div>
                            <div className='ml-2'>h</div>
                        </div>
                        <div className='mt-8'>
                            <div>Increased</div>
                            <div>Compared To Last Week</div>
                        </div>
                    </div>
                    
                </div>

        </div>
    </div>
  )
}

export default DashboardGrid