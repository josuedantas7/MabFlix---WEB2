import Image from 'next/image'
import React from 'react'

const Banner = ({banner}) => {
  return (
    <div className='w-full h-[347px]'>
        <Image
        src={banner}
        alt='banner'
        className='w-full h-fit'
        />
    </div>
  )
}

export default Banner
