import { useRef } from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart,AiFillCloseCircle } from 'react-icons/ai'
import Link from 'next/link'


function Navebar() {
  function toggleCart() {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')

    }
    else if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')

    }

  }
  const ref = useRef()
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center my-2 shadow-2xl'>
    <div className='logo'>
    <Link href={'/'}>
    <Image src={'/c-2.png'} height={30} width={60} />
    </Link>
    </div>
    <div>
    <ul className='flex items-center space-x-2 font-bold capitalize md:text-md'>
    <Link href={"tshirts"}>
    <li>tshirts</li>
    </Link>
    <Link href={"hoodies"}>
    <li>hoodies</li>
    </Link>
    <Link href={"stickers"}>
     <li>stickers</li>
    </Link>
   <Link href={"mugs"}>
    <li>mugs</li>
   </Link>
   
    </ul>
    </div>
    <div onClick={toggleCart}  className='cart absolute right-0 top-2 max-5'>
    <AiOutlineShoppingCart className='text-4xl'/>
    </div>
    <div ref={ref} className='sidebar absolute top-0 right-0 bg-green-100 p-10 transform transition-transform translate-x-full'>
    <h1 className='font-bold text-xl'>shopping cart</h1>
    <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-xl text-green-500'><AiFillCloseCircle/></span>
    <ol>
    <li>
    <span>Tshirt- wear it now </span>
    </li>
    </ol>
    
    </div>
    
    
    
    </div>
  )
}

export default Navebar