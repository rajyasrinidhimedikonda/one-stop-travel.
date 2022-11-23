import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Kit = ({obj}) => {

    const [kit, setKit] = useState({obj}) 
    
  return (    
    
        <Link to='/kit' state={{kit:kit}}>
        
         <div   class="relative flex flex-col container bg-neutral-100 rounded-lg  hover:scale-105 delay-75 ">
             <img  class="h-72 min-h-full " src={obj.pic} alt=""/>
             <h1 class="  text-center text-xl pt-2 p-1 font-semibold"> {obj.name}</h1>
             <p class=" text-center text-slate-400 pl-1"> SUMMER KIT 22' </p>
             <p class=" text-center text-md text-lblue3"> {obj.price}</p>
         </div>
        </Link>

         
  )
}

export default Kit