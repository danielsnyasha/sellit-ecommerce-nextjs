import Image from 'next/image'
import React from 'react'
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header() {
    const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;
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
            <Link href='/login'><div className=' link cursor-pointer'>
                <p className='hover:underline'> Hello Nyasha Daniel </p>
                <p className='font-extrabold md:text-sm'>Account & Lists</p>

            </div>
            </Link>

            <div className='link cursor-pointer'>
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>& Orders</p>

            </div>

            <div className='relative link flex items-center'>
                <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-red-600 text-center rounded-full text-red-50 font-bold'>4

                </span>
                <ShoppingCartIcon className='h-10'/>
                <p className='hidden sm:inline font-extrabold mt-2 md:text-sm'>Basket</p>
            </div>


        </div>



        </div>

        

        {/* Bottom Nav */}

        <div className='flex items-center space-x-3 p-2 bg-gray-800 text-white text-sm'>
            <p className='link flex items-center' >
                <MenuIcon className='h-6 mr-1'/>
                All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Business</p>
            <p className='link'>Today&apos;s Deals</p>

            <p className='link hidden lg:inline-flex'>Sports Wear</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>


        </div>
    </header>
  )
}

export default Header