import React from 'react'
import Banner from '../components/Banner/Banner'
import CardHomePage from '../components/CardHomePage/CardHomePage'
import BannerFav from '@/app/assets/banner-favoritos.png'
import CardFavoritos from '../components/CardFavoritos/CardFavoritos'

const LikedPage = () => {
  return (
    <div>
        <div>
          <div>
            <Banner
            banner={BannerFav}
            />
          </div>
          <div className="px-[200px] max-[1030px]:px-[100px] max-[600px]:px-12 max-[430px]:px-0 mb-32">
            <div className='mb-12'>
              <h1 className="font-semibold text-3xl text-center">Meus favoritos</h1>
            </div>
            <CardFavoritos/>
          </div>
      </div>
    </div>
  )
}

export default LikedPage
