import React, { useState } from 'react';
import Logo from './img/logo.png';
import Avatar from './img/avatar.png';
import {MdAddShoppingCart,MdAdd, MdLogout} from 'react-icons/md';
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{user,cardShow,cartItems}, dispath] = useStateValue()
    const [isMenu, setIsMenu] = useState(false)
 
    const login = async () =>{
        if(!user){
            const {
                user: {refreshToken, providerData }
            } = await signInWithPopup(firebaseAuth, provider);
        dispath({
            type: actionType.SET_USER,
            user: providerData[0]
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]));
        }else{
            setIsMenu(!isMenu)
        }
    }

    const logout = async () =>{
        setIsMenu(false)
        localStorage.clear()
        dispath({
            type: actionType.SET_USER,
            user: null
        });
    }

    const showCard =()=>{
        dispath({
            type: actionType.SET_CARD_SHOW,
            cardShow: !cardShow,
        })
        }
    

  return (
    <header className='fixed w-screen p-3 drop-shadow-md px-4 md:p-6 md:px-16 bg-slate-50'>
    {/* destoop & Tablet */}
    <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={"/"} className='flex items-center gap-2'>
            <img src={Logo} alt='logo' className='w-8 object-cover'/>
            <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='flex items-center gap-8'>
            <motion.ul 
            initial={{opacity: 0, x:200}}
            animate={{opacity: 1, x:0}}
            exit={{opacity: 0, x:200 }}
             className='flex items-center gap-8'>
                <Link to={"/"}><li className='text-base text-textColor hover:text-headingColor duration-100
                transition-all ease-in-out cursor-pointer'
                onClick={()=>setIsMenu(false)}>Home</li></Link>
                <li className='text-base text-textColor hover:text-headingColor duration-100
                transition-all ease-in-out cursor-pointer'
                onClick={()=>setIsMenu(false)}>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100
                transition-all ease-in-out cursor-pointer'
                onClick={()=>setIsMenu(false)}>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100
                transition-all ease-in-out cursor-pointer'
                onClick={()=>setIsMenu(false)}>Service</li>
            </motion.ul>
            <div className='relative flex items-center justify-center ' onClick={showCard}>
                <MdAddShoppingCart className='text-textColor text-2xl ml-8 cursor-pointer'/>
                {cartItems && cartItems.length>0 &&(
                    <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                    <p className='text-sm text-white font-semibold'>{cartItems.length}</p>
                </div>
                )}
            </div>

            <div className='relative'>
                <motion.img whileTap={{scale: 0.6}}
             src={user ? user.photoURL : Avatar} alt="Userprofile" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer 
             rounded-full'
                onClick={login}
             />
          {
            isMenu && (
                <motion.div 
                initial={{opacity: 0, scale: 0.6}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.6}}
                
                 className='w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute 
            top-12 right-0'>
             
                {user && user.email === "std.62122420127@ubru.ac.th" && (
                    
                <Link to={"/createItem"}>
                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer
             hover:bg-slate-200 translate-all duration-100 ease-in-out text-textColor text-base'>
                    New Item <MdAdd/>
                    </p>
                </Link>
                )}
             
             <p className='px-4 py-2 flex items-center gap-3 cursor-pointer
             hover:bg-slate-200 translate-all duration-100 ease-in-out text-textColor text-base' 
             onClick={logout}>Logout <MdLogout/></p>
            </motion.div>
            )
          }

            </div>

        </div>
    </div>  

    {/* mobile */}
    <div className='flex md:hidden w-full h-full items-center justify-between'>
    
        <div className='relative flex items-center justify-center '>
                <MdAddShoppingCart className='text-textColor text-2xl ml-8 cursor-pointer' onClick={showCard}/>
                {cartItems && cartItems.length>0 &&(
                    <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                    <p className='text-sm text-white font-semibold'>{cartItems.length}</p>
                </div>
                )}
            </div>
            <Link to={"/"} className='flex items-center gap-2'>
            <img src={Logo} alt='logo' className='w-8 object-cover'/>
            <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='relative'>
                <motion.img whileTap={{scale: 0.6}}
             src={user ? user.photoURL : Avatar} alt="Userprofile" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer 
             rounded-full'
                onClick={login}
             />
          {
            isMenu && (
                <motion.div 
                initial={{opacity: 0, scale: 0.6}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.6}}
                
                 className='w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute 
            top-12 right-0'>
             
                {user && user.email === "std.62122420127@ubru.ac.th" && (
                    
                <Link to={"/createItem"}>
                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer
             hover:bg-slate-200 translate-all duration-100 ease-in-out text-textColor text-base'>
                    New Item <MdAdd/>
                    </p>
                </Link>
         
                )}
                <ul 
            
                className='flex flex-col  '>
               <li className='text-base text-textColor hover:text-headingColor duration-100
               transition-all ease-in-out cursor-pointer  hover:bg-slate-200 px-4 py-2'>Home</li>
               <li className='text-base text-textColor hover:text-headingColor duration-100
               transition-all ease-in-out cursor-pointer  hover:bg-slate-200 px-4 py-2'>Menu</li>
               <li className='text-base text-textColor hover:text-headingColor duration-100
               transition-all ease-in-out cursor-pointer  hover:bg-slate-200 px-4 py-2'>About Us</li>
               <li className='text-base text-textColor hover:text-headingColor duration-100
               transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'>Service</li>
           </ul>
             
             <p className='m-2 p-2 rounded-md shadow-md flex items-center gap-3 bg-gray-200 cursor-pointer
             hover:bg-gray-300 translate-all duration-100 ease-in-out text-textColor text-base'
             onClick={logout}
             >Logout <MdLogout/></p>
            </motion.div>
            )
          }

            </div>

    </div>
    </header>
  )
}

export default Header;