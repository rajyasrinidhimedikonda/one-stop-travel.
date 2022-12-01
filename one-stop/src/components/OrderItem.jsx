import React from 'react'
import { Link } from 'react-router-dom'
const OrderItem = ({id, name, price, image, qty}) => {
  return (
    <div className='flex flex-row rounded-md w-1/2 ml-80 p-5 border'>
        <img src={image} alt="" className='w-48 h-48 p-3' />
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold text-center '>{name}
            <span className='ml-5 text-sm font-normal underline'>
                <Link to='/review' state={
                  {img: image, id: id}
                }>Review</Link>
            </span>
            </h1>
            <h3 className='text-center pb-5'>#120321010231</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
        </div>
    </div>
  )
}

export default OrderItem