import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CartItems from './CartItems'

const Checkout = () => {

    //

    const handleSubmitBilling = (event)=>{
        event.preventDefault();

       


        
    }

  
  return (

    <>
    <Navbar/>
    <div class="flex flex-row space-x-10 mt-20">

    <div class="flex flex-col w-1/2 ml-10 mt-10 font-poppins">
        <h1 class="pb-3 ">Billing Details</h1>
        <form  onSubmit={handleSubmitBilling} action="" class="space-y-5 relative">
            <div class="flex flex-row space-x-3">
                <input type="text" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm   block w-full p-2.5 "
                    placeholder="First Name" required/>
                <input type="text" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name" required/>
            </div>
            <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Address" required/>
            <div class="flex flex-row space-x-3">
                <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                    class="text-white bg-lblue3 hover:bg-lblue2  focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2"
                    type="button">Country <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                        </path>
                    </svg></button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdown"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="Country">
                        <li>
                            <a href="#"
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">USA</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Canada</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mexico</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Qatar</a>
                        </li>
                    </ul>
                </div>

                <input type="text" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Zip Code" required/>

            </div>
            <button
                class=" absolute mt-5 w-1/4 h-10 bg-dblue1 text-center text-white rounded-lg right-0 hover:bg-turqse3">
                Save</button>

        </form>


        <div class=" relative flex h-screen flex-col mt-10 ">

            <h1 class="pb-3">Payment Method</h1>

            <form action="relative w-1/2">
                <div class="flex flex-row space-x-2 w-1/2 font-poppins">
                    <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-1/2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="bordered-radio-1"
                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Credit
                            Card</label>
                    </div>
                    <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-1/2">
                        <input checked id="" type="radio" value="" name="bordered-radio"
                            class="w-4 h-4  bg-gray-100 border-gray-300  "/>
                        <label for="bordered-radio-2"
                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Debit
                            Card</label>
                    </div>
                </div>

                <div class="relative z-0 mb-6 w-full group">
                    <input type="email" name="card-number" id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-lblue3 peer"
                        placeholder=" " required />
                    <label for="card-number"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lblue3 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Card
                        Number</label>
                </div>
                <div class="flex flex-row space-x-3">
                    <div class="relative z-0 mb-6  group w-1/2">
                        <input type="email" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lblue3 focus:outline-none focus:ring-0 focus:border-lblue3 peer"
                            placeholder=" " required />
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lblue3 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Security
                            Code</label>
                    </div>
                    <div class="relative z-0 mb-6  group w-1/2">
                        <input type="email" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-lblue3 peer"
                            placeholder=" " required />
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lblue3 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Experation
                            Date</label>
                    </div>

                </div>

                <button
                    class=" absolute mt-5 w-1/3 h-10 bg-dblue1 text-center text-white rounded-lg right-0 hover:bg-turqse3">
                    Add Payment Method</button>

            </form>

        </div>

    </div>

    <CartItems/>

</div>
<Footer/>
</>
  )
}

export default Checkout