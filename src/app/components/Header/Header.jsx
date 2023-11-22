import React from 'react'
import Link from 'next/link'
import logoHeader from '@/app/assets/logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='px-[200px] max-[1030px]:px-[100px] max-[390px]:px-0 w-full bg-black text-white flex items-center max-[820px]:flex-col max-[820px]:py-4 py-4 justify-between'>
        <div>
            <Link href={"/"}>
              <Image
              alt='Logo header'
              src={logoHeader}
              width={169.5}
              height={48}
              className='max-[390px]:w-full'
              />
            </Link>
        </div>
        <div className='flex text-[#F0F0F0] gap-[25px]'>
            <Link className='hover:text-gray-300 transition-all duration-300 hover:scale-110 hover:underline' href={"/"}>Home</Link>
            <Link className='hover:text-gray-300 transition-all duration-300 hover:scale-110 hover:underline' href={"/Favoritos"}>Favoritos</Link> 
        </div>
    </div>
  )
}

export default Header
