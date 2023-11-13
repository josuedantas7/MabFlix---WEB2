import React from 'react'
import Link from 'next/link'
import logoHeader from '@/app/assets/logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='px-[200px] h-[88px] w-full bg-black text-white flex items-center justify-between'>
        <div>
            <Image
            alt='Logo header'
            src={logoHeader}
            width={169.5}
            height={48}
            />
        </div>
        <div className='flex text-[#F0F0F0] gap-[25px]'>
            <Link className='hover:text-gray-300 transition-all duration-300 hover:scale-110 hover:underline' href={"/"}>Home</Link>
            <Link className='hover:text-gray-300 transition-all duration-300 hover:scale-110 hover:underline' href={"/Favoritos"}>Favoritos</Link> 
        </div>
    </div>
  )
}

export default Header
