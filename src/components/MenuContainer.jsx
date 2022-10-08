import React, { useEffect, useState }  from "react";
import {IoFastFood} from "react-icons/io5"
import { Categoris } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
const MenuContainer = ()=>{
    const [filter, setFilter] = useState("chicken")
    useEffect(() => {}, [filter]);
    const [{foodItems}, dispatch] = useStateValue();
    return (
        <setion className="w-full my-6 " id="menu">
            <div className="w-full flex flex-col items-center justify-center">
            <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute 
        before:rounded-lg before:content before:w-16 before:h-1
        before:bottom-0 before:left-0 before:bg-gradient-to-tr
         from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>
          Our Hot Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 
        overflow-x-scroll scrollbar-none">
           {Categoris && Categoris.map(category => (
            <motion.div
            whileTap={{scale: 0.6}}
             key={category.id} className={`group ${filter === category.urlParamName ? 'bg-red-600' : 'bg-card'} bg-white w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl
            flex flex-col gap-3 items-center justify-center`}
             onClick={() => setFilter(category.urlParamName)}
             >
                <div className={`w-10 h-10 rounded-full ${filter === category.urlParamName ? 'bg-card' : 'bg-red-600'} group-hover:bg-card flex items-center justify-center`}>
                <IoFastFood className={`${filter === category.urlParamName ? 'text-textColor' : 'text-white'} group-hover:text-textColor text-lg`}></IoFastFood>
                </div>
                <p className={`text-sm ${filter === category.urlParamName ? "text-white" : 'text-textColor'} group-hover:text-card`}>{category?.name}</p>
            </motion.div>
           ))}
        </div> 
            <div className="w-full">
                <RowContainer flag={false} data={foodItems?.filter(n=>n.category == filter)}/>
            </div>
    </div>
        
        </setion>
    )
}

export default MenuContainer