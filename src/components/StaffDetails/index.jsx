import React from 'react'
import PersonalDetails from '../PersonalDetails'
import OtherDetails from '../OtherDetails'

const StaffDetails = () => {
  return (
    <div className='w-full flex justify-center mb-16'>
        <div className='w-11/12 shadow-lg flex flex-col'>
            <div className='flex border-b border-black p-4'>
                <button className='bg-blue-600 text-white px-4 rounded'>Back</button>
                <div className='ml-4 text-blue-600 font-bold text-lg'>Enroll New Staff</div>
            </div>
            <div className='p-4'>
                <div className='text-center text-lg'>BRANCH: SHAHEEN JUNIOR COLLEGE</div>
            </div>
            <div className='w-full flex justify-center'>

            
            <div className='rounded-t border shadow-lg w-11/12 '>
                <div className='rounded-t p-2 bg-teal-100 text-blue-600 border-b border-black'>Staff Details</div>
                <div className='flex justify-center'>

                <div className="flex w-11/12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:grid-cols-4">
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Employement Status:</label>
                            <select id="countries" class="border border-gray-400 rounded">
                                <option selected>Temporary</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Staff Type:</label>
                            <div class="flex items-center mb-4">
                                <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">Teaching</label>
                                <input type="checkbox" class="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">Non Teaching</label>
                                <input type="checkbox" class="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">Transport</label>
                                
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Employement Status:</label>
                            <select id="countries" class="w-full border border-gray-400 rounded">
                                <option selected>Temporary</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Employement Status:</label>
                            <select id="countries" class="w-full border border-gray-400 rounded">
                                <option selected>Temporary</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Employement Status:</label>
                            <select id="countries" class="w-full border border-gray-400 rounded">
                                <option selected>Temporary</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Employement Status:</label>
                            <select id="countries" class="w-full border border-gray-400 rounded">
                                <option selected>Temporary</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Employement Status:</label>
                            <select id="countries" class="w-full border border-gray-400 rounded">
                                <option selected>Temporary</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Employement Status:</label>
                            <select id="countries" class="w-full border border-gray-400 rounded">
                                <option selected>Temporary</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 grid-items">
                        <div className='flex flex-col w-4/6 '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Employement Status:</label>
                            <select id="countries" class="w-full border border-gray-400 rounded">
                                <option selected>Temporary</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                                <option value="US">Example</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex w-full rounded aspect-auto mt-8 mb-8 grid-items">
                        <div className='flex flex-col '>
                            <label for="countries" class="block mb-2 font-medium text-sm text-blue-600 ">Staff Type:</label>
                            <div class="flex items-center mb-4">
                                <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">Yes</label>
                                <input type="checkbox" class="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-blue-600">No</label>
                                
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
            </div>
            <PersonalDetails></PersonalDetails>
            <OtherDetails></OtherDetails>

        </div>
    
    </div>
  )
}

export default StaffDetails