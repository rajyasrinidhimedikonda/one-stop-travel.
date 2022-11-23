import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Kitreviews from './Kitreviews'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
const Kitpage = () => {   
    const location = useLocation();
    const data = location.state.kit.obj
    const [cart, setCart] = useState(0);

    const addToCart = ()=>{
        setCart(cart+1)
    }


  return (
    <>

    <Navbar cart={cart}/>
    <div class="flex flex-row flex-wrap mt-10 min-h-2/3 ">
    <div class="  w-3/4 md:w-1/2 mt-20 md:ml-1 ml-20  ">
        <div id="indicators-carousel" class="relative" data-carousel="static">
            <div class="relative h-60  ml-5  overflow-hidden rounded-lg md:h-96">
                <div class=" duration-700 ease-in-out" data-carousel-item="active">
                    <img src={data.pic}
                        class="absolute  object-fill block w-fit h-96 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                <div class=" duration-700 ease-in-out" data-carousel-item>    
                    <img src={data.pic}
                        class="absolute object-fill h-96 w-fit block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>    
                    <img src={data.pic}
                        class="absolute object-fill h-96 w-max block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>    
                    <img src={data.pic}
                        class="absolute object-fill h-96 w-max block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>

            </div>
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full " aria-current="true" aria-label="Slide 1"
                    data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                    data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                    data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
                    data-carousel-slide-to="3"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
                    data-carousel-slide-to="4"></button>
            </div>
            <button type="button"
                class="absolute  top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev>
                <span
                    class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                        stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                class="absolute  top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next>
                <span
                    class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                        stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
        
    </div>

    <div class="flex flex-col mt-20 md:pl-36 pl-20 font-poppins">
        <h3 class=" font-light text-xs text-slate-400">SUMMER KIT '22</h3>
        <h1 class="font-bold text-5xl py-2 ">{data.name}</h1>

        <div class=" relative flex items-center pb-4 pt-2">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
            <h2 class=" absolute right-0 text-2xl font-bold text-lblue3">{data.price}</h2>
        </div>

        <ul class="list-disc list-inside py-10">
            <li> {data.items[0]}</li>
            <li>{data.items[1]} </li>
            <li> {data.items[2]}</li>
            <li> {data.items[3]}</li>
        </ul>
        <div class="flex flex-row space-x-5">

            <Link to='/checkout' class="rounded-md w-1/2 h-12 bg-lblue3 hover:bg-lblue2 text-center align-middle pt-3"> Buy Now</Link>
            <button class="rounded-md w-1/2 h-12 bg-slate-300 hover:bg-slate-200 " onClick={addToCart}> Add To Cart</button>
        </div>

    </div>
    <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
<Kitreviews id={data.id}/>
</div>
<Footer/>
</>
  )
}

export default Kitpage