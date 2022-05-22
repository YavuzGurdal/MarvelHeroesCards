import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterTable = ({ items, isLoading }) => {
    console.log(items)
    return (
        isLoading ? <h1>Loading ...</h1> :
            <section className='contents'>
                {
                    items.map(item => (
                        <CharacterItem key={item.id} item={item} /> // map den gelen item'i propsla CharacterItem componentine gonderiyorum
                    ))
                }
            </section>
    )
}

export default CharacterTable
