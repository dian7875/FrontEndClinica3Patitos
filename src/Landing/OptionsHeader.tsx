import React from 'react'
import myImage from '../resources/Logo.png'
import { Link } from 'react-router-dom'


function OptionsHeader() {


  return (
    <>
    <div className='Mid-Header flex justify-between '>

    <div className='IcoPage'>
<img className='w-28 h-28' src={myImage} alt="" />
    </div>

    <div className='options flex gap-6 m-8'>
    <h3>Inicio</h3>
    <Link to={'/login'}>
    <h3>Agendar Cita</h3>
    </Link>
    <h3>Servicios Medicos</h3>
    <h3>Contactenos</h3>
    <Link to={'/login'}>
    <h3>Para Clientes</h3>
    </Link>
    <Link to={'/login'}>
    <h3>Para Administrativos</h3>
    </Link>
    
    </div>
    </div>
      
    </>
  )
}

export default OptionsHeader
