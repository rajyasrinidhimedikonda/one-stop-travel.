import {React, useContext, useEffect} from 'react'
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom'



const CartItems = () => {
  const navigate = useNavigate();
    const {cart, fetchCart, emptyCart, purchasedItems, setPurchasedItems} = useContext(CartContext)
    useEffect(() => {
        console.log(cart);
      fetchCart();
    }, [cart])


    const purchase=()=>{
      //if billing and payment method passed
      if(cart){
        cart.line_items.map((kit)=>{
          setPurchasedItems(curr=>[...curr, kit])
        })
        navigate('/confirmation')
      }
    }
  return (
    <div className='w-1/2 p-5 bg-slate-200 flex flex-col  space-y-2'>

   {
    cart ? cart.line_items.map((prod)=>(
        <CartItem id={prod.product_id} name={prod.name} price={prod.price.formatted_with_symbol} image={prod.image.url} qty={prod.quantity} />
  )) : null
   }

    <div className='flex flex-col space-y-2'>

    <h1 className='text-2xl font-bold'>Total: {cart ? cart.subtotal.formatted_with_symbol : null}</h1>
    <div className='flex flex-row space-x-3'>
    <button onClick={purchase} className='bg-slate-400 rounded-md w-1/2 h-10 text-white '> Purchase</button>
    <button onClick={emptyCart} className='bg-red-500 w-1/2 h-10 rounded-md text-white hover:bg-red-400'> Empty Cart</button>
    </div>
    </div>
    </div>

  )
}

export default CartItems