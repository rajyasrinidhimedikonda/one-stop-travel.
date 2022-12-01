import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../index.css'
import { useEffect, useContext } from 'react'
import { CartContext } from '../contexts/CartContext';
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from '../firebase-config'
import { useLocation } from 'react-router-dom'

const Review = () => {

    const location = useLocation()
    const { img, id } = location.state
    console.log('locsation.state', location.state);
    const firstprod = doc(db, 'reviews', id)

    console.log('iddd', id);
    const addReview = async (event) =>{

        //testcases

        event.preventDefault();
        const title = event.target[0].value
        const body = event.target[1].value
        await updateDoc(firstprod, {
            reviews_array: arrayUnion({
                title: title,
                body: body
            })
        })

    }

  return (
    <>
    <Navbar/>
    <div className='bg-neutral-100 mt-20 flex flex-col'>

    <div className='flex flex-row ml-48 p-5 w-3/4'>
        <img src={img} className="w-60 h-60" alt="" />
        <h1 className='text-4xl font-bold ml-20 mt-10'>Japan Travel Kit</h1>
    </div>
   
    <div class="flex flex-col w-3/4  ml-10 font-poppins h-screen  content-center p-5 ml-48 ">
    <div class="flex flex-row space-x-10 pb-20">
        <input class="star accent-red-100" type="checkbox" title="bookmark page" checked/>
        <input class="star" type="checkbox" title="bookmark page" checked/>
        <input class="star" type="checkbox" title="bookmark page"checked/>
        <input class="star" type="checkbox" title="bookmark page" checked/>
        <input class="star" type="checkbox" title="bookmark page" checked/>
    
    </div>
    <form onSubmit={addReview}>
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
</div>
<Footer/>
</>
  )
}

export default Review