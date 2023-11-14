import Image from 'next/image'
import React from 'react'

const Banner = ({banner}) => {
  return (
    <div className='w-full h-[347px] pb-8'>
        <Image
        src={banner}
        alt='banner'
        className='w-full h-full'
        />
    </div>
  )
}

export default Banner
