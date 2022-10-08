import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion } from 'framer-motion'
import {RiRefreshFill} from 'react-icons/ri'

import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import EmptyCart from './img/emptyCart.svg'
import CardItem from './CardItem'
const CardContainer = () => {
    const [{cardShow, cartItems, user}, dispath] = useStateValue();

    const showCard =()=>{
        dispath({
            type: actionType.SET_CARD_SHOW,
            cardShow: !cardShow,
        })
        }
    
  return (
    <motion.div
    initial={{opacity: 0.0, x: 200}}
    animate={{opacity: 1, x: 0}}
    exit ={{opacity: 0, x: 200}}
    className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]'
    >
    <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
    <motion.div whileTap={{scale: 0.4}} onClick={showCard}>
        <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
    </motion.div>
        <p className='text-sm text-textColor'>Cart</p>
        <motion.p whileTap={{scale: 0.7}} className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md
        hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base'>Clear <RiRefreshFill/>
        </motion.p>
    </div>
    {/* bottom section */}
    {cartItems && cartItems.length >0 ? (
        <div className='w-full h-full bg-cardBg rounded-t-[2rem] flex flex-col'>
        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
            {/* cart Items */}
        {cartItems && cartItems.map((item) =>(
          <CardItem item ={item} key={item.id}/>
        ))}
        </div>
  {/* cart total section */}
  <div className='w-full flex-1 bg-slate-600 rounded-t-[2rem] flex flex-col items-center
        justify-evenly px-8 py-2'>
            <div className='w-full flex items-center justify-between'>
                <p className='text-white text-lg'>Sub Total</p>
                <p className='text-white text-lg'>$
                {cartItems && cartItems.map((item) =>(
                    item?.price* item.qty
                ))}
                </p>
            </div>
            <div className='w-full flex items-center justify-between'>
                <p className='text-white text-lg'>Delivery</p>
                <p className='text-white text-lg'>$ 2.5</p>
            </div>
            <div className='w-full border-b border-white my-2'></div>
            <div className='w-full flex items-center justify-between'>
                <p className='text-white text-xl font-semibold'>Total</p>
                <p className='text-white text-xl font-semibold'>$  {cartItems && cartItems.map((item) =>(
                    item?.price* item.qty + 2.5
                ))}</p>
            </div>
            {user ? (
                <motion.button whileTap={{scale: 0.8}} type="button"
            className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white text-lg my-2
            hover:shadow-lg transition-all duration-100 ease-out'>
                Check Out
            </motion.button>
            ) : (
                <motion.button whileTap={{scale: 0.8}} type="button"
            className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white text-lg my-2
            hover:shadow-lg transition-all duration-100 ease-out'>
                Login to check out
            </motion.button>
            )}
        </div>
    </div>  
   
    ) : (
        <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
        <img src={EmptyCart} alt="" className='w-300'/>
        <p className='text-xl text-textColor font-semibold'>
            Add some items to your cart
        </p>
        
        </div>
    )}
 
    </motion.div>
  )
}

export default CardContainer