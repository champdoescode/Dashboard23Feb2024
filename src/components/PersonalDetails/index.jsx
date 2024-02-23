import React from 'react'

const PersonalDetails = () => {
  return (
    <div className='w-full flex justify-center '>

            
            <div className='rounded-t border shadow-lg w-11/12 pb-8'>
                <div className='rounded-t p-2 bg-teal-100 text-blue-600 border-b border-black'>Personal Details</div>
                <div className='flex justify-center'>

                <div className="flex w-11/12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:grid-cols-4">
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">First Name:</label>
                            <input className='border border-gray-400 w-full' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Middle Name:</label>
                            <input className='border border-gray-400 w-full' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Last Name:*</label>
                            <input className='border border-gray-400 w-full' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Mobile No :*</label>
                            <input className='border border-gray-400 w-full' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Emergency Contact No :*</label>
                            <input className='border border-gray-400 w-full' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Gender:</label>
                            <div class="flex items-center mb-4">
                                <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">Male</label>
                                <input type="checkbox" class="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">Female</label>
                                <input type="checkbox" class="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">Other</label>
                                
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Date of Birth :*</label>
                            <input className='border border-gray-400 w-full' type="date" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Email id :*</label>
                            <input className='border border-gray-400 w-full' type="email" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Permanent Address :*</label>
                            <textarea  className='h-12 border border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-5/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Corresponding Address :*</label>
                            <textarea  className='h-12 border border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>

                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Religion:</label>
                            <select id="countries" class="w-full border border-gray-400 rounded">
                                <option selected>Hindu</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                            </select>
                        </div>
                    </div>
                    
                    

                </div>
                </div>
            </div>
            </div>
  )
}

export default PersonalDetails