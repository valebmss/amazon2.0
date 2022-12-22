import React from 'react';
import Image from 'next/image';
import{
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header>
        <div className='flex items-center bg-amazon_blue p1 flex-glow py-2'>
            <div className='m-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                onClick={() => router.push('/')}
                src="https://links.papareact.com/f90"
                width={120}
                height={30}
                className='cursor-pointer'/>
            </div>

            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
              <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' type="text"/>
              <SearchIcon className="h-12 p-4"/>
            </div>
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
              <div onClick={!session ? signIn : signOut} className='link cursor-pointer'>
                <p>
                  {session ? `Hello ${session.user.name}` : "Sign In"}
                </p>
                <p className='font-extrabold md:text-sm'>Account and Lists</p>
              </div>
              <div className='link'>
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>and Others</p>
              </div>
              <div onClick={() => router.push('/checkout')} className='relative link flex items-center'>
                <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                  0
                </span>
                <ShoppingCartIcon className='h-10'/>
                <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
              </div>
            </div>
        </div>

        
        <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
            <p className='link flex items-center'>
              <MenuIcon className='h-6 mr-1'/>
              All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Bussiness</p>
            <p className='link'>Today's Deasly</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food and Grocery</p>
            <p className='link hidden lg:inline-flex'>Prind</p>
            <p className='link hidden lg:inline-flex'>Buy again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health and Personal care</p>

        </div>
    </header>
  )
}

export default Header