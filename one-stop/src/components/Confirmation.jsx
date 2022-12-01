import Navbar  from './Navbar';
import Footer from './Footer'
import {React, useContext, useEffect} from 'react'
import { CartContext } from '../contexts/CartContext';

const Confirmation = () => {
    const {purchasedItems} = useContext(CartContext)
    console.log('purchased items', purchasedItems);
  return (
    <>
    <Navbar/>

    <div className='flex flex-col text-center mt-20 min-h-screen bg-neutral-100'>
        <h1 className='text-4xl p-5'>Order has been successfully placed!</h1>
        <h1 className='text-2xl'>Confirtmation # 1243430297472</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Confirmation