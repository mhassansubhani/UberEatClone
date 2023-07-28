import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch,AiFillTag } from "react-icons/ai";
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends,FaWallet} from 'react-icons/fa';
import {MdFavorite,MdHelp} from 'react-icons/md';

function Navbar() {
    const [nav,setNav]=useState(false);
  return (
    <div className='max-w-[1640] mx-4 flex justify-between items-center py-3' >
      {/* Left side */}
      <div className='flex items-center' >
      <div onClick={()=>setNav(!nav)} className='cursor-pointer'> 
        <AiOutlineMenu size={30} className='mr-4'/>
      </div>
      <h1 className=' text-2xl sm:text-3xl lg:text-4xl px-2'> Best <span className='font-bold' >Eats</span> </h1>

      <div className=' hidden lg:flex bg-gray-200  p-1 rounded-full text-[14px]'>

      <p className='bg-black text-white rounded-full p-2'> Delivery </p>
        <p className='p-2'> Pickup </p>
      </div>
       
         </div>


     {/* search input */}


<div className=' flex bg-gray-200 items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] rounded-full '>
    <AiOutlineSearch size={25}/>
    <input type="text" placeholder='Search Food' className='bg-transparent focus:outline-none p-2  w-full'/>
</div>

{/* cart div */}
<button className='bg-black text-white hidden md:flex py-2 rounded-full '>
    <BsFillCartFill size={22} className='mr-2'/> 
    <p> Cart </p>
</button>

{/* mobile menu */} 
{/* overlay */}
{nav?<div className='bg-black/80 opacity-80 fixed h-screen w-full z-10 left-0 top-0'>
     </div> :""}

     
{/* <div className='bg-black/80 opacity-80 fixed h-screen w-full z-10 left-0 top-0'>
     </div> */}


{/* side-drawer */}
<div className={nav?'fixed top-0 left-0 w-[300px] h-screen duration-300 z-10 bg-white':'hidden'}>
<AiOutlineClose onClick={()=>setNav(!nav)} size={25} className='absolute right-4 top-5 cursor-pointer'/>
<h2 className='text-2xl  p-4'> Best <span className='font-bold'>Eats</span></h2>
<hr />
    <items>
        <ul className='fkex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
                <TbTruckDelivery size={30} className='mr-4 '/> Orders
            </li>
            <hr />
            <li className='text-xl py-4 flex'>
                <MdFavorite size={30} className='mr-4 '/> Favourites
            </li>
            <hr />
            <li className='text-xl py-4 flex'>
                <FaWallet size={30} className='mr-4 '/> Wallet
            </li>
            <hr />
            <li className='text-xl py-4 flex'>
                <MdHelp size={30} className='mr-4 '/> Help
            </li>
            <hr />
            <li className='text-xl py-4 flex'>
                <AiFillTag size={30} className='mr-4 '/> Promotion
            </li>
            <hr />
            <li className='text-xl py-4 flex'>
                <BsFillSaveFill size={30} className='mr-4 '/> Best Ones
            </li>
            <hr />
            <li className='text-xl py-4 flex'>
                <FaUserFriends size={30} className='mr-4  '/> Invite Friends
            </li>
        </ul> 
    </items>
     </div>

    </div>
  )
}

export default Navbar
