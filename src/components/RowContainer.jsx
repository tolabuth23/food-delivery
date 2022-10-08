import React, { useEffect, useRef, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import NotFound from './img/NotFound.svg'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const RowContainer =({flag,data, scrollValue})=>{
    const [{cartItems}, dispatch] = useStateValue();
    console.log(data)
    const rowContainer = useRef();
    const [items, setItems] = useState([])
    useEffect(()=> {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    const addToCart =(item)=>{
       
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        });
        localStorage.setItem("cartItems", JSON.stringify(items))
    }

    useEffect(() =>{
        addToCart()
    },[items])

    return <div
        ref = {rowContainer}
        className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
            flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"}`}
    >

       {data && data.length >0 ?  data.map(item => (
        <div key={item.id} className='w-300 min-w-[300px] md:w-340 md:min-w-[340px] my-12  h-[210px]
         bg-gray-200 rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg'>
            <div className='w-full flex items-center justify-between'>
                <motion.div className='w-40 h-40 -mt-8 drop-shadow-2xl'  whileTap= {{scale:1.2}}>
                <img 
                src={item?.imageURL}
                 alt=''
                className='w-full h-full object-contain'
                 />
                </motion.div>

                 <motion.div whileTap={{scale: 0.75 }} className='w-8 h-8 rounded-full flex items-center
                  justify-center cursor-pointer bg-red-500 hover:shadow-md' onClick={()=>setItems([...cartItems, item])}>
                    <MdShoppingBasket className='text-white'/>
                 </motion.div>
            </div>
            <div className='w-full flex flex-col gap-4 items-end justify-end m-0'>
                <p className='text-textColor m-0 font-semibold text-base md:text-lg'>
                {item?.title}
                </p>
                <p className='mt-1 text-sm text-gray-500 m-0'>
                    {item?.calories} Calories
                </p>
                <div className='flex items-center gap-8'>
                    <p className='text-lg text-headingColor font-semibold m-0'>
                        <span className='text-sm text-red-500'>$</span>{item?.price}
                    </p>
                </div>
            </div>
        </div>
       )): 
        <div className='w-full flex flex-col items-center justify-center'>
        <img src={NotFound} className="h-420"/>
        <p>Items Not Available</p>
        </div>
       }

    </div>;




};
export default RowContainer;