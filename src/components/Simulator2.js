import React, {useCallback, useEffect, useState} from 'react'
import {useGlobalContext} from '../context'

function Simulator2() {

  const {months, real, saveToLocalStorage} = useGlobalContext();

  const [savingYears, setSavingYears] = useState(0); 
  const [monthlyMin, setMonthlyMin] = useState(0); 
  const [expectedInt, setExpectedInt] = useState(0); 
  const [simTwoResults, setSimTwoResults] = useState(0);
  const [noInfo, setNoInfo] = useState(true);

  const handleSubmit = (e)=>{
    e.preventDefault(); 
  }

  const handleChangeYears = (e) =>{
    setSavingYears(parseInt(e.target.value))
  }

  const handleChangeMonthlyMin = (e)=>{
    setMonthlyMin(parseInt(e.target.value));
  }

  const handleChangeInterest=(e)=>{
    setExpectedInt(parseFloat((e.target.value/100)+1))
  }

  const handleAddGoals=()=>{
    saveToLocalStorage({months:months, goals: Array(12).fill(monthlyMin), interest:1, real:real, simOneResults: {years:0, months:0}});
  }
//Big function for simulator >> might put it in reducer file later. 
  const simulate2 = useCallback(()=>{
    let yearlyInput = monthlyMin*12;
    let yearsArray = []; 
    let accumulated = 0;
    let result = 0;
    if(yearsArray.length === 0 || monthlyMin===0 || expectedInt===0 || savingYears===0){
      result = 0.00;
      setNoInfo(true);
    }
    while(yearsArray.length < savingYears){
      accumulated+=yearlyInput; 
      accumulated*=expectedInt; 
      yearsArray.push(accumulated);
    }
    if(yearsArray.length>0 && monthlyMin > 0 && expectedInt>0 && savingYears>0){
          result = yearsArray[yearsArray.length-1];
  
    setSimTwoResults(result.toFixed(2));
    setNoInfo(false)
    }

    
  },[savingYears, monthlyMin, expectedInt])

  useEffect(()=>{
    simulate2();
  },[savingYears, monthlyMin, expectedInt])

  return (
    <div className='simulator'>
      <h5>Calculate how much you could save in a given time</h5>
      <form onSubmit={handleSubmit}>
        <p>How many years do you want to save for?</p>
        <input type='number' name='years' className='target' placeholder='15' step={1} min={0} max={100} onChange={handleChangeYears}></input>
        <p>What is the minimum you can save every month?</p>
        <input type='number' name='monthly-input' className='monthly-minimum' placeholder='150' step={50} min={0} max={99999999} onChange={handleChangeMonthlyMin}></input>
        <p>What is your expected interest rate (%) ?</p>
        <input type='number' name='expected-int' className='expected-int' placeholder='3' step={1} min={0} max={100} onChange={handleChangeInterest}></input>
      </form>
      <div className={`result ${noInfo? 'info-please':'info-success'}` }>
        {noInfo===true ? <h5>please enter fields</h5> : <h5>results :</h5>}
        <p>You could potentially save {simTwoResults} over the planned {savingYears} year period.</p>
      </div>
      

      <p>Add this monthly amount to your goals section</p>
      <button className='btn add-btn' onClick={()=>handleAddGoals()}>Add</button>
    </div>
  )
}
export default Simulator2