import React from 'react'
import '../index.css'
const Review = () => {
  return (
    <div class="flex flex-col w-3/4 mt-20 ml-10 font-poppins">
    <div class="flex flex-row space-x-10 pb-20">
        <input class="star accent-red-100" type="checkbox" title="bookmark page" checked/>
        <input class="star" type="checkbox" title="bookmark page" checked/>
        <input class="star" type="checkbox" title="bookmark page"checked/>
        <input class="star" type="checkbox" title="bookmark page" checked/>
        <input class="star" type="checkbox" title="bookmark page" checked/>
    
    </div>
    <form>
        <div class="flex flex-col ">
            <div>
                <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Headline" required/>
            </div>
        </div>

        <div class="mb-6">
            <label for="large-input" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white pt-5">Body</label>
            <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
</div>
  )
}

export default Review