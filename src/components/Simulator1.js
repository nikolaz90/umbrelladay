import React, {useState, useEffect, useCallback} from 'react'
import {useGlobalContext} from '../context'

function Simulator1() {
  
  const {months, real, saveToLocalStorage} = useGlobalContext();
  

  const [goal, setGoal] = useState(0);
  const [monthlyMin, setMonthlyMin] = useState(0);
  const [expectedInt, setExpectedInt] = useState(0);
  const [simOneResults, setSimOneResults] = useState({years:0,months:0})
  const [noInfo, setNoInfo] = useState(true);

  const handleSubmit=(e)=>{
    e.preventDefault(); 
  }

  const handleChangeTarget = (e)=>{
    setGoal(parseInt(e.target.value))
  }

  const handleMonthlyMin = (e)=>{
    setMonthlyMin(parseInt(e.target.value))
  }
  const handleExpInterest = (e)=>{
    setExpectedInt(parseFloat((e.target.value/100)+1))
  }
  const handleAddGoals=()=>{
    saveToLocalStorage({months:months, goals: Array(12).fill(monthlyMin), interest:1, real:real, simOneResults: {years:0, months:0}});
  }
  //Big function for simulator >> might put it in reducer file later. 
  const simulate = useCallback(()=>{
        let temp = {yearArray:[], yearlyInput:(monthlyMin*12), accumulatedInTotal: 0, countMonths:0, countYears:0, remainder:0};
        let ans = {years:0, months:0}

        if(goal ===0 || expectedInt===0 || monthlyMin===0){
            setNoInfo(true);
            return console.log('please enter info')
        }
        if(temp.yearlyInput === goal){
            ans = {years:1, months:0};
            setNoInfo(false);
            return setSimOneResults(ans);
        }
        if(temp.yearlyInput>goal){
            while(temp.accumulatedInTotal<goal){
              temp.accumulatedInTotal += monthlyMin; 
              temp.countMonths++;
            }
            ans = {years:0,months:temp.countMonths};
            setNoInfo(false);
            return setSimOneResults(ans);
        }
        if(temp.yearlyInput<goal){
            while(temp.accumulatedInTotal<goal){
                temp.accumulatedInTotal += temp.yearlyInput; 
                temp.accumulatedInTotal *= expectedInt;
                temp.yearArray.push(parseFloat(temp.accumulatedInTotal.toFixed(2))) 
            }
            temp.countYears = temp.yearArray.length-1; 
            let finalYear = temp.yearArray[temp.yearArray.length-2]; 
            if(finalYear<goal){
                    while(finalYear<goal){
                    finalYear += monthlyMin; 
                    temp.countMonths++;
                    }
                    if(temp.countMonths>11){
                    ans={years:temp.countYears+1,months:0}
                    return setSimOneResults(ans);
                    }
                  ans = {years:temp.countYears, months:temp.countMonths}
                  setNoInfo(false);
                return setSimOneResults(ans);
            }
            ans = {years:temp.countYears, months:temp.countMonths}
            setNoInfo(false);
            return setSimOneResults(ans);
            }
            setNoInfo(false);
        return setSimOneResults(ans);
      })




  useEffect(()=>{
    simulate();
  }, [goal, monthlyMin, expectedInt])

  

  return (
    <div className='simulator'>
      <h5>Calculate how long it will take to reach a given target</h5>
      <form onSubmit={handleSubmit}>
        <p>How much do you want to save?</p>
        <input type='number' name='target' className='target' placeholder='10000' step='50' min={0} max={99999999} onChange={handleChangeTarget}></input>
        <p>What is the minimum you can save every month?</p>
        <input type='number' name='monthly-minimum' className='monthly-minimum' placeholder='150' step='50' min={0} max={99999999} onChange={handleMonthlyMin}></input>
        <p>What is your expected interest rate (%) ?</p>
        <input type='number' name='expected-int' className='expected-int' placeholder='3' step='1' min={0} max={100} onChange={handleExpInterest}></input>
      </form>
      <div className={`result ${noInfo? 'info-please':'info-success'}` }>
        {noInfo===true ? <h5>please enter fields</h5> : <h5>results : </h5>}
        <p>It will take you {simOneResults.years} years and {simOneResults.months} months</p>
      </div>

      <p>Add this monthly amount to your goals section</p>
      <button className='btn add-btn' onClick={()=>handleAddGoals()}>Add</button>
    </div>
  )
}



export default Simulator1