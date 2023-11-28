import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import '../styles/pokeCard.css'

const PokeCard = ({ url }) => {

  const [infoPoke, getInfoPoke] = useFetch(url)

  useEffect(() => {
    getInfoPoke()
  },[])

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/pokedex/${infoPoke.id}`)
  }

  return (
    
    <article className='container__card' onClick={handleNavigate}>
        <div className='card'>
        <header>
            <img className='img' src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section>
            <h3 className='card__name'>{infoPoke?.name}</h3>
           <div className='card__info'>
           <ul>
                {
                    infoPoke?.types.map(infoType => (
                        <li className='card__tipo' key={infoType.type.url}>{infoType.type.name}/</li>
                    ))
                }
            </ul>
            <hr />
            <ul className='poderes_card'>
                {
                    infoPoke?.stats.map(infoStat => (
                        <li key={infoStat.stat.url}>
                            <span>{infoStat.stat.name}</span>
                            <span>{infoStat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
           </div>
        </section>
        </div>
       
    </article>
  )
}

export default PokeCard