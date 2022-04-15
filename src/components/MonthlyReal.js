import React from 'react'
import {useGlobalContext} from '../context'

function MonthlyReal() {

    const { setNewReal, real, goals } = useGlobalContext();

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const handleChangeReal=(e)=>{
        setNewReal({val:e.target.value, id:e.target.id})
    }

  return (
      <>
        {real.map((item, index)=>{
            return (
            <form key={`real-${index}`} onSubmit={handleSubmit}>
                <input id={index} name='real' type='number' className={`real-input ${item >= goals[index] ? item===goals[index] ? 'on-target' : 'above-target' : 'target-missed'}`} min={0} step={50} value={item} onChange={handleChangeReal}/>
                {item >= goals[index] ? item===goals[index] ? <div className='comment-real'>on target</div> : <div className='comment-real'>above</div> : <div className='comment-real'>below</div>}
            </form>
            )
        })}
      </>
    
  )
}
export default MonthlyReal