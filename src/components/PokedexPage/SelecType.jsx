import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'

const SelectType = ({ setSelectValue}) => {


    const url = 'https://pokeapi.co/api/v2/type'
    const [infoTypes, getInfoTypes ]= useFetch(url)

    useEffect(() => {
        getInfoTypes()
    },[])

    const selectElement = useRef()


    const handleChange = ( )=> {
       setSelectValue(selectElement.current.value)
    }

  return (
    
    <div className='container__selection'>
        <div className='pokebola__heder'></div>
            <select className='selection' ref={selectElement} onChange={handleChange}>
        <option value="allPokemons">All pokemons</option>
        {
            infoTypes?.results.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
    </div>
    
  )
}

export default SelectType