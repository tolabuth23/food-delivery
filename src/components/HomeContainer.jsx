import React from 'react'
import { heroData } from '../utils/data'
import Delivery  from './img/delivery.png'
import HeroBg from './img/heroBg.png'
const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
      <div className='py-2  flex-1 flex flex-col items-start  justify-center gap-6'>
      <div className='flex items-center gap-2 justify-center bg-orange-100 px-4  py-1
      rounded-full'>
        <p className='text-base text-orange-500 font-semibold'>
          Bike Delivery
        </p>
        <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-2xl'>
          <img src={Delivery} alt="deliver" className='w-full h-full object-contain'/>
        </div>
      </div>
      <p className='text-[2.5rem] md:text-[4.25rem] font-bold tracking-wide text-headingColor'>
      The Fastest
       Delivery in{" "} 
      <span className='text-orange-500 text-[2.5rem] lg:text-[5rem]'>Your City</span>
      </p>
      <p className='text-base text-textColor text-center lg:text-left md:w-[80%]'>
      Id adipisicing ea voluptate dolor irure ullamco minim dolore amet.
       Ad eu et aute aliqua proident ex elit adipisicing cupidatat consectetur Lorem. 
       Labore elit incididunt ad do laborum et culpa exercitation ex id aliquip Lorem qui dolore.
       </p>
       <button
        className='md:w-auto bg-gradient-to-br from-orange-400 to-orange-400 w-full px-4 py-2 rounded-xl
       hover:shadow-lg transition-all ease-in-out duration-100'>
        Order Now
       </button>
      </div>
      <div className='py-2 mt-12 flex-1 flex items-center relative'>
          <img src={HeroBg}
           className="ml-auto h-460 w-full lg:w-auto lg:h-600" 
           alt='background'/>



        <div className='w-full h-full absolute top-0 left-0 flex items-center
          lg:px-32 justify-center  px-32 py-4 gap-4 flex-wrap'>
          { heroData && heroData.map(n=>(
            <div key={n.id} className='w-210 p-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col
           items-center justify-center'>
            <img className='w-40 -mt-20' src={n.imageSrc}></img>
            <p 
            className='text-lg text-textColor font-semibold'
            >{n.names}
            </p>
            <p
             className='text-sm text-lighttextGray font-semibold '>
             {n.decp}
             </p>
             <p className='text-sm text-headingColor font-semibold my-3'>
              <span className='text-xs text-red-600'>$</span>{n.price}
             </p>
          </div>
          ))}

          </div>
      </div>
    </section>
  )
}

export default HomeContainer