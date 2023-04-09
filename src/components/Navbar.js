import React, { useEffect } from 'react'
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
        <Link to='pers_projects/umbrelladay'><h1 className='heading'>umbrella day</h1></Link>
        <ul className='nav-links-container'>
          <li className='nav-links'><Link to='pers_projects/umbrelladay'>Home</Link></li>
          <li className='nav-links'><Link to='pers_projects/umbrelladay/personaltargets'>Goals</Link></li>
          <li className='nav-links'><Link to='pers_projects/umbrelladay/about'>About</Link></li>
        </ul>
      </div>
    </nav>
  )
}



export default Navbar