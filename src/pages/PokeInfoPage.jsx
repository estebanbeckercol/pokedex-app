import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../components/styles/paginacion.css'
import App from '../App'







const PokeInfoPage = () => {

  
  
 

  const {id} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  },[])
  

  return (

    <article className='paginacion__principal'>
      <div className='header__rojo'></div>
      <div className='header__negro'></div>
      <div className='pokebola__pri'> <img className='img__poke' src="../../Pokebola-pokeball-png-0.png" alt="" /></div>
       <div className='img__principal--paginacion'>
        <img src="../../image 11.png" alt="" />

        
      

     
 

    </div>
      <div className='card__paginacion'>
      <img className='img__pokemon' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      <div className='id__pokemon'>
      <span className='span_num'>#</span>
      <h2 className='num__pokemon'>
        {pokemon?.id}
      </h2>
    </div>
      <h2 className='name__pokemon'>{pokemon?.name}</h2>

     <div className='talla__poke'>

      <section  className='peso__poke'>
      <h3>Weight</h3>
       <span>{pokemon?.weight /10}</span> kg
      </section>
     
        <section className='altura__poke'>
        <h3>Height</h3>
       <span>{pokemon?.height /10}</span> m
        </section>
      
   
     </div>

     <section className='habilidades'>
     <div className='type__pokemon'>
    <h3>Types</h3>
      <ul>
      {
        pokemon?.types.map(pokemon => (
          <li className='type__poke' key={pokemon.type.url}><span>{pokemon.type.name}</span></li>
          ))
     }
      </ul>
    </div>
     
      
     <div className='abilities__poke'>
      <h3>Abilities</h3>
      <ul className='abilities__pokemon'>
        <li>{pokemon?.abilities.map((ability) => ability.ability.name).join(', ')}</li>
      </ul>

     </div>
     </section>
  
     
      
    
        <h3 className='name__stats'>stats</h3>
        <ul className='stats__pokemon'>
        {
          pokemon?.stats.map(pokemon => (
            <li className='stats' key={pokemon.stat.url}>
            <span className='stats__nombre'>{pokemon.stat.name}</span>
            <span className='base__stats'>{pokemon.base_stat}</span>
        </li>
        ))
      }
      
        </ul>
       
      
       

      <h3 className='name__indices'>Game indices</h3>
      <ul>
      
        {
          pokemon?.game_indices.slice(1).map(pokemon => (
            <li   className='indices__pokemon' key={pokemon.version.name}>
             <span className='name__name'> {pokemon.version.name}</span>
             <span> {pokemon.game_index}</span>
          </li>
          ))
        }
      </ul>
      </div>

     
    
     

    </article>
  )
}

export default PokeInfoPage