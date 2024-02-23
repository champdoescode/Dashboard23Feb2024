import React from 'react'

const OtherDetails = () => {
  return (
    <div className='w-full flex justify-center mb-16'>

            
            <div className='rounded-t border shadow-lg w-11/12 '>
                <div className='rounded-t p-2 bg-teal-100 text-blue-600 border-b border-black'>Other Details</div>
                <div className='flex justify-center'>

                <div className="flex w-11/12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:grid-cols-4">
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Aadhar No :</label>
                            <input className='border border-gray-400 w-full' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">PAN No:</label>
                            <input className='border border-gray-400 w-full' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Date of Joining :*</label>
                            <input className='border border-gray-400 w-full' type="date" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Staff Reference Code :*</label>
                            <input className='border border-gray-400 w-full' type="text" name="" id="" />
                        </div>
                    </div>
                    
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Salary Pay Type :</label>
                            <div class="flex items-center mb-4">
                                <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">Consolidate</label>
                                <input type="checkbox" class="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">PAY</label>
                                <input type="checkbox" class="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">Other</label>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Government Id/ Resident No :*</label>
                            <input className='border border-gray-400 w-full' type="email" name="" id="" />
                        </div>
                    </div>
                    

                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Citizenship:</label>
                            <select id="countries" class="w-full border border-gray-400 rounded">
                                <option selected>Indian</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 mb-16'>
                            <button className='bg-orange-600 text-white rounded px-4 py-2'>Save & Continue</button>
                        </div>
                    </div>
                    
                    

                </div>
                </div>
            </div>
            </div>
  )
}

export default OtherDetails