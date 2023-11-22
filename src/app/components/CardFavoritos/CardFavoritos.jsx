'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import db from '../../../../public/db.json'
import { useRouter } from 'next/navigation'

const CardFavoritos = () => {

  const router = useRouter()

    const [cards,setCards] = useState(db.data)

    const handleLikeToggle = (cardId) => {

        const updatedCards = [...cards];

        const cardToUpdate = updatedCards.find((card) => card.id === cardId);

        if (cardToUpdate) {
            cardToUpdate.liked = !cardToUpdate.liked;
            setCards(updatedCards);
        }
    };
    

    const redirect = (id) => {
      router.push(`/filme/${id}`)
    }

  return (
    <div className='flex justify-around max-[820px]:justify-center flex-wrap gap-6'>
      {cards.map((card) => (
        card.liked === true &&
        <div className='rounded-b-md cursor-pointer border-2 border-gray-500' key={card.id}>
          <div className='w-[282px] h-[425px] bg-black'>
            <div onClick={() => redirect(card.id)}>
              <Image
              alt='Foto usuário'
              src={card.capa}
              width={282}
              height={425}
              className='w-full h-full'
              />
            </div>
          </div>
          <div className='w-[282px] h-[116px] rounded-b-2xl bg-[#E2E2E2] shadow-2xl relative border-2' >
            <h1 className='text-xl font-bold px-[27px]'>
              {card.titulo}
            </h1>
            <div>
                <button
                  onClick={() => handleLikeToggle(card.id)}
                  className='absolute bottom-6 px-[27px] text-2xl'
                >
                  {card.liked !== false ? <AiFillHeart className='text-red-700' /> : <AiOutlineHeart />}
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardFavoritos
