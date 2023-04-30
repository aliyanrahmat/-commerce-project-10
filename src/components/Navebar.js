import React from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'


function Navebar() {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2'>
    <div className='logo'>
    <Image src={'/c-2.png'} height={30} width={60} />
    </div>
    <div>
    <ul className='flex items-center space-x-2 font-bold capitalize md:text-xl'>
    <li>tshirts</li>
    <li>hoodies</li>
    <li>stickers</li>
    <li>mugs</li>
    </ul>
    </div>
    <div className='cart absolute right-0 top-2 max-5'>
    <AiOutlineShoppingCart className='text-4xl'/>
    </div>
    
    
    
    </div>
  )
}

export default Navebar