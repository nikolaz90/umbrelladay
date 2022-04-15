import React, { useEffect } from 'react'
import logo from '../lobster-148459_1280.png'
import {Link, useLocation} from 'react-router-dom'
import {useGlobalContext} from '../context'

function Navbar() {

   const location = useLocation();
   const {getFromLocal} = useGlobalContext(); 

   useEffect(()=>{
     if(localStorage.getItem('Savings Lobster')){
       getFromLocal()
     }
   }, [location.pathname])
  
  return (
    <nav className='nav'>
      <div className='nav-content'>
        <Link to='/savingslobster'><img className='nav-logo' src={logo} alt='the savings lobster logo'></img></Link>
        <h1 className='heading'>savings lobster</h1>
        <ul className='nav-links-container'>
          <li className='nav-links'><Link to='/savingslobster'>Home</Link></li>
          
          <li className='nav-links'><Link to='/savingslobster/personaltargets'>Goals</Link></li>
        </ul>
      </div>
    </nav>
  )
}



export default Navbar