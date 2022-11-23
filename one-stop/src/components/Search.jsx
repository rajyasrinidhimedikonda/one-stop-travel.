import React from 'react'
import Kit from './Kit'
import Navbar from './Navbar'
import backpack from '../images/backpack.webp'
import charger from '../images/charger.jpg'
import table from '../images/search.jpg'
import colgate from '../images/colgate.jpeg'
import oldspice from '../images/oldspice.jpeg'
import raybans from '../images/raybans.webp'
import umbrella from '../images/umbrella.webp'
import toothbrush from '../images/toothbrush.jpeg'
import cubes from '../images/packing-cubes.webp'

import Footer from './Footer'

const images = [
    {   id: 1,
        pic: backpack,
        name: "Japan Travel Kit",
        price: "$22.00",
        items: ['item 1', 'item 2', 'item 3', 'item 4']

    },
    {
        id: 2,
        pic: charger,
        name: "New York Travel Kit",
        price: "$25.00",
        items: ['item 1', 'item 2', 'item 3', 'item 4']


    },
    {
        id: 3,
        pic: table,
        name: "Hawaii Travel Kit",
        price: "$20.00",
        items: ['item 1', 'item 2', 'item 3', 'item 4']


    },
    {
        id: 4,
        pic: umbrella,
        name: "London Travel Kit",
        price: "$25.00",
        items: ['item 1', 'item 2', 'item 3', 'item 4']


    },
    {
        id: 5,
        pic: cubes,
        name: "Miami Travel Kit",
        price: "$15.00",
        items: ['item 1', 'item 2', 'item 3', 'item 4']


    },
    {
        id: 6,
        pic: raybans,
        name: "LA Travel Kit",
        price: "$35.00",
        items: ['item 1', 'item 2', 'item 3', 'item 4']


    },

]


const Search = () => {
    return (
        <body className='bg-neutral-100 w-full min-h-screen absolute'>
            <Navbar />


            <form action="results.html">
                <div class="flex flex-col h-30 w-full mt-20 justify-center">
                    <h1 class="text-center text-4xl p-5 font-poppins">Search For Kits</h1>
                        <form action="" className='flex flex-row self-center w-full justify-center'>
                        <input type="text" class="bg-neutral-200 w-2/3 h-20 rounded-md pl-3 right-0 border border-lblue3" placeholder="Search For a Kit" />
                        <button class="inline-block overflow-visible ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 m-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                        </form>
               </div>
            </form>

            <div className='flex flex-col m-10'>
                <h1 class="text-center text-4xl p-5 pb-8">Popular</h1>
                    <div className='grid sm:grid-cols-3 grid-cols-1 gap-8 flex flex-wrap  p-5 min-h-3/4'>
                        {
                            images.map((kit) => (
                                // <Kit src={kit.pic} name={kit.name} price={kit.price}/>
                                <Kit obj={kit}/>
                            ))
                        }
                    </div>

            </div>
           

            <Footer/>
        </body>
    )
}

export default Search