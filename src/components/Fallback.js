import React from 'react'

function Fallback() {
  return (
    <section className='section'>
        <h2>Oops, this page didn't load properly, please try refreshing</h2>
        <a className='btn' href='/personaltargets'><button>refresh</button></a>
    </section>
  )
}

export default Fallback