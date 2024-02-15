import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline ,  IoCloseSharp, IoWallet, IoHelp} from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaCoins } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const[shop, setShop] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* left bar */}
      <div className='flex items-center'>
        <div onClick={()=> setShop(!shop)} className='cursor-pointer'>
           <AiOutlineMenu size={30} />
      </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Eats <span className='font-bold'>Foods</span>
        </h1>

        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[15px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/* search div */}

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <IoSearchOutline size={20} />
        <input type="text" placeholder='Enter your items' className='bg-transparent p-2 w-full focus:outline-none'/>
      </div>

      {/* cart btn */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full hover:bg-orange-500 hover:text-black'>
          <FiShoppingCart size={20} className='mr-1'/> Cart
      </button>

      {/* Side bar */}
      { shop ?<div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> :''}


      
          <div className={shop ? 'fixed top-0 left-0 w-[200px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[200px] h-screen bg-white z-10 duration-300'}> 
            < IoCloseSharp onClick={()=> setShop(!shop)} size={25} className='absolute right-4 top-5 cursor-pointer' />
            <h2 className='text-2xl p-4'>
              Eats <span className='font-bold'>Foods</span>
            </h2>
            <nav>
              <ul className='flex flex-col p-4 text-gray-600'>
                <li className='text-lg flex py-4'><TbTruckDelivery size={25} className='mr-4'/> Delivery</li>
                <li className='text-lg flex py-4'><MdFavorite size={25} className='mr-4'/> Favorites</li>
                <li className='text-lg flex py-4'><IoWallet size={25} className='mr-4'/> Wallet</li>
                <li className='text-lg flex py-4'><IoHelp size={25} className='mr-4'/> Help</li>
                <li className='text-lg flex py-4'><FaCoins size={25} className='mr-4'/>Coins</li>
                <li className='text-lg flex py-4'><FaUserFriends size={25} className='mr-4'/> Invite friends</li>
              </ul>
            </nav>

          </div>
      

    </div>
  )
}

export default Navbar