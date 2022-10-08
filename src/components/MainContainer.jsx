import React, { useEffect, useRef, useState } from 'react'
import HomeContainer from './HomeContainer'
import Delivery  from './img/delivery.png'
import { motion } from 'framer-motion'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import MenuContainer from './MenuContainer'
import CardContainer from './CardContainer'
const MainContainer = () => {
  const [{foodItems, cardShow}, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  
  useEffect(() => {}, [scrollValue,cardShow]);
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center overflow-hidden'>
    <HomeContainer/>
    <section className='w-full'>
      <div className='w-full flex items-center justify-between'>
        <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute 
        before:rounded-lg before:content before:w-32 before:h-1
        before:bottom-0 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
          Our fresh & healthy fruits
        </p>
        <div className='hidden md:flex gap-3 items-center'>
          <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center 
          cursor-pointer hover:shadow-lg justify-center'
          onClick={() => setScrollValue(-200)}>
          
                  <MdChevronLeft className='text-lg text-white'/>
          </motion.div>
          <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center cursor-pointer  hover:shadow-lg justify-center'
           onClick={() =>setScrollValue(200)}>
           
            <MdChevronRight className='text-lg text-white'/>
          </motion.div>
        </div>
      </div>
    <RowContainer 
    scrollValue = {scrollValue}
    flag={true} 
    data = {foodItems?.filter((n) => n.category === "chicken")} />
    </section>
    <MenuContainer/>
   {cardShow && (
    <CardContainer/>
   )}
    </div>
  )
}

export default MainContainer