import React, { useEffect, useRef, useState } from 'react'
import {useSelector} from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import PokeInfoPage from './PokeInfoPage'
import SelectType from '../components/PokedexPage/SelecType'
import '../components/styles/pokebolas.css'


const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')

  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainerName =useSelector(store => store.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

  const [pokemons, getPokemons, getByTypePokemons ] = useFetch(url)

  useEffect(()=> {
    if(selectValue === 'allPokemons'){
      getPokemons()
    } else {
      getByTypePokemons(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault();
    setInputValue( inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }

  const cbFilter = (poke) => {
    //filtro por nombre en el input 
    const nameFiltered = poke.name.includes(inputValue)
    
    return nameFiltered
  }

  return (
    <div className='app'>
       
      <div className='container__background-pokebolas'> 
        <div className='pokebola pokebola1'></div>
        <div className='pokebola pokebola2'></div>
        <div className='pokebola pokebola3'></div>
        <div className='pokebola pokebola4'></div>
        <div className='pokebola pokebola5'></div>
        <div className='pokebola pokebola6'></div>
        <div className='pokebola pokebola7'></div>
      </div>
     <div className='header'>
       <p className='parrafo__app'> welcome <span className='nombre__trainer'>{trainerName}</span>, here you can find your favorite pokemon, let's go!</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      </div>
      <SelectType
       setSelectValue={setSelectValue}
      />
      <div>
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
             key={poke.url}
             url={poke.url}
            />
            
          ))

        }
      </div>
    </div>
  )
}

export default PokedexPage