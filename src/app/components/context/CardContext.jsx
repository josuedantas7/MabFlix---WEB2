'use client'
import React, { useState, useEffect, createContext } from 'react'
import db from '../../../../public/db.json'

export const CardContext = createContext()

const CardProvider = ({ children }) => {
    const [cards,setCards] = useState([])

    useEffect(() => {
        const cards = JSON.parse(localStorage.getItem('cards'))
        if (cards) {
            setCards(cards)
        } else {
            localStorage.setItem('cards', JSON.stringify(db.data))
            setCards(db.data)
        }
        console.log(cards)
    }, [])

    // function toggleFavoriteCard(card) {
    //     setCards((prevCards) => {
    //         return prevCards.map((item) => {
    //             if (item.id === card.id) {
    //                 return { ...item, liked: !item.liked };
    //             }
    //             return item;
    //         });
    //     });
    //     localStorage.setItem('cards', JSON.stringify(cards))
    // }

    const handleLikeToggle = (cardId) => {

        const updatedCards = [...cards];
    
        const cardToUpdate = updatedCards.find((card) => card.id === cardId);
    
        if (cardToUpdate) {
          cardToUpdate.liked = !cardToUpdate.liked;
          setCards(updatedCards)
          localStorage.setItem('cards', JSON.stringify(cards))
        }
      };

    return (
        <CardContext.Provider value={{cards, setCards, handleLikeToggle}}>
            {children}
        </CardContext.Provider>
    )
}

CardProvider.displayName = 'CardProvider'

export default CardProvider
