import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName.slice'
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
import '../components/styles/home.css'

const HomePage = () => {

    const inputName = useRef()

    

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }

  return (
   <div className='container__principal'>
    <div className='img__principal'>
        <img src="../../public/image 11.png" alt="" />
    </div>
    <h2 className='title__principal'>¡Hi Trainer!</h2>
    <p className='parrafo__principal'>To start, please give me your trainer name</p>
    <form className='formulario__principal' onSubmit={handleSubmit}>
        <input ref={inputName} type="text" />
        <button>Catch them all!</button>
    </form>
    <div className='footer__rojo'></div>
    <div className='footer__negro'></div>
    <div className='pokebola__primcipal'> <img className='img__pokebola' src="../../public/Pokebola-pokeball-png-0.png" alt="" /></div>
    <div className='img__pikachu'><img src="../../public/pikachu.png" alt="" /></div>
   </div>
  )
}

export default HomePage