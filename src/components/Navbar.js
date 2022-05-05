import React, { useEffect } from 'react'
import logo from '../umbrella2.png'
import {Link, useLocation} from 'react-router-dom'
import {useGlobalContext} from '../context'

function Navbar() {

   const location = useLocation();
   const {getFromLocal} = useGlobalContext(); 

   useEffect(()=>{
     if(localStorage.getItem('Umbrella Day')){
       getFromLocal()
     }
   }, [location.pathname])
  
  return (
    <nav className='nav'>
      <div className='nav-content'>
        <Link to='/umbrelladay'><img className='nav-logo' src={logo} alt='the umbrella day logo'></img></Link>
        <h1 className='heading'>umbrella day</h1>
        <ul className='nav-links-container'>
          <li className='nav-links'><Link to='/umbrelladay'>Home</Link></li>
          
          <li className='nav-links'><Link to='/umbrelladay/personaltargets'>Goals</Link></li>
        </ul>
      </div>
    </nav>
  )
}



export default Navbar