'use client'
import React from 'react'
import db from '../../../../public/db.json'
import Banner from '@/app/components/Banner/Banner'
import BannerPlayer from '@/app/assets/banner-player.png'

const page = ({params}) => {

    let id = params.params[0]
    let linkYt;

   db.data.filter((card) => {
        if (card.id == id){
            linkYt = card.link
            return card
        }
    })

    return (
        <div className='flex flex-col'>
            <Banner banner={BannerPlayer}/>
            <div className='mb-12'>
                <h1 className='font-semibold text-3xl text-center'>Player</h1>
            </div>
            <div className='flex justify-center mb-32'>
                <iframe
                    width="800"
                    height="676"
                    src={`${linkYt}`}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className='max-[920px]:w-[500px] max-[920px]:h-[400px] max-[570px]:w-[350px] max-[570px]:h-[300px] max-[390px]:w-[300px] max-[390px]:h-[200px]'
                ></iframe>
            </div>
        </div>
    )
}

export default page
