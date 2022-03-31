import './App.css';
import Header from './components/Header';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterTable from './components/CharacterTable';

const hash = '23bc99dc01f52fc8e6adb3d3052a5877'
function App() {
  const [items, setItems] = useState([]) // axios la aldigim verileri burada tutuyorum
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // gelen datayi bekleyecegim icin async yaptim
    const fetch = async () => {
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9040d47066323e06a3d244d25fca2e7c&hash=${hash}`)
      console.log(result.data.data.results)
      setItems(result.data.data.results) // gelen datayi items e atiyorum
      setIsLoading(false)
    }

    fetch() // fonksiyonu cagiriyorum yani calistiriyorum
  }, [])

  return (
    <div className="container">
      <Header />
      <CharacterTable items={items} isLoading={isLoading} /> {/* items ve isLoading'i props ile CharacterTable componentine gonderiyorum */}
    </div>
  );
}

export default App;
