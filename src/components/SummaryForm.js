import React, {useRef} from 'react';
import {useGlobalContext} from '../context'


function SummaryForm() {

    const { setStartMonth, set12Goals, setExpectedInterest, months} = useGlobalContext();
    

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const handleChange=()=>{
        setStartMonth(currentValue.current.value);
    }

    const handleChange12Goals=(e)=>{
        set12Goals(e.target.value)
    }
    
    const handleChangeInterest=(e)=>{
        setExpectedInterest(((e.target.value)/100)+1)
    }
    
    const currentValue = useRef('');

  return (
    <form className='summary-form-goals' onSubmit={handleSubmit}>
              <label>start in : </label>
              <select ref={currentValue} onChange={handleChange}>
                {months.map((item, index)=>{
                  return (<option key={index} value={index}>{item}</option>)
                })}
              </select>
              <label>expected interest rate (%)</label>
              <input type='number' name='expected-interest' placeholder='1' min={0} max={100} onChange={handleChangeInterest}></input>
              <label>set monthly goals to :</label>
              <input type='number' name='12-goals' className='12-goals' placeholder='250' min={0} step={50} onChange={handleChange12Goals}></input>
            </form>
  )
}



export default SummaryForm 