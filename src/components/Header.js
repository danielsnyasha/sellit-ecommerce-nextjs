import Image from 'next/image'
import React from 'react'
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"


function Header() {
  return (
    <header>

        {/* Top Nav */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-0 mr-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image src='/images/logo1eleganza.jpg' alt='me' width={150} height={50} style={{objectFit:"cover"}} className='cursor-pointer rounded-md' />
            </div>
            {/* Search */}
        <div className='hidden sm:flex bg-red-400 hover:bg-red-500 items-center h-10 rounded-sm flex-grow cursor-pointer'>
            <input type="text
            " className='bg-red-50 p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4'/>
            
            <SearchIcon className='h-12 p-4'/>


        </div>

        {/* Right */}
        <div className='text-red-50 items-center text-xs font-bold flex space-x-6 mx-6 whitespace-nowrap'>
            <div className='cursor-pointer link'>
                <p> Hello Nyasha Daniel </p>
                <p>Account & Lists</p>

            </div>

            <div className='cursor-pointer link'>
                <p>Returns</p>
                <p>& Orders</p>

            </div>

            <div className='cursor-pointer link'>
                <ShoppingCartIcon className='h-10'/>
                <p>Basket</p>
            </div>


        </div>



        </div>

        

        {/* Bottom Nav */}

        <div>



        </div>
    </header>
  )
}

export default Header