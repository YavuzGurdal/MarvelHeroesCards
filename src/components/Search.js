import React, { useState } from 'react'

const Search = ({ search }) => { // propsdan gelen fonksiyonu yakaliyoruz
    const [text, setText] = useState('')

    const onSearch = (q) => {
        setText(q) // bunu yazdiklarim i inputta gormek icin yazdim
        search(q) // inputa yazilanlari search fo nksiyonuna gonderiyorum
    }

    return (
        <section className='search'>
            <form action="">
                <input
                    type="text"
                    className='form-control'
                    placeholder='Find a Character'
                    autoFocus
                    onChange={(e) => onSearch(e.target.value)} // inputa girilen degerleri onSearch fonksiyonuna gonderiyorum
                    value={text}
                />
            </form>
        </section>
    )
}

export default Search
